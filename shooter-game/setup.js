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
let ReloadShotGunSound;
let backGroundMusic;
let floor;
let deathCount=0;
let killCount=0;

function preload() {
  //soundFormats("mp3", "ogg")
  song=loadSound('assets/Cyberpunk.mp3')
  pistolImage = loadImage("assets/pistol.png")
  shotgunImage = loadImage("assets/shotgun.png")
  assaultRifleImage = loadImage("assets/assault rifle.png")
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
  floor = loadImage("assets/background.png")
  ShotgunFire = loadSound('assets/Shotgun.mp3');
  EmtpyMag = loadSound('assets/Empty_magazine.mp3');
  ReloadShotGunSound = loadSound('assets/Reload.mp3');
  backGroundMusic = loadSound("assets/Cyberpunk.mp3");


  statemachine= new Statemachine();
}

let character;
let player;
let enemies = [];
let collisionObjects = [];

function setup() {

  createCanvas(1000, 650);
  angleMode(DEGREES);
  rectMode(CENTER);
  append(collisionObjects, ( new BigIronBox(700, 150)));
  append(collisionObjects, ( new WoodenPlanks(500, 200)));
  append(collisionObjects, ( new CardboardBoxes(200, 200)));
  append(collisionObjects, ( new YellowBigIronBox(700, 400)));
  /*
  append(collisionObjects, ( new BigVent(700, 100)));
  append(collisionObjects, ( new SmallVent(500, 400)));
  append(collisionObjects, ( new SquaredIronBox(400, 400)));
  */


  for (let i = 0; i < collisionObjects.length; i++) {
    collisionObjects[i].generateHitboxes()
  }
  playbtn=createButton("Play")
  playbtn.size(100,25)
  playbtn.position(width/2-50, height/2 + 125)

  shopbtn=createButton("Gun Menu")
  shopbtn.size(100,25)
  shopbtn.position(width/2-50, height/2 + 75)

  menubtn=createButton("Menu")
  menubtn.size(100,25)
  menubtn.position(width/2-50, height/2+75)
  
  
  //requestPointerLock()
  //character = new Character()
  player = new Player();
  
  //append(enemies, new Enemy(100, 100));

  //append(enemies, new Enemy(300,300))
  song.play();

}

function runGame () {
  playbtn.hide()
  shopbtn.hide()
  menubtn.hide()
  //image(floor,width/2,height/2,windowWidth,windowHeight)
  for (let i = 0; i < collisionObjects.length; i++) {
    collisionObjects[i].showHitboxes();
  }

  //player death
  if(player.death()){
    player.kills = 0
    statemachine.transition("dead");
    player.health = player.maxHealth
    wave = 0
    player.ammo=player.maxAmmo
    enemies = []
    waveStart = false
    collisionObjects = []
    deathCount+=1
    append(collisionObjects, ( new BigIronBox(700, 150)));
    append(collisionObjects, ( new WoodenPlanks(500, 200)));
    append(collisionObjects, ( new CardboardBoxes(200, 200)));
    append(collisionObjects, ( new YellowBigIronBox(700, 400)));

    for (let i = 0; i < collisionObjects.length; i++) {
      collisionObjects[i].generateHitboxes()
    }

  }

  if(player.weapon=="minigun"){
    if(frameCount % 2 == 0) {
      ShotgunFire.play()
    }
    player.shoot()
  }

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
      player.kills++
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
  if (statemachine.currentState == "Play"){
    if (player.shootingCooldown > 0) {
      return;
    }

    if (player.ammo > 0) {
      player.shoot();
      player.ammo--;
      ShotgunFire.play
    }
    if (player.ammo <= 0) {
      EmtpyMag.play
    }
  }
}
