class CollisionObjects{
    constructor(){
        this.position = {x : posX, y : posY}
    }
}

class BigBox extends CollisionObjects{
    constructor(){
        this.position = {x : posX, y : posY}
    }
    show(){
        image(BigBox,80,45);
    }
}