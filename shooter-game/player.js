class Player extends Character {
    constructor() {
        super();
        this.maxHealth = 100;
        this.Health = 80;
        this.ammo=10
    }

    direction() {
        let Dx = this.position.x - mouseX;
        let Dy = this.position.y - mouseY;
        let c = sqrt(Dx ** 2 + Dy ** 2);
        this.facing = acos(Dx / c);
    }

    movePlayer(Left, Right, Up, Down) {
        if (keyIsDown(Up)) {
            if (keyIsDown(Left)) this.move("Up-Left");
            else if (keyIsDown(Right)) this.move("Up-Right");
            else this.move("Up");
        } else if (keyIsDown(Down)) {
            if (keyIsDown(Left)) this.move("Down-Left");
            else if (keyIsDown(Right)) this.move("Down-Right");
            else this.move("Down");
        } 
        else if (keyIsDown(Left)) this.move("Left");
        else if (keyIsDown(Right)) this.move("Right");
    }

    show() {
        image(this.currentAnimation, this.position.x, this.position.y, 50, 50);
        noFill();
        rect(10, 10, this.maxHealth, 25);
        fill("Red");
        noStroke();
        rect(10, 10, this.Health, 25);
        fill("Gold");
        stroke("black");
        rect(this.maxHealth + 20,10,10,25);
        fill("black")
        text("x" + this.ammo,this.maxHealth +35,25)
    }
}
