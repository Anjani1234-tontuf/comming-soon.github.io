'use strict';

var GDOCKEY = '1YldbZLeOcR1X553RzMOmAt2w6xOJmbE8cJ4mm4PSkD8';
var dataUrl = 'https://spreadsheets.google.com/feeds/list/' + GDOCKEY + '/1/public/values?alt=json-in-script';

var masterList = [];
var playlist;
var player;
var currentVideoIndex = 0;
var countdown = $('#audio')[0];
var endSecondsTemp;

var settings = {
  // play countdown between songs
  countdown: true,
  // play dance practice video instead of MV, if available
  dp: false,
  // number of seconds to add before and after dance section
  padding: 3
};

// get data from Google spreadsheet
$.ajax({
  url: dataUrl,
  dataType: 'jsonp',
  success: function(data) {
    masterList = cleanseData(data);
  }
});

// put spreadsheet data into a nice clean array
function cleanseData(data) {
  var rawData = data.feed.entry;
  var cleanData = [];

  for (var i = 0; i < rawData.length; i++) {
    var obj = {};
    $.each(rawData[i], function(key, val) {
      if (key.indexOf('gsx$') >= 0) {
        var cleanKey = key.split('$')[1];
        obj[cleanKey] = val.$t;
      }
    });
    cleanData.push(obj);
  }

  return cleanData;
};

// do stuff
$(document).on('ajaxComplete', function() {
  playlist = shuffle(masterList);

  // load the YouTube Player API code asynchronously
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
});

// executes as soon as YouTube Player API code downloads
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    width: '640',
    height: '390',
    playerVars: {
      'controls': 0,
      'showinfo': 0,
      'rel': 0
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange,
      'onError': onPlayerError
    }
  });
};

function onPlayerReady(event) {
  player.setVolume(0);
  loadVideo(playlist[currentVideoIndex]);
};

function onPlayerStateChange(event) {
  // console.log(event.data);
  var currentVideo = playlist[currentVideoIndex];

  // fade in video volume when it starts playing
  if (event.data === YT.PlayerState.PLAYING && Math.round(player.getCurrentTime()) == getStartSeconds(currentVideo)) {
    var paddingTemp = settings.padding;
    fadeInVolume(paddingTemp);

    // set up fading out near end
    var timestampCheck = setInterval(function() {
      if (Math.round(player.getCurrentTime()) == endSecondsTemp - paddingTemp) {
        clearInterval(timestampCheck);
        fadeOutVolume(paddingTemp);
      }
    }, 1000)
  }

  // autoplay next video after current video ends
  if (event.data === YT.PlayerState.ENDED && Math.round(player.getCurrentTime()) == endSecondsTemp && currentVideoIndex < playlist.length - 1) {
      currentVideoIndex++;
      loadVideo(playlist[currentVideoIndex]);
  }
};

function onPlayerError(event) {
  currentVideoIndex++;
  loadVideo(playlist[currentVideoIndex]);
};

function loadVideo(videoObj) {
  // console.log(videoObj.artist + ' - ' + videoObj.song);
  if (settings.countdown) {
    countdown.play();
    countdown.addEventListener('ended', function() {
      player.loadVideoById({
        'videoId': useDP(videoObj) ? videoObj.dpid : videoObj.mvid,
        'startSeconds': getStartSeconds(videoObj),
        'endSeconds': getEndSeconds(videoObj),
        'suggestedQuality': 'large'
      });
    });
  } else {
    player.loadVideoById({
      'videoId': useDP(videoObj) ? videoObj.dpid : videoObj.mvid,
      'startSeconds': getStartSeconds(videoObj),
      'endSeconds': getEndSeconds(videoObj),
      'suggestedQuality': 'large'
    });
  }
  
  // mirror the dance practice video if not already mirrored
  if (useDP(videoObj) && videoObj.mirror == 'FALSE')
    $('#player').addClass('mirror');
  else
    $('#player').removeClass('mirror');
  
  endSecondsTemp = getEndSeconds(videoObj);
};

// Durstenfeld shuffle
function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

// convert timestamp to seconds
function toSeconds(timestamp) {
  return parseInt(timestamp.split(':')[0]) * 60 + parseInt(timestamp.split(':')[1]);
};

// helper functions
function useDP(videoObj) {
  return (settings.dp || videoObj.mvid == '') && videoObj.dpid !== '';
}
function getStartSeconds(videoObj) {
  return toSeconds(useDP(videoObj) ? videoObj.dpstart : videoObj.mvstart) - settings.padding;
};
function getEndSeconds(videoObj) {
  return toSeconds(useDP(videoObj) ? videoObj.dpend : videoObj.mvend) + settings.padding;
};

// update settings
$('#settings *').on('change', function() {
  settings.countdown = $('input#countdown').prop('checked');
  settings.dp = $('input#dp').prop('checked');
  settings.padding = parseInt($('select#padding').val());
});

// fade video volume in and out
var timer;
function fadeInVolume(duration) {
  var currentVolume = player.getVolume();
  if (currentVolume === 100) {
    clearTimeout(timer);
    return;
  } else {
    player.setVolume(currentVolume + 1);
    timer = setTimeout(function() {
      return fadeInVolume(duration);
    }, duration*10);
  }
};
function fadeOutVolume(duration) {
  var currentVolume = player.getVolume();
  if (currentVolume === 0) {
    clearTimeout(timer);
    return;
  } else {
    player.setVolume(currentVolume - 1);
    timer = setTimeout(function() {
      return fadeOutVolume(duration);
    }, duration*10);
  }
};
