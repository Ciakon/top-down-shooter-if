



let characterShotgunMoveAnimation;
let characterShotgunIdleAnimation;

function preload() {
  characterShotgunMoveAnimation = loadImage('assets/characterShotgunMove.gif');
  characterShotgunIdleAnimation = loadImage('assets/characterShotgunIdle.png');
}




let character
let player

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  requestPointerLock()
  character = new Character()
  player = new Player()
}

function draw() {
  background(220);
  //console.log(movedX)
  player.show()
  player.move()
  player.direction()
  player.movePlayer(65,68, 87,83)
  console.log(player.facing)
  //console.log(player.position.x)
  //saveGif(playerShotgunMove, 100)
}

















