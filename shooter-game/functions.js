
//check if box1 is colliding with box2
function boxInBox(x1, x2, x3, x4, y1, y2, y3, y4, x5, x6, x7, x8, y5, y6, y7, y8) {
    return false

    let box1 = {};
    let box2 = {};

    box1.x1 = x1;
    box1.x2 = x2;
    box1.x3 = x3;
    box1.x4 = x4;
    box2.x1 = x5;
    box2.x2 = x6;
    box2.x3 = x7;
    box2.x4 = x8;
    box1.y1 = y1;
    box1.y2 = y2;
    box1.y3 = y3;
    box1.y4 = y4;
    box2.y1 = y5;
    box2.y2 = y6;
    box2.y3 = y7;
    box2.y4 = y8;

}

function pointInBox(px, py, x1, x2, x3, x4, y1, y2, y3, y4) {
    //box not angled
    if (x1 - x2 == x4 - x3 && y1 - y2 == y4 - y3) {
        if (px > x1 && px < x2 && py > y1 && py < y4) {
            
            return true
        }
        return false
    }

    //box angled
}