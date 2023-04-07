class Enemy extends Character {
    constructor(x=windowWidth/2,y=windowHeight/2) {
        super()
        this.position = {x: x, y : y}
        this.enemyHealth = 15;
        this.enemyMaxHealth = 20;
        this.detectRange=250
        this.shootingDist=this.detectRange*(3/4)
    }

    AI(){
        //When the player enters a certain area, enemy begins shooting
        if(dist(this.position.x,this.position.y,player.position.x,player.position.y)<this.shootingDist){
            enemyShoot()
        }

        //Pathfinding
        let a = (this.position.y+player.position.y)/(this.position.x+player.position.x)
        let b =this.position.y-a*this.position.x

        if((a*this.position.x+b)==1){

        }

        line(this.position.x,this.position.y,player.position.x,player.position.y)
        
    }


    show(){
        noFill();
        strokeWeight(3)
        //MaxHealth bar
        rect(this.position.x, this.position.y-30, this.maxHealth/2, 10);
        fill("Red");
        //Current Health
        rect(this.position.x-(this.maxHealth/2-this.health/2)/2, this.position.y-30, this.health/2, 10);
        push()
        translate(this.position.x, this.position.y)
        noFill()
        circle(0,0,250*2)
        stroke("red")
        circle(0,0,this.shootingDist*2)
        if(dist(this.position.x,this.position.y,player.position.x,player.position.y)<250){
            //Enemy uses algebra, to loctate and detect the player.
            let dx = this.position.x - player.position.x;
            let dy = this.position.y - player.position.y;
            let c = sqrt(dx ** 2 + dy ** 2);
            this.angle = 180 - acos(dx / c);
            if(player.position.y>this.position.y){
                this.angle= 360 - this.angle;
            }
        }
        rotate(-this.angle)    
        image(this.currentAnimation, 0, 0, characterSize, characterSize);
        pop()
    }
}







function enemyShoot () {
    for(let i=0;i<enemies.length;i++){
        if(dist(enemies[i].position.x,enemies[i].position.y,player.position.x,player.position.y)<enemies[i].shootingDist){
            if (enemies[i].shootingCooldown > 0) {
                return;
                
            }
            
            if (enemies[i].ammo > 0) {
                enemies[i].shoot()
                enemies[i].ammo--;
                //print("ammo: "+enemies[i].ammo)
            }  
            if (enemies[i].ammo <= 0){
                enemies[i].reload()
            }
        }
    }   
}
