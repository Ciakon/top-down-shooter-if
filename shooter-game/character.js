class Character {

  constructor() {
    this.position = {x: windowWidth/2, y : windowHeight/2}
    this.currentAnimation = characterShotgunMoveAnimation
    this.angle = random(0, 360)
    this.speed = 3
    this.weapon = "pistol"
    this.existingBullets = [];
    this.maxHealth = 100;
    this.health = 80;
    this.size = 1;
    this.shootingCooldown = 0;
    this.hitboxes = [];
    this.maxAmmo=10
    this.ammo = this.maxAmmo
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

    let inaccuracy;
    let barrelLocation;
    let bulletAmount;
    let speed;
    let damage;
    let size;
    let newAngle
    let bulletTimer
    
    if (this.weapon == "shotgun") {
      this.shootingCooldown = 60
      inaccuracy = 8
      barrelLocation = { x : this.position.x + cos(this.angle + 331)*29*this.size, y : this.position.y - sin(this.angle + 331)*29*this.size}
      bulletAmount = 16;
      speed = 8;
      damage = 1;
      size = 2;
      bulletTimer = 40
    }
    if (this.weapon == "pistol") {
      this.shootingCooldown = 10
      inaccuracy = 2
      barrelLocation = { x : this.position.x + cos(this.angle + 331)*29*this.size, y : this.position.y - sin(this.angle + 331)*29*this.size}
      bulletAmount = 1;
      speed = 10;
      damage = 4;
      size = 2;
      bulletTimer = 80
    }

    // change angle, because it comes from barrel and not character location
    if (this instanceof Player) {
      let dx = barrelLocation.x - mouseX;
      let dy = barrelLocation.y - mouseY;
      let c = sqrt(dx ** 2 + dy ** 2);
      newAngle = 180 - acos(dx / c);

      if(mouseY > barrelLocation.y){
        newAngle = 360 - newAngle;
      }
    }

    if (this instanceof Enemy) {
      let dx = barrelLocation.x - player.position.x;
      let dy = barrelLocation.y - player.position.y;
      let c = sqrt(dx ** 2 + dy ** 2);
      newAngle = 180 - acos(dx / c);

      if(player.position.y > barrelLocation.y){
        newAngle = 360 - newAngle;
      }
      
    }

    for (let i = 0; i < bulletAmount; i++) {
      append(this.existingBullets, new Bullet(barrelLocation.x, barrelLocation.y, newAngle + random(-inaccuracy, inaccuracy), speed + random(-speed*0.1, speed*0.1), damage, size, bulletTimer))
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
      rect(0, 0, this.existingBullets[i].size*2, this.existingBullets[i].size)

      this.existingBullets[i].position.x += cos(this.existingBullets[i].angle) * this.existingBullets[i].speed;
      this.existingBullets[i].position.y -= sin(this.existingBullets[i].angle) * this.existingBullets[i].speed;
      pop();

      if (this.existingBullets[i].collisionCheck()) {
        this.existingBullets.splice(i, 1);
        i--;
        continue
      }

      this.existingBullets[i].bulletTimer--;

      if (this.existingBullets[i].bulletTimer <= 0) {
        this.existingBullets.splice(i, 1)
        i--;
        continue
      }

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

  generateHitboxes() {

    this.hitboxes = [];
    
    let w = 35
    let h = 10
    let length = dist(0,0, w/2, h/2)
    let x1 = this.position.x + cos(180 + this.angle + atan((h/2) / (-w/2)))*length
    let y1 = this.position.y - sin(180 + this.angle + atan((h/2) / (-w/2)))*length

    w = 10
    h = 10
    length = dist(0,0, w/2, h/2)
    let x2 = this.position.x + cos(this.angle + atan((h/2) / (w/2)))*length
    let y2 = this.position.y - sin(this.angle + atan((h/2) / (w/2)))*length

    w = 10
    h = 35
    length = dist(0,0, w/2, h/2)
    let x3 = this.position.x + cos(360 + this.angle + atan((-h/2) / (w/2)))*length
    let y3 = this.position.y - sin(360 + this.angle + atan((-h/2) / (w/2)))*length

    w = 35
    h = 35
    length = dist(0,0, w/2, h/2)
    let x4 = this.position.x + cos(180 + this.angle + atan((h/2) / (w/2)))*length
    let y4 = this.position.y - sin(180 + this.angle + atan((h/2) / (w/2)))*length
    
    append(this.hitboxes, {x : [x1, x2, x3, x4], y : [y1, y2, y3, y4]})

  }

  showHitboxes(color) {
    push()    
    strokeWeight(2)
    stroke(color)
    
    for (let i = 0; i < this.hitboxes.length; i++) {
      
      line(this.hitboxes[i].x[0], this.hitboxes[i].y[0], this.hitboxes[i].x[1], this.hitboxes[i].y[1])
      line(this.hitboxes[i].x[1], this.hitboxes[i].y[1], this.hitboxes[i].x[2], this.hitboxes[i].y[2])
      line(this.hitboxes[i].x[2], this.hitboxes[i].y[2], this.hitboxes[i].x[3], this.hitboxes[i].y[3])
      line(this.hitboxes[i].x[3], this.hitboxes[i].y[3], this.hitboxes[i].x[0], this.hitboxes[i].y[0])

    }

    pop()
  }



}

class Bullet {
  constructor(posX, posY, angle, speed, damage, size, timer) {
    this.position = {x: posX, y: posY}
    this.speed = speed;
    this.angle = angle;
    this.damage = damage;
    this.size = size;
    this.collisionPoints;
    this.bulletTimer = timer
  }

  collisionCheck() {
    let collision = false;

    //let angle = this.angle + atan((h1/2) / (w1/2))
    //let length = sqrt((w1/2)**2 + (h1/2)**2)

    this.collisionPoints = [
      {
        x : this.position.x + cos(this.angle + atan((this.size/2) / (this.size*2/2))) * sqrt((this.size*2/2)**2 + (this.size/2)**2),
        y : this.position.y - sin(this.angle + atan((this.size/2) / (this.size*2/2))) * sqrt((this.size*2/2)**2 + (this.size/2)**2)
      },
      {
        x : this.position.x + cos(this.angle + atan((-this.size/2) / (this.size*2/2))) * sqrt((this.size*2/2)**2 + (this.size/2)**2),
        y : this.position.y - sin(this.angle + atan((-this.size/2) / (this.size*2/2))) * sqrt((this.size*2/2)**2 + (this.size/2)**2)
      }
    ];

    let characters = enemies.concat(player);

    for (let i = 0; i < characters.length; i++) {
      for (let j = 0; j < characters[i].hitboxes.length; j++) {

        for (let k = 0; k < this.collisionPoints.length; k++) {

          let bX = this.collisionPoints[k].x
          let bY = this.collisionPoints[k].y

          let hb = characters[i].hitboxes[j]

          if (characters[i].angle < 90) {
            if (
              bY > fx(bX, hb.x[0], hb.x[1], hb.y[0], hb.y[1]) && 
              bY > fx(bX, hb.x[1], hb.x[2], hb.y[1], hb.y[2]) && 
              bY < fx(bX, hb.x[2], hb.x[3], hb.y[2], hb.y[3]) &&
              bY < fx(bX, hb.x[3], hb.x[0], hb.y[3], hb.y[0])
            ) {
              collision = true
            }
          }
          else if (characters[i].angle < 180) {
            if (
              bY < fx(bX, hb.x[0], hb.x[1], hb.y[0], hb.y[1]) && 
              bY > fx(bX, hb.x[1], hb.x[2], hb.y[1], hb.y[2]) && 
              bY > fx(bX, hb.x[2], hb.x[3], hb.y[2], hb.y[3]) &&
              bY < fx(bX, hb.x[3], hb.x[0], hb.y[3], hb.y[0])
            ) {
              collision = true
            }
          }

          else if (characters[i].angle < 270) {
            if (
              bY < fx(bX, hb.x[0], hb.x[1], hb.y[0], hb.y[1]) && 
              bY < fx(bX, hb.x[1], hb.x[2], hb.y[1], hb.y[2]) && 
              bY > fx(bX, hb.x[2], hb.x[3], hb.y[2], hb.y[3]) &&
              bY > fx(bX, hb.x[3], hb.x[0], hb.y[3], hb.y[0])
            ) {
              collision = true
            }
          }

          else if (characters[i].angle < 360) {
            if (
              bY > fx(bX, hb.x[0], hb.x[1], hb.y[0], hb.y[1]) && 
              bY < fx(bX, hb.x[1], hb.x[2], hb.y[1], hb.y[2]) && 
              bY < fx(bX, hb.x[2], hb.x[3], hb.y[2], hb.y[3]) &&
              bY > fx(bX, hb.x[3], hb.x[0], hb.y[3], hb.y[0])
            ) {
              collision = true
            }
          }
  
          
          if (collision) {
            characters[i].health -= this.damage;
            return true;
          }

        }
      }

    }

    // box collision
    for (let i = 0; i < this.collisionPoints.length; i++) {
      for (let j = 0; j < collisionObjects.length; j++) {

        let bulletX = this.collisionPoints[i].x
        let bulletY = this.collisionPoints[i].y
       
        let boxX = collisionObjects[j].position.x
        let boxY = collisionObjects[j].position.y
        let boxW = collisionObjects[j].width
        let boxH = collisionObjects[j].height

        if ((bulletX > boxX - boxW/2 && bulletX < boxX + boxW/2) && bulletY > boxY - boxH/2 && bulletY < boxY + boxH/2) {
          collisionObjects[j].health -= this.damage;
          return true;
        }

      }
    }

  }

}

function fx(x, x1, x2, y1, y2) {
  return eval("((y1-y2) / (x1-x2)) * x + y1 - ((y1-y2) / (x1-x2))*x1")
};