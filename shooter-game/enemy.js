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
        //Enemy uses algebra, to loctate and detect the player.
        let dx = this.position.x - player.position.x;
        let dy = this.position.y - player.position.y;
        let c = sqrt(dx ** 2 + dy ** 2);
        this.angle = 180 - acos(dx / c);

        if(player.position.y>this.position.y){
            this.angle= 360 - this.angle;
        }

        //When the player enters a certain area, enemy begins shooting
        if(dist(this.position.x,this.position.y,player.position.x,player.position.y)<this.shootingDist){
            enemyShoot()
        }
    }


    show(){
        push()
        translate(this.position.x, this.position.y)
        noFill()
        circle(0,0,250*2)
        stroke("red")
        circle(0,0,this.shootingDist*2)
        if(dist(this.position.x,this.position.y,player.position.x,player.position.y)<250){
            this.currentAngle=this.angle
        }
        rotate(-this.currentAngle)    
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
                print("ammo: "+enemies[i].ammo)
            }  
            if (enemies[i].ammo <= 0){
                enemies[i].reload()
            }
        }
    }   
}
