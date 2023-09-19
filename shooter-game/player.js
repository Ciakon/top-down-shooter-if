


class Player extends Character {
    constructor() {
        super();
        this.ammo=8
        this.damageMultiplier = 2
        this.kills = 0
    }

    direction() {
        let dx = this.position.x - mouseX;
        let dy = this.position.y - mouseY;
        let c = sqrt(dx ** 2 + dy ** 2);
        this.angle = 180 - acos(dx / c);

        if(mouseY > this.position.y){
            this.angle = 360 - this.angle;
        }

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
        
        push()
        translate(this.position.x, this.position.y)
        rotate(-player.angle)
        image(this.currentAnimation, 0, 0, characterSize, characterSize);
        stroke("green")
        circle(0, 0, enemySpawnRange*2)
        pop()
    }

    ui(){
        push()
        noFill();
        strokeWeight(3)
        //MaxHealth bar
    
        rect(width/10, height/25, this.maxHealth, 25);
        fill("Red");
        //Current Health
        if(this.health>0){
        rect(width/10-(this.maxHealth-this.health)/2, height/25, this.health, 25);
        }
        fill("Gold");
        stroke("black");
        //Ammo indicator
        rect(this.maxHealth/2+width/10+15,height/25,10,25);
        fill("black")
        strokeWeight(1)
        //Ammo counter
        text("x" + this.ammo,this.maxHealth/2+width/10+15+10,25)

        //show wave and kills
        fill("black")
        noStroke()
        textSize(20)
        text(`Wave: ${wave}`, width/2 - 30, 20)
        text(`Kills: ${this.kills}`, width - 80, 20)
        pop()
    }
    reload(){
        if(keyIsPressed){
            if(keyCode == 82){
                if(this.ammo<=0){
                this.ammo+=this.maxAmmo
                ReloadShotGunSound.play();
                }
            }
        }
    }
}