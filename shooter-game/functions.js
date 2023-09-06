
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
    }
    //box angled
}

function CharacterInBox(character, box) {
    let c = {x : character.position.x, y : character.position.y}; //charcter position

    let b = box.hitboxes; //box hitboxes
    let pd = 15; //point distance from center
    
    if (
        pointInBox(c.x, c.y + pd, b.x1, b.x2, b.x3, b.x4, b.y1, b.y2, b.y3, b.y4) ||
        pointInBox(c.x + cos(pd)*pd, c.y + sin(pd)*pd, b.x1, b.x2, b.x3, b.x4, b.y1, b.y2, b.y3, b.y4) ||
        pointInBox(c.x + pd, c.y, b.x1, b.x2, b.x3, b.x4, b.y1, b.y2, b.y3, b.y4) ||
        pointInBox(c.x + cos(pd)*pd, c.y - sin(pd)*pd, b.x1, b.x2, b.x3, b.x4, b.y1, b.y2, b.y3, b.y4) ||
        pointInBox(c.x, c.y - pd, b.x1, b.x2, b.x3, b.x4, b.y1, b.y2, b.y3, b.y4) ||
        pointInBox(c.x - cos(pd)*pd, c.y - sin(pd)*pd, b.x1, b.x2, b.x3, b.x4, b.y1, b.y2, b.y3, b.y4) ||
        pointInBox(c.x - pd, c.y, b.x1, b.x2, b.x3, b.x4, b.y1, b.y2, b.y3, b.y4) ||
        pointInBox(c.x - cos(pd)*pd, c.y + sin(pd)*pd, b.x1, b.x2, b.x3, b.x4, b.y1, b.y2, b.y3, b.y4)
    )
    return true;
}


function getAngle(x1, y1, x2, y2) {
    let v = atan((y2-y1) / (x1-x2))

    if (x1 > x2) {
        v += 180
    }

    else if (y2 > y1) {
        v += 360
    }

    return v
}

function checkSpawnConditions() {
    
}

function blockingBox (ex,ey,px,py) { //virker halvt
    //linear regression
    let a = (py-ey)/(px-ex) 
    let b = ey-(a*ex)


    for (let i = 0; i < collisionObjects.length; i++) {

        if (frameCount == 60) print(collisionObjects)
        
        box = collisionObjects[i]; // checks only one box? ... why?
        
        if (!( // enemy line of sight stops after player
            (ex < px && box.hitboxes.x1 < px  || ex < px && box.hitboxes.x2 < px ||
            ex > px && box.hitboxes.x1 > px  || ex > px && box.hitboxes.x2 > px) &&
            (ey < py && box.hitboxes.y1 < py || ey < py && box.hitboxes.y3 < py ||
            ey > py && box.hitboxes.y1 > py  || ey > py && box.hitboxes.y3 > py))
        ) {
            continue
        }

        if ( // enemy only looks foward
            (px < ex && box.hitboxes.x1 > ex || px < ex && box.hitboxes.x2 > ex ||
            px > ex && box.hitboxes.x1 < ex || px > ex && box.hitboxes.x2 < ex) &&
            (py < ey && box.hitboxes.y1 > ey || py < ey && box.hitboxes.y3 > ey ||
            py > ey && box.hitboxes.y1 < ey || py > ey && box.hitboxes.y3 < ey)
            
        ) {
            continue
        }

        if (
            (a * box.hitboxes.x1 + b) > box.hitboxes.y1 && (a * box.hitboxes.x1 + b) < box.hitboxes.y1 + box.height || // left side of box
            (a * box.hitboxes.x2 + b) > box.hitboxes.y2 && (a * box.hitboxes.x2 + b) < box.hitboxes.y2 + box.height || // right side of box
            (box.hitboxes.y1 - b) / a > box.hitboxes.x1 && (box.hitboxes.y1 - b) / a < box.hitboxes.x1 + box.width  || // top side of box
            (box.hitboxes.y4 - b) / a > box.hitboxes.x4 && (box.hitboxes.y4 - b) / a < box.hitboxes.x4 + box.width // bottom side of box
        ) {
        return true // something is in the way
        }
    }
}

function findClosestCorner(characterX, characterY) {

    closest = {x: 10000, y: 10000}
    let x = characterX
    let y = characterY
    

    for (let i = 0; i < collisionObjects.length; i++) {
        box = collisionObjects[i];

        if (dist(x, y, closest.x, closest.y) > dist(x, y, box.hitboxes.x1, box.hitboxes.y1)){
            closest = {x: box.hitboxes.x1, y: box.hitboxes.y1}
        }
        if (dist(x, y, closest.x, closest.y) > dist(x, y, box.hitboxes.x2, box.hitboxes.y2)){
            closest = {x: box.hitboxes.x2, y: box.hitboxes.y2}
        }
        if (dist(x, y, closest.x, closest.y) > dist(x, y, box.hitboxes.x3, box.hitboxes.y3)){
            closest = {x: box.hitboxes.x3, y: box.hitboxes.y3}
        }
        if (dist(x, y, closest.x, closest.y) > dist(x, y, box.hitboxes.x4, box.hitboxes.y4)){
            closest = {x: box.hitboxes.x4, y: box.hitboxes.y4}
        }
        
    }

    return [closest, box];

}

let enemySpawnRange = 200 //spawn distance from player
//create enemy with correct spawn conditions
function createEnemy() {

    createBufferSize = 50

    while (true) {

        let breakLoop = true;

        enemyPosition = {
            x: random(200, width - 200),
            y: random(200, height - 200),
        };
        
        if (dist(enemyPosition.x, enemyPosition.y, player.position.x, player.position.y,) < enemySpawnRange) {
            continue
        }

        for (let j = 0; j < collisionObjects.length; j++) {
            box = collisionObjects[j];
            if (
                pointInBox( //make sure enemy doesn't spawn in crate
                    enemyPosition.x,
                    enemyPosition.y,
                    box.hitboxes.x1 - createBufferSize,
                    box.hitboxes.x2 + createBufferSize,
                    box.hitboxes.x3 + createBufferSize,
                    box.hitboxes.x4 - createBufferSize,
                    box.hitboxes.y1 - createBufferSize,
                    box.hitboxes.y2 - createBufferSize,
                    box.hitboxes.y3 + createBufferSize,
                    box.hitboxes.y4 + createBufferSize
                ) 
            ) {
                breakLoop = false;
            }
        }
        if (breakLoop) break;
    }
   enemies.push(new Enemy(enemyPosition.x, enemyPosition.y));
}
