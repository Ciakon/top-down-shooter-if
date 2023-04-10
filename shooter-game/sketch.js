let boxImages = [];

let characterSize = 50;

let characterShotgunMoveAnimation;
let characterShotgunIdleAnimation;
let bigIronBox
let woodenPlanks
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
let box3;
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
  append(collisionObjects, (box1 = new BigIronBox(700, 201)));
  append(collisionObjects, (box2 = new WoodenPlanks(500, 200)));
  //append(collisionObjects, (box3 = new BigIronBox(600, 700)));
  box1.generateHitboxes();
  box2.generateHitboxes();
  //box3.generateHitboxes();
  //requestPointerLock()
  //character = new Character()
  player = new Player();
  append(enemies, new Enemy(100, 100));
  enemies[0].position.x = 300;
  enemies[0].position.y = 200;
  //append(enemies, new Enemy(300,300))
  //mySound.play();
}

function draw() {
  background(220);
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
  rect(469,200,10,10)


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
