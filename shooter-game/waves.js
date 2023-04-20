let wave = 1;
let waveStart = true;
let boxPositions;

function waveManager() {
    if (wave == 1 && waveStart) {
        for (let i = 0; i < 1; i++) {
            append(enemies, new Enemy(random(100, width - 100), random(100, height - 100)))
        }
    }

    if (wave == 2 && waveStart) {
        for (let i = 0; i < 2; i++) {
            append(enemies, new Enemy(random(100, width - 100), random(100, height - 100)))
        }
    }

    if (wave == 3 && waveStart) {
        for (let i = 0; i < 3; i++) {
            append(enemies, new Enemy(random(100, width - 100), random(100, height - 100)))
        }
    }
    if (wave == 4 && waveStart) {
        for (let i = 0; i < 4; i++) {
            append(enemies, new Enemy(random(100, width - 100), random(100, height - 100)))
        }
    }
    if (wave == 5 && waveStart) {
        for (let i = 0; i < 5; i++) {
            append(enemies, new Enemy(random(100, width - 100), random(100, height - 100)))
        }
    }
    if (wave >= 6 && waveStart) {
        for (let i = 0; i < random(6, 9); i++) {
            append(enemies, new Enemy(random(100, width - 100), random(100, height - 100)))
            this.maxHealth *= (1 + wave/10);
            this.health = this.maxHealth;
            this.speed *= (1 + wave/10);
            this.damageMultiplier *= (1 + wave/10);
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

