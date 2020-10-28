var song;

var playBtn, stopBtn, nightcoreBtn; // These variables are going to store the control buttons

function loadSong(file){

    song = new p5.SoundFile(file, function(){
        // Define each button
        playBtn = createButton("Play");
        stopBtn = createButton("Stop");
        nightcoreBtn = createButton("Nightcore: OFF");

        // Set parent for each button
        playBtn.parent("buttons");
        stopBtn.parent("buttons");
        nightcoreBtn.parent("buttons");

        var nightcore = false; // Keeps track of whether nightcore mode is turned on

        // Play/pause btn on click
        playBtn.mousePressed(function(){
            if(song.isPlaying()){
                song.pause();
                playBtn.html("Play");
            }
            else{
                song.play();
                playBtn.html("Pause");
            }
        });

        // Stop btn on click
        stopBtn.mousePressed(function(){
            song.stop();
            playBtn.html("Play")
        });

        // Nightcore switch
        nightcoreBtn.mousePressed(function(){
            if(nightcore){
                nightcoreBtn.html("Nightcore: OFF");
                song.rate(1);
                nightcore = false;
            }
            else{
                nightcoreBtn.html("Nightcore: ON");
                song.rate(1.5);
                nightcore = true;
            }
        });


    });
}
