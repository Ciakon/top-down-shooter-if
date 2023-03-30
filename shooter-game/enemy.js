
class Enemy extends Character {
    constructor() {
        super()
        this.enemyHealth = 15;
        this.enemyMaxHealth = 20;
    }
    noticePlayer(){
        let Dx = player.position.x - this.position.x;
        let Dy = player.position.y - this.position.y;
        let c = sqrt(Dx ** 2 + Dy ** 2);
        this.angle = acos(-Dx / c)+180;

    }


    show(){
        
        if(dist(this.position.x,this.position.y,player.position.x,player.position.y)<250){
            if(player.position.y>this.position.y){
                this.angle*=-1
            }
            
        }
        push()
        translate(this.position.x, this.position.y)
        rotate(this.angle)
        image(this.currentAnimation, 0, 0, characterSize, characterSize);
        pop()
    }
}
