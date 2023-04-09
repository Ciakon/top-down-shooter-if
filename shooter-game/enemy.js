class Enemy extends Character {
    constructor(x=windowWidth/2,y=windowHeight/2) {
        super()
        this.position = {x: x, y : y}
        this.health = 50;
        this.maxHealth = 50;
        this.detectRange=250
        this.shootingDist=this.detectRange*(3/4)
        this.path=true
    }

    death() {
        if (this.health <= 0) {
            return true;
        }
    }

    AI(){
        //When the player enters a certain area, enemy begins shooting
        if(dist(this.position.x,this.position.y,player.position.x,player.position.y)<this.shootingDist){
            enemyShoot()
        }

        //Pathfinding
        let a = (this.position.y-player.position.y)/(this.position.x-player.position.x)
        let b =this.position.y-a*this.position.x
        let x1=[]
        let x2=[]
        let y1=[]
        let y2=[]
        for(let i=0;i<collisionObjects.length;i++){
            x1[i]=collisionObjects[i].position.x-collisionObjects[i].width/2
            x2[i]=collisionObjects[i].position.x+collisionObjects[i].width/2
            y1[i]=collisionObjects[i].position.y-collisionObjects[i].height/2
            y2[i]=collisionObjects[i].position.y+collisionObjects[i].height/2
            for(let j=0;j<enemies.length;j++){
                if(player.position.x>enemies[j].position.x){
                    if(player.position.x>((y1[i]-b)/a)){
                        if((y1[i]-b)/a<x2[i] && (y1[i]-b)/a > x1[i]){
                            circle((y1[i]-b)/a,y1[i],25)
                            this.path=false
                        } 
                    }
                    if(player.position.x>x1[i]){
                        if((a*x1[i]+b)<y2[i] && (a*x1[i]+b)>y1[i]){
                            circle(x1[i],(a*x1[i]+b),25)
                            this.path=false
                        } 
                    }
                    if(player.position.x>((y2[i]-b)/a)){
                        if((y2[i]-b)/a<x2[i] && (y2[i]-b)/a > x1[i]){
                            circle((y2[i]-b)/a,y2[i],25)
                            this.path=false
                        } 
                    } 
                    if(player.position.x>x2[i]){
                        if((a*x2[i]+b)<y2[i] && (a*x2[i]+b)>y1[i]) {
                            circle(x2[i],(a*x2[i]+b),25)
                            this.path=false
                        } 
                    }
                }
                
                
                
                
                
                
                
                /*
                //HØJRE SIDE
                if(player.position.x>enemies[j].position.x){
                    if(player.position.x>this.position.x && player.position.x>x1[i]){
                        if((y1[i]-b)/a<x2[i] && (y1[i]-b)/a > x1[i]){
                            circle((y1[i]-b)/a,y1[i],25)
                            this.path=false
                        } else {
                            this.path=true
                        }
                        if((a*x1[i]+b)<y2[i] && (a*x1[i]+b)>y1[i]){
                            circle(x1[i],(a*x1[i]+b),25)
                            this.path=false
                        } 
                    } else {
                        this.path=true
                    }
                    if(player.position.x>this.position.x && player.position.x>x2[i]) {
                        if((y2[i]-b)/a<x2[i] && (y2[i]-b)/a > x1[i]){
                            circle((y2[i]-b)/a,y2[i],25)
                            this.path=false
                        } 
                        if((a*x2[i]+b)<y2[i] && (a*x2[i]+b)>y1[i]) {
                            circle(x2[i],(a*x2[i]+b),25)
                            this.path=false
                        } 
                    } else {
                        this.path=true
                    }
                }
               


                //VENSTRE SIDE
                if(player.position.x<enemies[j].position.x){
                    if(player.position.x<this.position.x && player.position.x<x1[i] || player.position.y>y1[i]){
                        if((y1[i]-b)/a<x2[i] && (y1[i]-b)/a > x1[i]){
                            circle((y1[i]-b)/a,y1[i],25)
                        }
                        if((a*x1[i]+b)<y2[i] && (a*x1[i]+b)>y1[i]){
                            circle(x1[i],(a*x1[i]+b),25)
                        }
                        this.path=false
                    } else {
                        this.path=true
                    }
                    if(player.position.x<this.position.x && player.position.x<x2[i] && player.position.y<y2[i]){
                        if((y2[i]-b)/a<x2[i] && (y2[i]-b)/a > x1[i]){
                            circle((y2[i]-b)/a,y2[i],25)
                        }
                        if((a*x2[i]+b)<y2[i] && (a*x2[i]+b)>y1[i]){
                            circle(x2[i],(a*x2[i]+b),25)
                        }
                        this.path=false
                    } else {
                        this.path=true
                    }
                }
                */
            }






            
            
        }

        line(this.position.x,this.position.y,player.position.x,player.position.y)
        if(this.path==true){
            this.position.x+=0
            print("Walk?")
        }
    }


    show(){
        push()
        noFill();
        push()
        strokeWeight(3)
        let healthbarSize = 50;
        //MaxHealth bar
        rectMode(CORNER)
        rect(this.position.x - healthbarSize/2, this.position.y-50, healthbarSize, 10);
        fill("Red");
        //Current Health
        rect(this.position.x - healthbarSize/2, this.position.y-50, healthbarSize*this.health/this.maxHealth, 10);
 
        translate(this.position.x, this.position.y)
        noFill()
        circle(0,0,this.detectRange*2)
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
