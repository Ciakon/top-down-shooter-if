class Character {

  constructor() {
    this.position = {x: windowWidth/2, y : windowHeight / 2}
    this.currentAnimation = characterShotgunMoveAnimation
    this.angle = random(0, 360)
    this.speed = 3
    this.weapon = "pistol"
    this.existingBullets = [];
    this.maxHealth = 100;
    this.Health = 80;
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
      append(this.existingBullets, new Bullet(this.position.x, this.position.y, this.angle, 7))
    }
  }

  handleBullets() {
    for (let i = 0; i < this.existingBullets.length; i++) {
      push()
      translate(this.existingBullets[i].position.x, this.existingBullets[i].position.y)
      rect(0, 0, 20, 10)

      this.existingBullets[i].position.x += cos(this.existingBullets[i].angle) * this.existingBullets[i].speed;
      this.existingBullets[i].position.y -= sin(this.existingBullets[i].angle) * this.existingBullets[i].speed;
      pop()

    }

  }



}

class Bullet {
  constructor(posX, posY, angle, speed) {
    this.position = {x: posX, y: posY}
    this.speed = speed;
    this.angle = angle
  }

}