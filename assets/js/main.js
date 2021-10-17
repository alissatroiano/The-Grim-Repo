// global variables

// play background audio
const current_page = window.location.pathname;
console.log(current_page);

let main_image = document.querySelector('.main-scene-image');

let audio = document.getElementById('audio');
audio.volume = 0.25;

let isPlaying = false;

switch(current_page) {
  case '/':
      audio.setAttribute('src', 'assets/audio final/intro or outro/accompaniment epona-[AudioTrimmer.com]-extreme.mp3');
      break;
  case '/index.html':
      audio.setAttribute('src', 'assets/audio final/intro or outro/accompaniment epona-[AudioTrimmer.com]-extreme.mp3');
      break;
  case '/scene1.html':
      audio.setAttribute('src', 'assets/audio/Scene1_background_audio.m4a');
      main_image.style.backgroundImage = "url(/assets/images/beds.jpg)";
      break;
  case '/scene2.html':
      audio.setAttribute('src', 'assets/audio/Hallway.mp3');
      main_image.style.backgroundImage = "url(/assets/images/hallways.jpeg)";
      break;
  case '/scene2-extra.html':
      audio.setAttribute('src', 'assets/audio/Ritual.mp3');
      main_image.style.backgroundImage = "url(/assets/images/ritual.jpeg)";
      break;
  case '/scene3.html':
      audio.setAttribute('src', 'assets/audio/Scene3 - background-audio.m4a');
      main_image.style.backgroundImage = "url(assets/images/office.jpeg)";
        break;
  default:
      break;
}

function togglePlay() {
  isPlaying ? audio.pause() : audio.play();
}

audio.onplaying = function () {
  isPlaying = true;
}
audio.onpause = function () {
  isPlaying = false;
}

// Scene 2 Routes
function Scene3() {
  window.location.href = '/scene3.html'
}

function Scene2_Extra() {
  window.location.href = '/scene2-extra.html';
}
