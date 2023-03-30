


class Player extends Character {
    constructor() {
        super();
        this.ammo=10
    }

    direction() {
        let Dx = this.position.x - mouseX;
        let Dy = this.position.y - mouseY;
        let c = sqrt(Dx ** 2 + Dy ** 2);
        this.angle = acos(-Dx / c);
        //line(mouseX, mouseY, this.position.x, this.position.y)
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
        if(mouseY<this.position.y){
            this.angle*=-1
        }
        push()
        translate(this.position.x, this.position.y)
        rotate(player.angle)
        image(this.currentAnimation, 0, 0, characterSize, characterSize);
        pop()
    }

    ui(){
        noFill();
        strokeWeight(3)
        //MaxHealth bar
        rect(windowWidth/10, windowHeight/25, this.maxHealth, 25);
        fill("Red");
        //Current Health
        rect(windowWidth/10-(this.maxHealth-this.Health)/2, windowHeight/25, this.Health, 25);
        fill("Gold");
        stroke("black");
        //Ammo indicator
        rect(this.maxHealth/2+windowWidth/10+15,windowHeight/25,10,25);
        fill("black")
        strokeWeight(1)
        //Ammo counter
        text("x" + this.ammo,this.maxHealth/2+windowWidth/10+15+10,25)
    }
}

function mousePressed() {
    //player.shoot()
}