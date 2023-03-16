



let characterShotgunMoveAnimation;
let characterShotgunIdleAnimation;

function preload() {
  characterShotgunMoveAnimation = loadImage('assets/characterShotgunMove.gif');
  characterShotgunIdleAnimation = loadImage('assets/characterShotgunIdle.png');
}






function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  player = new Character()
  
}

function draw() {
  background(220);
  
  player.show()
  player.move()
  
  //saveGif(playerShotgunMove, 100)
}

















