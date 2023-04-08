let boxImages = [];

let characterSize = 50;

let characterShotgunMoveAnimation;
let characterShotgunIdleAnimation;

let song;

function preload() {
  //soundFormats("mp3", "ogg")
  //song=loadSound('assets/backgroundMusic.mp3')
  characterShotgunMoveAnimation = loadImage("assets/characterShotgunMove.gif");
  characterShotgunIdleAnimation = loadImage("assets/characterShotgunIdle.png");
  bigIronBox = loadImage("assets/big-Iron-Box.png");
  woodenPlanks = loadImage("assets/wooden-Planks.png");
  mySound = loadSound("assets/Cyberpunk.mp3");
}

let character;
let player;
let enemies = [];
let collisionObjects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
  append(collisionObjects, (box1 = new BigIronBox(700, 200)));
  append(collisionObjects, (box2 = new WoodenPlanks(500, 200)));
  box1.generateHitboxes();
  box2.generateHitboxes();
  //requestPointerLock()
  //character = new Character()
  player = new Player();
  append(enemies, new Enemy(100, 100));
  enemies[0].position.x = 300;
  enemies[0].position.y = 300;
  //append(enemies, new Enemy(300,300))
  //mySound.play();
}

function draw() {
  background(220);
  //console.log(movedX)
  imageMode(CENTER);
  box1.show();
  box1.showHitboxes();
  box2.show();
  box2.showHitboxes();
  player.ui();
  player.show();
  player.move();
  player.direction();
  player.movePlayer(65, 68, 87, 83);
  player.handleBullets();
  player.reload();
  player.generateHitboxes();
  player.showHitboxes("blue");

  for (let i = 0; i < enemies.length; i++) {
    enemies[i].AI();
    enemies[i].show();
    enemies[i].generateHitboxes();
    enemies[i].showHitboxes("red");
    enemies[i].handleBullets();
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
    player.shoot();
    player.ammo--;
  }
}
