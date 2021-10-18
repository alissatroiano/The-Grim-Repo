// global variables

// remove below code and replace with actual code, just for testing purposes

let test = 'test'

// main

console.log(test)

// play background audio

var audio1 = document.getElementById('audio1')
var isPlaying = false

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

// Replay Context of Scene 1
function replayContext() {
  let context = document.getElementById('Story-detail')
  let Paragraph = document.createElement('p')

  context.appendChild(Paragraph)

  // Replay Scene 1
  Paragraph.innerText = `My eyes open, I can't see at first, but gradually my vision comes into focus. Where the hell am I? Seems to be some form of medical room, but that smell... it's so rotten! How did I even get here? I feel like I must have been out for sometime.`

  // Replay Scene 2 - Extended
  if (context.classList.contains('scene2-extra')) {
    Paragraph.innerText = `I can hear someone's footsteps... It's getting louder, closer. They're headed towards me. There's a sign on the wall. A relic? A symbol? What does it mean? A fragment of my memory returns to me - I remember... a ritual. I remember... prayer, laughter, pain. I was... sacrificed? Why am I here?`
  }

  // Replay Scene 2
  if (context.classList.contains('scene2')) {
    Paragraph.innerText = `I can hear someone's footsteps... It's getting louder, closer. They're headed towards me. In another direction, towards the other end of the hall, there is a door... What do I do? Where should I go?`
  }

  Paragraph.classList.add('paragraph-position')
}

// Start Button //
function startButton() {
  window.open('scene1.html')
}
