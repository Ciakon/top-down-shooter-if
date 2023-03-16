class Character {

  constructor() {
    this.xPosition = 200
    this.yPosition = 200
    this.currentAnimation = characterShotgunMoveAnimation
    this.facing = random(0, 360)
  }

  show() {
    image(this.currentAnimation, 0, windowHeight, 50, 50);
  }

  move() {
    if(keyIsPressed){
      if(keyCode == 87){
        this.yPosition--
      }
      if(keyCode == 83){
        this.yPosition++
      }
      if(keyCode == 65){
        this.xPosition--
      }
      if(keyCode == 68){
        this.xPosition++
      }
    }
  }

  shoot() {

  }

}

