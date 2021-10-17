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

/* Start Button */
function startButton() {
  window.open("scene1.html");
}