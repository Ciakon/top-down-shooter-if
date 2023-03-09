class Character {

  constructor() {
    this.xPosition = 200
    this.yPosition = 200
    this.currentAnimation = characterShotgunMoveAnimation
  }

  show() {
    image(this.currentAnimation, this.xPosition, this.yPosition, 50, 50);
  }

  move() {
    
  }

  shoot() {

  }

}

