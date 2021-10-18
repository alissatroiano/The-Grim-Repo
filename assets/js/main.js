// global variables

// remove below code and replace with actual code, just for testing purposes

let test = 'test'

// main

console.log(test)

// play background audio

var audio1 = document.getElementById('audio1')
var isPlaying = false

function togglePlay() {
  isPlaying ? audio1.pause() : audio1.play()
}

audio1.onplaying = function () {
  isPlaying = true
}
audio1.onpause = function () {
  isPlaying = false
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

// Replay Context of Scene 2
// function replayContext_SceneTwo() {
//   let context = document.getElementById('Story-detail')
//   let Paragraph = document.createElement('p')

//   context.appendChild(Paragraph)

//   Paragraph.innerText = `I can hear someone's footsteps... It's getting louder, closer.
//               They're headed towards me. There's a sign on the wall. A relic? A
//               symbol? What does it mean? A fragment of my memory returns to me -
//               I remember... a ritual. I remember... prayer, laughter, pain. I
//               was... sacrificed? Why am I here?`

//   Paragraph.classList.add('paragraph-position')
// }

/* Start Button */
function startButton() {
  window.open('scene1.html')
}

// Scene 2 Routes
function Scene3() {
  window.location.replace('scene3.html')
}

function Scene2_Extra() {
  window.location.replace('scene2-extra.html')
}

function takeToken() {
  localStorage.setItem(
    'tokenSymbol',
    document.getElementById('tokenSymbol').value
  )
}
