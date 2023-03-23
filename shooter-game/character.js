class Character {

  constructor() {
    this.position = createVector(windowWidth/2, windowHeight/2)
    this.currentAnimation = characterShotgunMoveAnimation
    this.angle = random(0, 360)
    this.speed = 3
    this.weapon = "pistol"
    this.existingBullets = [];
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
    if (this.weapon == "pistol") {
      //this.existingBullets += new Bullet(this.positionX, this.positionY, this.angle, 5)
    }

    console.log(player.position.x, player.position.y)

  }

  handleBullets() {
    for (let i = 0; i < this.existingBullets.length; i++) {
      push()
      translate(this.existingBullets[i].positionX, this.existingBullets[i].positionY)
      rect(0, 0, 500, 20)
      pop()

      //this.existingBullets[i].positionX++;

    }

  }



}

class Bullet {
  constructor(posX, posY, angle, speed) {
    this.positionX = posX
    this.positionY = posY
    this.speed = speed;
    this.angle = angle
  }

}