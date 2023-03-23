








let characterSize = 50;

let characterShotgunMoveAnimation;
let characterShotgunIdleAnimation;

let song


function preload() {
  //soundFormats("mp3", "ogg")
  //song=loadSound('assets/backgroundMusic.mp3')
  characterShotgunMoveAnimation = loadImage('assets/characterShotgunMove.gif');
  characterShotgunIdleAnimation = loadImage('assets/characterShotgunIdle.png');
  bigBox = loadImage('Box.JPEG') 
}




let character
let player

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  imageMode(CENTER);
  rectMode(CENTER);
  //requestPointerLock()
  //character = new Character()
  player = new Player()
  enemy = new Enemy()
  //song.play()
}

function draw() {
  
  background(220);
  //console.log(movedX)
  enemy.noticePlayer()
  enemy.show()
  player.ui()
  player.show()
  player.move()
  player.direction()
  player.movePlayer(65,68, 87,83)
  player.handleBullets()
  console.log(enemy.angle)
  //console.log(player.position.x)
  //saveGif(playerShotgunMove, 100)
}

















