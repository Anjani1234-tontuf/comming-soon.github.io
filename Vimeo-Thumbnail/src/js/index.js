import 'bootstrap';

import '../scss/index.scss';

import JSZip from 'jszip';
import FileSaver from 'file-saver';

function toDataURL(url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open('get', url);
	xhr.responseType = 'blob';
	xhr.onload = function() {
		var fr = new FileReader();
		fr.onload = function() {
			var base64 = this.result.split(',');
			callback(base64[1]);
		};
		fr.readAsDataURL(xhr.response); // async call
	};

	xhr.send();
}
function fileExtension(url) {
	// Remove everything to the last slash in URL
	url = url.substr(1 + url.lastIndexOf('/'));

	// Break URL at ? and take first part (file name, extension)
	url = url.split('?')[0];

	// Sometimes URL doesn't have ? but #, so we should aslo do the same for #
	url = url.split('#')[0];

	// Now we have only extension
	url = url.substr(1+url.lastIndexOf('.'));

	return url;
}
function addStatus(status) {
	var div = $('.status'),
		time = new Date(),
		element = $('<div class="row" />');

	element.append('<div class="col-md-2">'+time.getHours()+':'+time.getMinutes()+':'+time.getSeconds()+'</div>');
	element.append('<div class="col-md-10">'+status+'</div>');

	div.append(element);
}

var Vimeo = require('vimeo').Vimeo,
	video = 0,
	videos = [],
	ratelimit = 25,
	videosRemaining = [],
	images = [],
	imageIndex = 0,
	client,
	clientID,
	clientSecret,
	accessToken,
	videosRaw,
	downloadAll,
	zip;

function addImage() {
	if(video < videos.length) {
        var video_id = videos[video];
		if(ratelimit > 2) {
			client.request(
				{
					path: '/videos/'+video_id+'/pictures',
				},
				function(error, body, status_code, headers) {
					ratelimit = headers['x-ratelimit-remaining'];
					if(error) {
						addStatus(video_id+' Error:'+error);
					} else if(typeof body.data[0].sizes !== 'undefined') {
						var vImages = body.data[0].sizes;
						if(downloadAll && vImages.length > 1) {
							vImages.pop();
							// Last element in array is 720p image
							vImages.forEach(function (image, index) {
								image.video_id = video_id;
								images.push(image);
							});
						} else {
							vImages[vImages.length - 1].video_id = video_id;
							images.push(vImages[vImages.length - 1]);
						}
					} else {
						addStatus(video_id+' has no image.');
					}

		            ++video;
		            addImage();
				}
			);
		} else {
			if(videosRemaining.length !== 0) {
				addStatus('Limit reached. Videos remaining: '+videosRemaining.join(', '));
			}
		}
    } else {
		addStatus(images.length+' images found.');
		addStatus('Adding the images to the zip.');

		zip = new JSZip();
		zipImages();
	}
}

function zipImages() {
	if(imageIndex < images.length) {
		var img = images[imageIndex];

		toDataURL(img.link, function(dataURL) {
			zip.file(
				img.video_id+'_'+img.width+'x'+img.height+'.'+fileExtension(img.link),
				dataURL,
				{ base64: true }
			);

			if(imageIndex+1 === images.length) {
				addStatus('Building the zip.');
				zip.generateAsync({ type: 'blob' }).then(function(content) {
					FileSaver.saveAs(content, 'thumbs.zip');
					addStatus('Downloading the zip.');
					$('.loading').hide();
				});
			}

	        ++imageIndex;
	        zipImages();
		});
	}
};

$('form').submit(function(e) {
	e.preventDefault();

	clientID = $('#clientID').val();
	clientSecret = $('#clientSecret').val();
	accessToken = $('#accessToken').val();
	videosRaw = $('#videos').val();
	downloadAll = $('#downloadAll').is(':checked');
	client = new Vimeo(clientID, clientSecret, accessToken);

	if(!clientID || !clientSecret || !accessToken) {
		return;
	}

	$('form').hide();
	$('.status-parent').show();

	// Prepare the videos ID
	if (videosRaw.indexOf(',') !== -1) {
		videos = videosRaw.split(',');
		videos = videos.map(Function.prototype.call, String.prototype.trim);
	} else {
		videos = videosRaw.split('\n');
		videos.forEach(function(url, i) {
			url = url.replace(/\/$/, "").trim().split('/');

			videos[i] = url[url.length - 1];
		});
	}

	addStatus(videos.length+' videos submitted.');
	addStatus('Retrieving image data.');

	if(ga && typeof ga !== "undefined") {
		ga('send', 'event', 'Buttons', 'click', 'Download');
	}

	addImage();
});
