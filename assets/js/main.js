// global variables

// remove below code and replace with actual code, just for testing purposes

let test = "test";

// main

console.log(test);

// play background audio

var audio1 = document.getElementById("audio1");
var isPlaying = false;

function togglePlay() {
  isPlaying ? audio1.pause() : audio1.play();
};

audio1.onplaying = function() {
  isPlaying = true;
};
audio1.onpause = function() {
  isPlaying = false;
};



function phoneOn() {
  let myModalEl = document.getElementById('Modal-office');
  let modal = bootstrap.Modal.getInstance(myModalEl)
  modal.hide();
  
  
  //remove black image overlay
  //document.getElementById("s3-img-overlay").style.backgroundColor = "rgba(0, 0, 0, 0)";
  document.getElementById("s3-img-overlay").style.display = "none";

  //activate torchlight effect over main image
  document.getElementById("office-img").className += " torch";


  function update(e){
    let image = document.querySelector("div.s3-main-img");

    let rect = image.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
  
    document.documentElement.style.setProperty('--cursorX', x + 'px')
    document.documentElement.style.setProperty('--cursorY', y + 'px')
  }
  
  document.addEventListener('mousemove',update)
  
  
}
