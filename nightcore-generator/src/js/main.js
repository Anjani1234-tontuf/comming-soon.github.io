var file;
var fileDragged = false;


function setup(){
    noCanvas();

    file = createFileInput(function(){
        if(song != undefined){
            song.stop();
            song = null;
        }

        // Remove the buttons, so they don't duplicate
        removeElem(playBtn);
        removeElem(stopBtn);
        removeElem(nightcoreBtn);

        loadSong(file.elt.files[0]);
    });

    file.parent("file-input");
}


// This function checks if an element exists, and then removes it.
function removeElem(element){
    if(element != undefined){
        element.remove();
    }
}
