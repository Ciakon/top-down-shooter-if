let mySound;

function preload() {
  mySound = loadSound('assets/Cyberpunk.mp3');
}

function setup(){
  mySound.play();
}