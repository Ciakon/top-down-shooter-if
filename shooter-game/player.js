


class Player extends Character {
    constructor() {
        super();
        //this.ammo=10
    }

    direction() {
        let dx = this.position.x - mouseX;
        let dy = this.position.y - mouseY;
        let c = sqrt(dx ** 2 + dy ** 2);
        this.angle = 180 - acos(dx / c);

        if(mouseY > this.position.y){
            this.angle = 360 - this.angle;
        }

        //line(mouseX, mouseY, this.position.x, this.position.y)y
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
        
        push()
        translate(this.position.x, this.position.y)
        rotate(-player.angle)
        image(this.currentAnimation, 0, 0, characterSize, characterSize);
        pop()
    }

    ui(){
        push()
        noFill();
        strokeWeight(3)
        //MaxHealth bar
        rect(windowWidth/10, windowHeight/25, this.maxHealth, 25);
        fill("Red");
        //Current Health
        rect(windowWidth/10-(this.maxHealth-this.health)/2, windowHeight/25, this.health, 25);
        fill("Gold");
        stroke("black");
        //Ammo indicator
        rect(this.maxHealth/2+windowWidth/10+15,windowHeight/25,10,25);
        fill("black")
        strokeWeight(1)
        //Ammo counter
        text("x" + this.ammo,this.maxHealth/2+windowWidth/10+15+10,25)
        pop()
    }
    reload(){
        if(keyCode == 82){
            if(this.ammo<=0){
                this.ammo+=this.maxAmmo
            }
        }
    }
}

function mousePressed() {
    player.shoot()
}