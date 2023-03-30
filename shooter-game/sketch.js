








let characterSize = 50;

let characterShotgunMoveAnimation;
let characterShotgunIdleAnimation;

let song


function preload() {
  //soundFormats("mp3", "ogg")
  //song=loadSound('assets/backgroundMusic.mp3')
  characterShotgunMoveAnimation = loadImage('assets/characterShotgunMove.gif');
  characterShotgunIdleAnimation = loadImage('assets/characterShotgunIdle.png');
  //bigBox = loadImage('Box.png') 
}




let character
let player
let enemy

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  imageMode(CENTER);
  rectMode(CENTER);
  //requestPointerLock()
  //character = new Character()
  player = new Player()
  enemy = new Enemy()
  mySound.play();
}

function draw() {
  
  background(220);
  //console.log(movedX)
  player.ui()
  player.show()
  player.move()
  player.direction()
  player.movePlayer(65,68, 87,83)
  player.handleBullets()
  enemy.noticePlayer()
  enemy.show()
  //console.log(enemy.angle)
  //console.log(player.angle)
  //saveGif(playerShotgunMove, 100)

}


function mousePressed() {
  player.shoot()
  console.log("bullet angle: "  + player.existingBullets[0].angle)
  console.log("player angle " + player.angle)
}















