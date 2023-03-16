class Enemy extends Character {
    constructor() {
        this.enemyHealth = 15;
        this.enemyMaxHealth = 20;
        this.xEnemy;
        this.yEnemy;
        this.facing;
    }
    noticePlayer(){
        if(dist(xEnemy,yEnemy,playerX,playerY)<80){
        let Dx = playerX - xEnemy;
        let Dy = playerY - yEnemy;
        let c = sqrt(Dx ** 2 + Dy ** 2);
        this.facing = cos(Dx / c);
        }
    }
    show(){

    }
}
