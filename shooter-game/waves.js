let wave = 1000000;
let waveStart = true;
let boxPositions;

function waveManager() {
    if (wave == 1 && waveStart) {
        //create boxes
        let boxAmount = 3;
        
        for (let i = 0; i < 1; i++) {
            while (true) {
                let breakLoop = false;
                enemyPosition = {
                    x: random(200, width - 200),
                    y: random(200, height - 200),
                };

                for (let j = 0; j < collisionObjects.length; j++) {
                    box = collisionObjects[j];
                    if (
                        pointInBox(
                            enemyPosition.x,
                            enemyPosition.y,
                            box.hitboxes.x1,
                            box.hitboxes.x2,
                            box.hitboxes.x3,
                            box.hitboxes.x4,
                            box.hitboxes.y1,
                            box.hitboxes.y2,
                            box.hitboxes.y3,
                            box.hitboxes.y4
                        )
                    ) {
                        continue;
                    }
                    breakLoop = true;
                }
                if (breakLoop) break;
            }
            enemies.push(new Enemy(enemyPosition.x, enemyPosition.y));
        }
    }

    if (wave == 2 && waveStart) {
        for (let i = 0; i < 2; i++) {
            append(
                enemies,
                new Enemy(random(100, width - 100), random(100, height - 100))
            );
        }
    }

    if (wave == 3 && waveStart) {
        for (let i = 0; i < 3; i++) {
            append(
                enemies,
                new Enemy(random(100, width - 100), random(100, height - 100))
            );
        }
    }
    if (wave == 4 && waveStart) {
        for (let i = 0; i < 4; i++) {
            append(
                enemies,
                new Enemy(random(100, width - 100), random(100, height - 100))
            );
        }
    }
    if (wave == 5 && waveStart) {
        for (let i = 0; i < 5; i++) {
            append(
                enemies,
                new Enemy(random(100, width - 100), random(100, height - 100))
            );
        }
    }
    if (wave >= 6 && waveStart) {
        for (let i = 0; i < random(6, 9); i++) {
            append(
                enemies,
                new Enemy(random(100, width - 100), random(100, height - 100))
            );
            this.maxHealth *= 1 + wave / 10;
            this.health = this.maxHealth;
            this.speed *= 1 + wave / 10;
            this.damageMultiplier *= 1 + wave / 10;
            this.maxAmmo += wave;
            this.ammo = this.maxAmmo;
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
