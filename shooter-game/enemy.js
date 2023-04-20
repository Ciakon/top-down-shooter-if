class Enemy extends Character {
    constructor(x=windowWidth/2,y=windowHeight/2, weapon = "shotgun", maxAmmo = 10) {
        super()
        this.position = {x: x, y : y}
        this.health = 50;
        this.maxHealth = 50;
        this.detectRange=1000000
        this.shootingDist=this.detectRange*(1/2550)
        this.path=true
        this.weapon = weapon;
        this.maxAmmo = maxAmmo
    }

    death() {
        if (this.health <= 0) {
            return true;
        }
    }
 
    AI(){
        this.path = true;
        //When the player enters a certain area, enemy begins shooting

        //Pathfinding
        let a = (this.position.y-player.position.y)/(this.position.x-player.position.x)
        let b =this.position.y-a*this.position.x
        let x1=[]
        let x2=[]
        let y1=[]
        let y2=[]
        let obstructionsx1 = []
        let obstructionsx2 = []
        let obstructionsy1 = []
        let obstructionsy2 = []
        
        for(let i=0;i<collisionObjects.length;i++){
            append(obstructionsx1, false)
            append(obstructionsx2, false)
            append(obstructionsy1, false)
            append(obstructionsy2, false)
            
        }
        
        
        for(let i=0;i<collisionObjects.length;i++){
            x1[i]=collisionObjects[i].position.x-collisionObjects[i].width/2
            x2[i]=collisionObjects[i].position.x+collisionObjects[i].width/2
            y1[i]=collisionObjects[i].position.y-collisionObjects[i].height/2
            y2[i]=collisionObjects[i].position.y+collisionObjects[i].height/2
            if(player.position.x>this.position.x){
                let x = (y1[i]-b)/a
                if(player.position.x > x){
                    if(x < x2[i] && x > x1[i]){
                        fill("red")
                        circle(x, y1[i], 25)
                        obstructionsx1[i]=true
                    } 
                    if(x > x2[i] || x < x1[i]){
                        fill("green")
                        circle(x,y1[i],25)
                        obstructionsx1[i]=false
                    } 
                }
                if(player.position.x>x1[i]){
                    if((a*x1[i]+b) < y2[i] && (a*x1[i]+b) > y1[i]){
                        fill("blue")
                        circle(x1[i],(a*x1[i]+b),25)
                        obstructionsy1[i]=true
                    } 
                    if((a*x1[i]+b) > y2[i] || (a*x1[i]+b) < y1[i]){
                        fill("green")
                        circle(x1[i],(a*x1[i]+b),25)
                        obstructionsy1[i]=false
                    }
                }
                if(player.position.x>((y2[i]-b)/a)){
                    if((y2[i]-b)/a<x2[i] && (y2[i]-b)/a > x1[i]){
                        fill("blue")
                        circle((y2[i]-b)/a,y2[i],25)  
                        obstructionsx2[i]=true
                    } 
                    if((y2[i]-b)/a > x2[i] || (y2[i]-b)/a < x1[i]){
                        fill("green")
                        circle((y2[i]-b)/a,y2[i],25)  
                        obstructionsx2[i]=false
                    } 
                } 
                if(player.position.x>x2[i]){
                    if((a*x2[i]+b) < y2[i] && (a*x2[i]+b) > y1[i]) {
                        fill("blue")
                        circle(x2[i],(a*x2[i]+b),25)
                        obstructionsy2[i]=true
                    } 
                    if((a*x2[i]+b) > y2[i] || (a*x2[i]+b) < y1[i]){
                        fill("green")
                        circle(x2[i],(a*x2[i]+b),25)
                        obstructionsy2[i]=false
                    }
                }
            }
            

            
            
            if(player.position.x<this.position.x){
                let x = (y1[i]-b)/a
                if(player.position.x < x){
                    if(x < x2[i] && x > x1[i]){
                        fill("red")
                        circle(x, y1[i], 25)
                        obstructionsx1[i]=true
                    } 
                    if(x > x2[i] || x < x1[i]){
                        fill("green")
                        circle(x,y1[i],25)
                        obstructionsx1[i]=false
                    } 
                }
                

                if(player.position.x<x1[i]){
                    if((a*x1[i]+b) < y2[i] && (a*x1[i]+b) > y1[i]){
                        fill("blue")
                        circle(x1[i],(a*x1[i]+b),25)
                        obstructionsy1[i]=true
                    } 
                    if((a*x1[i]+b) > y2[i] || (a*x1[i]+b) < y1[i]){
                        fill("green")
                        circle(x1[i],(a*x1[i]+b),25)
                        obstructionsy1[i]=false
                    }
                }
                if(player.position.x<((y2[i]-b)/a)){
                    if((y2[i]-b)/a<x2[i] && (y2[i]-b)/a > x1[i]){
                        fill("blue")
                        circle((y2[i]-b)/a,y2[i],25)  
                        obstructionsx2[i]=true
                    } 
                    if((y2[i]-b)/a > x2[i] || (y2[i]-b)/a < x1[i]){
                        fill("green")
                        circle((y2[i]-b)/a,y2[i],25)  
                        obstructionsx2[i]=false
                    } 
                } 
                if(player.position.x<x2[i]){
                    if((a*x2[i]+b) < y2[i] && (a*x2[i]+b) > y1[i]) {
                        fill("blue")
                        circle(x2[i],(a*x2[i]+b),25)
                        obstructionsy2[i]=true
                    } 
                    if((a*x2[i]+b) > y2[i] || (a*x2[i]+b) < y1[i]){
                        fill("green")
                        circle(x2[i],(a*x2[i]+b),25)
                        obstructionsy2[i]=false
                    }
                }
            }

        }

        
        
        if(obstructionsx1.includes(true)){
            this.path=false
        }
        
        if(obstructionsx2.includes(true)){
            this.path=false
        } 
       
        if(obstructionsy1.includes(true)){
            this.path=false
        }
       
        if(obstructionsy2.includes(true)){
            this.path=false
        }

        let speed=0.5

        if(this.path==true){
            this.position.x+=0.5
            
        }
       
        
        line(this.position.x,this.position.y,player.position.x,player.position.y)


        if(dist(this.position.x,this.position.y,player.position.x,player.position.y)<this.shootingDist && this.path){
            enemyShoot()
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
        if(dist(this.position.x,this.position.y,player.position.x,player.position.y)<this.detectRange){
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
