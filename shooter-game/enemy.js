
class Enemy extends Character {
    constructor() {
        super()
        this.enemyHealth = 15;
        this.enemyMaxHealth = 20;
    }
    noticePlayer(){
        let dx = this.position.x - player.position.x;
        let dy = this.position.y - player.position.y;
        let c = sqrt(dx ** 2 + dy ** 2);
        this.angle = 180 - acos(dx / c);

        

    }


    show(){
        
        if(dist(this.position.x,this.position.y,player.position.x,player.position.y)<250){
            if(player.position.y>this.position.y){
                this.angle*=-1
            }
            
        }
        push()
        translate(this.position.x, this.position.y)
        rotate(-this.angle)
        image(this.currentAnimation, 0, 0, characterSize, characterSize);
        pop()
    }
}
