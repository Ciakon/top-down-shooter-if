class Character {

  constructor() {
    this.position = {x: windowWidth/2, y : windowHeight/2}
    this.currentAnimation = characterShotgunMoveAnimation
    this.angle = random(0, 360)
    this.speed = 3
    this.weapon = "shotgun"
    this.existingBullets = [];
    this.maxHealth = 100;
    this.health = 80;
    this.size = 1;
    this.shootingCooldown = 0;
    this.hitbox = [];
    this.generateHitbox()
    this.ammo=5
    this.maxAmmo=10
    this.reloadTime=120;
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

    if (this.weapon == "shotgun") {
      this.shootingCooldown = 60
      let inaccuracy = 10
      let barrelLocation = { x : cos(this.angle + 331)*29*this.size, y : sin(this.angle + 331)*29*this.size}
      let bulletAmount = 7;

      for (let i = 0; i < bulletAmount; i++) {
        append(this.existingBullets, new Bullet(this.position.x + barrelLocation.x, this.position.y - barrelLocation.y, this.angle + random(-inaccuracy, inaccuracy), 7))
      }
    }
  }

  handleBullets() {
    if (this.shootingCooldown > 0) {
      this.shootingCooldown--;
    }
    for (let i = 0; i < this.existingBullets.length; i++) {
      push()
      translate(this.existingBullets[i].position.x, this.existingBullets[i].position.y)
      rotate(-this.existingBullets[i].angle)
      fill("gold")
      rect(0, 0, 10, 5)

      this.existingBullets[i].position.x += cos(this.existingBullets[i].angle) * this.existingBullets[i].speed;
      this.existingBullets[i].position.y -= sin(this.existingBullets[i].angle) * this.existingBullets[i].speed;
      pop()

    }

  }

  reload(){
    //play animation
    this.reloadTime--
    if(this.reloadTime<0){
      this.reloadTime=600
      this.ammo+=this.maxAmmo
    }
  }

  generateHitbox() {
    append(this.hitbox, {x:-5, y:5, w:25, h:25})
    append(this.hitbox, {x:-11, y:-10, w:12, h:9})
  }

  showHitbox(color) {
    push()
    translate(this.position.x, this.position.y)
    rotate(-this.angle)
    noFill()
    strokeWeight(2)
    stroke(color)
    
    for (let i = 0; i < this.hitbox.length; i++) {
      rect(this.hitbox[i].x, this.hitbox[i].y, this.hitbox[i].w, this.hitbox[i].h)
    }

    pop()
  }



}

class Bullet {
  constructor(posX, posY, angle, speed) {
    this.position = {x: posX, y: posY}
    this.speed = speed;
    this.angle = angle
  }

}