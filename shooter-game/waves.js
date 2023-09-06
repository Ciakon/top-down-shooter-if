let wave = 1;
let waveStart = true;
let boxPositions;


function waveManager() {
    if (wave == 1 && waveStart) {
        //create boxes
         for (let i = 0; i < collisionObjects.length; i++) {
             collisionObjects[i].generateHitboxes()
        }
            createEnemy()
    }
    

    if (wave == 2 && waveStart) {
        for (let i = 0; i < 2; i++) {
            createEnemy()
        }
    }

    if (wave == 3 && waveStart) {
        for (let i = 0; i < 3; i++) {
            createEnemy()
        }
    }
    if (wave == 4 && waveStart) {
        for (let i = 0; i < 4; i++) {
            createEnemy()
        }
    }
    if (wave == 5 && waveStart) {
        for (let i = 0; i < 5; i++) {
            createEnemy()
        }
    }
    if (wave >= 6 && waveStart) {
        for (let i = 0; i < random(6, 9); i++) {
            createEnemy()

            enemy = enemies[i]

            enemy.maxHealth *= 1 + wave / 10;
            enemy.health = enemy.maxHealth;
            enemy.speed *= 1 + wave / 10;
            enemy.damageMultiplier *= 1 + wave / 10;
            enemy.maxAmmo += wave;
            enemy.ammo = enemy.maxAmmo;
        }
    }

    waveStart = false;
    if (!enemies.length) {
        wave++;
        waveStart = true;
    }
}

function generateCollisionObjects(amount) {
    let cake = [];

    for (let i = 0; i < amount; i++) {
        let boxCollision = true;
        while (boxCollision) {
            let x = random(150, width - 150);
            let y = random(150, width - 150);
            let boxType = random([
                "BigIronBox",
                "WoodenPlanks",
                "YellowBigIronBox",
                "BigVent",
                "SmallVent",
                "CardboardBoxes",
                "SquaredIronBox",
                "YellowSquaredIronBox",
            ]);

            let newBox = CollisionObjectsFactory.create(boxType, x, y);

            for (let j = 0; j < cake.length; j++) {
                if (!inbox) {
                    cake.push(newBox);
                    boxCollision = false;
                }
            }
        }
    }
}
