let lastSeenX;
let lastSeenY;
let lastSeenAngle;

class Enemy extends Character {
    constructor(x=windowWidth/2,y=windowHeight/2, weapon = "shotgun", maxAmmo = 10, health = 50, speed = 0.8, damageMultiplier = 1) {
        super()
        this.position = {x: x, y : y}
        this.health = health;
        this.maxHealth = health;
        this.detectRange = 1000000
        this.shootingDist = this.detectRange*(1/2550)
        this.stopRange = 70
        this.path = true
        this.weapon = weapon;
        this.maxAmmo = maxAmmo
        this.speed = speed;
        this.damageMultiplier = damageMultiplier;
        this.moveAngle = 0;
    }
 
    move(moveAngle = -1) {
        let inBox = false;
    
        if (moveAngle == -1) return
    
        let newPosition = {x : this.position.x + cos(moveAngle)*this.speed, y : this.position.y + sin(moveAngle)*this.speed}
    
        for (let i = 0; i < collisionObjects.length; i++) {
          box = collisionObjects[i]
    
          if (CharacterInBox({position : {x : newPosition.x, y : newPosition.y}}, box)) {
            inBox = true
          }
        }
    
        if (!inBox) {
          this.position.x = newPosition.x
          this.position.y = newPosition.y

        }
    
      }

    AI(){
        this.moveAngle = getAngle(this.position.x,this.position.y,player.position.x,player.position.y)

        if (dist(this.position.x,this.position.y,player.position.x,player.position.y) > this.stopRange) {
            this.move(this.moveAngle)
        }











        /*
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
            let x = (y1[i]-b)/a
            if(player.position.x>this.position.x){
                
                if(player.position.x > x && this.position.x < x){
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
                if(player.position.x>x1[i] && this.position.x < x1[i]){
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
                if(player.position.x>((y2[i]-b)/a) && this.position.x <((y2[i]-b)/a)){
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
                
                if(player.position.x > x2[i] && this.position.x < x2[i]){
                    if((a*x2[i]+b) < y2[i] && (a*x2[i]+b) > y1[i]) {
                        fill("purple")
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
            if(player.position.x < x && this.position.x > x){
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
            if(player.position.x < x1[i] && this.position.x>x1[i]){
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
            if(player.position.x < ((y2[i]-b)/a) && this.position.x > ((y2[i]-b)/a)){
                if((y2[i]-b)/a<x2[i] && (y2[i]-b)/a > x1[i]){
                    fill("pink")
                    circle((y2[i]-b)/a,y2[i],25)  
                    obstructionsx2[i]=true
                } 
                if((y2[i]-b)/a > x2[i] || (y2[i]-b)/a < x1[i]){
                    fill("green")
                    circle((y2[i]-b)/a,y2[i],25)  
                    obstructionsx2[i]=false
                } 
            } 
            if(player.position.x<x2[i] && this.position.x > x2[i]){
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

        
        if(this.path==true && dist(player.position.x,player.position.y,this.position.x,this.position.y)>50){
            this.position.x+=(cos(this.angle)*this.speed)
            this.position.y+=(sin(this.angle)*this.speed)*(-1)
        }

        
        if(frameCount % 180 == 0 && this.path==true|| frameCount <= 10 ){
            lastSeenAngle=this.angle
            lastSeenX=player.position.x
            lastSeenY=player.position.y
        }

        
        if(this.path==false){
            if(this.position.x < lastSeenX + 3 && this.position.x > lastSeenX - 3){
                this.angle+=5
            }
            else {
                this.position.x+=(cos(lastSeenAngle)*this.speed)
                this.position.y+=(sin(lastSeenAngle)*this.speed)*(-1)
                
            }
        }
        
        line(this.position.x,this.position.y,player.position.x,player.position.y)


        if(dist(this.position.x,this.position.y,player.position.x,player.position.y)<this.shootingDist && this.path){
            enemyShoot()
        }
        */
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
        fill(255, 0, 0, 10)
        circle(0,0,this.shootingDist*2)
        stroke(128, 128, 255, 150) //perwinkle
        fill(128, 128, 255, 20)
        circle(0,0,this.stopRange*2)
        if(dist(this.position.x,this.position.y,player.position.x,player.position.y)<this.detectRange&&this.path==true){
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
