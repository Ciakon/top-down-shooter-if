class Character {

  constructor() {
    this.xPosition = 200
    this.yPosition = 200
    this.currentAnimation = characterShotgunMoveAnimation
    this.facing = random(0, 360)
  }

  show() {
    image(this.currentAnimation, this.xPosition, this.yPosition, 50, 50);
  }

  move() {
    
  }

  shoot() {

  }

}

