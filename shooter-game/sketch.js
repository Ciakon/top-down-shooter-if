






let player;
let x=0;
let y=0;
function preload() {
  player = loadImage('assets/playerShotgun.png');
}






function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(220);
  x++
  image(player, x, y, 50, 50);
  
}

















