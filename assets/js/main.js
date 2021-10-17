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
  //close modal
  var modal = document.getElementById('Modal-office');
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
  modal.setAttribute('style', 'display: none');
  //document.getElementsByClassName('backdrop').style.display = 'none';
  
  //remove black image overlay
  document.getElementById("s3-img-overlay").style.backgroundColor = "rgba(0, 0, 0, 0)";
  
  //activate torchlight effect over main image
  document.getElementById("s3-main-img").classList.add("torch");

}

function update(e){
  var x = e.clientX || e.touches[0].clientX
  var y = e.clientY || e.touches[0].clientY

  document.documentElement.style.setProperty('--cursorX', x + 'px')
  document.documentElement.style.setProperty('--cursorY', y + 'px')
}

document.addEventListener('mousemove',update)
document.addEventListener('touchmove',update)