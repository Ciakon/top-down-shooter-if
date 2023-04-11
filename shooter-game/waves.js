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




    waveStart = false;
    if (!enemies.length) {
        wave++;
        waveStart = true;
    }
}

