class Character {

  constructor() {
    this.position = createVector(windowWidth/2, windowHeight/2)
    this.currentAnimation = characterShotgunMoveAnimation
    this.facing = random(0, 360)
    this.speed = 3
  }

  show() {
    image(this.currentAnimation, this.position.x, this.position.y, 50, 50);
  }

/**
 * 
 * @param {"string"} direction cardinal and ordinal directions (Up-Left, Up, Down-Right)
 */
  move(direction) {
    if (direction == "Up") {
      this.position.y -= this.speed;
    }
    if (direction == "Up-Right") {
      this.position.y -= this.speed;
      this.position.x += this.speed;
    }
    if (direction == "Right") {
      this.position.x += this.speed;
    }
    if (direction == "Down-Right") {
      this.position.y += this.speed;
      this.position.x += this.speed;
    }
    if (direction == "Down") {
      this.position.y += this.speed;
    }
    if (direction == "Down-Left") {
      this.position.y += this.speed;
      this.position.x -= this.speed;
    }
    if (direction == "Left") {
      this.position.x -= this.speed;
    }
    if (direction == "Up-Left") {
      this.position.y -= this.speed;
      this.position.x -= this.speed;
    }
  }

  shoot() {

  }

}

