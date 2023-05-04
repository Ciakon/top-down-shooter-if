let boxImages = [];

let characterSize = 50;

let characterShotgunMoveAnimation;
let characterShotgunIdleAnimation;
let bigIronBox;
let woodenPlanks;
let yellowBigIronBox;
let cardboardBoxes;
let squaredIronBox;
let yellowSquaredIronBox;
let bigVent;
let smallVent;
let ShotgunFire;
let EmtpyMag;
let ReloadShotGun;
let backGroundMusic;
//let song;

function preload() {
  //soundFormats("mp3", "ogg")
  //song=loadSound('assets/backgroundMusic.mp3')
  characterShotgunMoveAnimation = loadImage("assets/characterShotgunMove.gif");
  characterShotgunIdleAnimation = loadImage("assets/characterShotgunIdle.png");
  bigIronBox = loadImage("assets/big-Iron-Box.png");
  woodenPlanks = loadImage("assets/wooden-Planks.png");
  yellowBigIronBox = loadImage("assets/yellow-Big-Iron-Box.png");
  cardboardBoxes = loadImage("assets/cardboard-Boxes.png");
  squaredIronBox = loadImage("assets/square-Like-Iron-Box.png");
  yellowSquaredIronBox = loadImage("assets/yellow-Square-Like-Iron-Box.png");
  bigVent = loadImage("assets/big-Vent.png");
  smallVent = loadImage("assets/small-Vent.png");
  ShotgunFire = loadSound('assets/Shotgun.mp3');
  EmtpyMag = loadSound('assets/Empty_magazine.mp3');
  ReloadShotGun = loadSound('assets/Reload.mp3');
  backGroundMusic = loadSound("assets/Cyberpunk.mp3");
}

let character;
let player;
let enemies = [];
let collisionObjects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
  append(collisionObjects, ( new BigIronBox(700, 200)));
  append(collisionObjects, ( new WoodenPlanks(500, 200)));
  append(collisionObjects, ( new CardboardBoxes(200, 200)));
  append(collisionObjects, ( new YellowBigIronBox(700, 400)));

  for (let i = 0; i < collisionObjects.length; i++) {
    collisionObjects[i].generateHitboxes()
  }
  
  //requestPointerLock()
  //character = new Character()
  player = new Player();
  //append(enemies, new Enemy(100, 100));

  //append(enemies, new Enemy(300,300))
  //mySound.play();

}

function draw() {
  for (let i = 0; i < collisionObjects.length; i++) {
    collisionObjects[i].showHitboxes();
  }

  background(220);
  //backGroundMusic.play()
  //console.log(movedX)
  imageMode(CENTER);
  player.ui();
  player.show();
  player.move();
  player.direction();
  player.movePlayer(65, 68, 87, 83);
  player.handleBullets();
  player.reload();
  player.generateHitboxes();
  player.showHitboxes("blue");

  //test
  waveManager()

  for (let i = 0; i < enemies.length; i++) {
    enemies[i].AI();
    enemies[i].show();
    enemies[i].generateHitboxes();
    enemies[i].showHitboxes("red");
    enemies[i].handleBullets();
    if (enemies[i].death()) {
      enemies.splice(i, 1)
    }
  }

  for (let i = 0; i < collisionObjects.length; i++) {
    collisionObjects[i].show()
    collisionObjects[i].showHitboxes()
    if (collisionObjects[i].death()) {
      collisionObjects.splice(i, 1)
      i--;
    }
  }
}

function mousePressed() {
  if (player.shootingCooldown > 0) {
    return;
  }

  if (player.ammo > 0) {
    player.shoot();
    player.ammo--;
  }
}
