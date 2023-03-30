








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
  mySound = loadSound('assets/Cyberpunk.mp3');
}




let character
let player
let enemies = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  imageMode(CENTER);
  rectMode(CENTER);
  //requestPointerLock()
  //character = new Character()
  player = new Player()
  append(enemies, new Enemy(100,100))
  //append(enemies, new Enemy(300,300))
  //mySound.play();
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
  player.showHitbox("blue")

  for (let i = 0; i < enemies.length; i++) {
    enemies[i].AI()
    enemies[i].show()
    enemies[i].showHitbox("red")
    enemies[i].handleBullets()
  }

  
  //console.log(enemy.angle)
  //console.log(player.angle)
  //saveGif(playerShotgunMove, 100)

}


function mousePressed() {

  if (player.shootingCooldown > 0) {
    return;
  }

  if (player.ammo > 0) {
    player.shoot()
    player.ammo--;
  }
  
}















