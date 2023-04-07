class CollisionObjects{
  constructor(x, y, scaling = 1) {
    this.x = x;
    this.y = y;
    this.width = 100 * scaling;
    this.height = 100 * scaling;
    this.maxHealth = 500;
    this.health = 500;
    this.hitboxes = [];
  }
  show() {
    noFill();
    strokeWeight(3)
    //MaxHealth bar
    rect(this.position.x, this.position.y-30, this.maxHealth/2, 10);
    fill("Red");
    //Current Health
    rect(this.position.x-(this.maxHealth/2-this.health/2)/2, this.position.y-30, this.health/2, 10);
    fill("white");
    rect(this.x, this.y, this.width, this.height);

  }
  generateHitboxes(){
    //the order starts from top left and goes clockwise
    let x1=this.x;
    let x2=this.x+this.width;
    let x3=this.x+this.width;
    let x4=this.x;

    let y1=this.y;
    let y2=this.y;
    let y3=this.y+this.height;
    let y4=this.y+this.height;

    append(this.hitboxes, {x : [x1, x2, x3, x4], y : [y1, y2, y3, y4]})
  }
  showHitboxes(){
    stroke(255,0,0);
    strokeWeight(2);
    for (let i = 0; i < this.hitboxes.length; i++) {
      let hitbox = this.hitboxes[i];
      line(hitbox.x[0], hitbox.y[0], hitbox.x[1], hitbox.y[1]);
      line(hitbox.x[1], hitbox.y[1], hitbox.x[2], hitbox.y[2]);
      line(hitbox.x[2], hitbox.y[2], hitbox.x[3], hitbox.y[3]);
      line(hitbox.x[3], hitbox.y[3], hitbox.x[0], hitbox.y[0]);
    }
  }
}
class BigIronBox extends CollisionObjects{
    constructor(x,y,scaling=1) {
        super(x,y,scaling)
        this.width = 212 * scaling;
        this.height = 108 * scaling;
    }
    show(){
        image(bigIronBox,this.x, this.y, this.width, this.height);
    }
}
class WoodenPlanks extends CollisionObjects{
    constructor(x,y,scaling=1){
        super(x,y,scaling)
        this.width = 62 * scaling;
        this.height = 82 * scaling;
    }
    show(){
        image(woodenPlanks,this.x, this.y, this.width, this.height);
    }
}