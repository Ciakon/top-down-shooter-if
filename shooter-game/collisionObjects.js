class CollisionObjects{
  constructor(x, y, scaling = 1) {
    this.x = x;
    this.y = y;
    this.width = 100 * scaling;
    this.height = 100 * scaling;
    this.maxHealth = 500;
    this.hitboxes = [];
  }
  show() {
    fill("white");
    rect(this.x, this.y, this.width, this.height);
  }
}
class BigIronBox extends CollisionObjects{
    constructor(x,y,scaling=1) {
        super(x,y,scaling)
        this.width = 212 * scaling;
        this.height = 108 * scaling;
    }
    show(){
        fill("white");
        //change 'rect' to 'image' once image has been added
        rect(this.x, this.y, this.width, this.height);
    }
}
class WoodenPlanks extends CollisionObjects{
    constructor(x,y,scaling=1){
        super(x,y,scaling)
        this.width = 62 * scaling;
        this.height = 82 * scaling;
    }
    show(){
        fill("white");
        //change 'rect' to 'image' once image has been added
        rect(this.x, this.y, this.width, this.height);
    }
}