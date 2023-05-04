class CollisionObjects {
    constructor(x, y, scaling = 1) {
        this.position = { x: x, y: y };
        this.width = 100 * scaling;
        this.height = 100 * scaling;
        this.maxHealth = 200;
        this.health = 200;
        this.hitboxe;
        this.image = bigIronBox;
    }

    death() {
        if (this.health <= 0) {
            return true;
        }
    }

    show() {
        push();
        strokeWeight(3);
        let healthbarSize = this.width * 0.8;
        //MaxHealth bar
        rectMode(CORNER);
        rect(
            this.position.x - healthbarSize / 2,
            this.position.y - this.height * 0.8,
            healthbarSize,
            10
        );
        fill("Red");
        //Current Health
        rect(
            this.position.x - healthbarSize / 2,
            this.position.y - this.height * 0.8,
            (healthbarSize * this.health) / this.maxHealth,
            10
        );
        image(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        );
        pop();
    }

    generateHitboxes() {
        //the order starts from top left and goes clockwise
        let x1 = this.position.x - this.width / 2;
        let x2 = x1 + this.width;
        let x3 = x2;
        let x4 = x1;

        let y1 = this.position.y - this.height / 2;
        let y2 = y1;
        let y3 = y2 + this.height;
        let y4 = y3;

        this.hitboxes = {
            x1: x1,
            x2: x2,
            x3: x3,
            x4: x4,
            y1: y1,
            y2: y2,
            y3: y3,
            y4: y4,
        };
    }

    showHitboxes() {
        push();
        stroke(255, 0, 0);
        strokeWeight(2);

        line(this.hitboxes.x1, this.hitboxes.y1, this.hitboxes.x2, this.hitboxes.y2);
        line(this.hitboxes.x2, this.hitboxes.y2, this.hitboxes.x3, this.hitboxes.y3);
        line(this.hitboxes.x3, this.hitboxes.y3, this.hitboxes.x4, this.hitboxes.y4);
        line(this.hitboxes.x4, this.hitboxes.y4, this.hitboxes.x1, this.hitboxes.y1);

        pop();
    }
}

class BigIronBox extends CollisionObjects {
    constructor(x, y, scaling = 1) {
        super(x, y, scaling);
        this.width = 212 * scaling;
        this.height = 108 * scaling;
    }
}

class WoodenPlanks extends CollisionObjects {
    constructor(x, y, scaling = 1) {
        super(x, y, scaling);
        this.width = 62 * scaling;
        this.height = 82 * scaling;
        this.image = woodenPlanks;
    }
}

class YellowBigIronBox extends CollisionObjects {
    constructor(x, y, scaling = 1) {
        super(x, y, scaling);
        this.width = 214 * scaling;
        this.height = 106 * scaling;
        this.image = yellowBigIronBox;
    }
}

class BigVent extends CollisionObjects {
    constructor(x, y, scaling = 1) {
        super(x, y, scaling);
        this.width = 88 * scaling;
        this.height = 53 * scaling;
        this.image = bigVent;
    }
}

class SmallVent extends CollisionObjects {
    constructor(x, y, scaling = 1) {
        super(x, y, scaling);
        this.width = 45 * scaling;
        this.height = 33 * scaling;
        this.image = smallVent;
    }
}

class CardboardBoxes extends CollisionObjects {
    constructor(x, y, scaling = 1) {
        super(x, y, scaling);
        this.width = 70 * scaling;
        this.height = 60 * scaling;
        this.image = cardboardBoxes;
    }
}

class SquaredIronBox extends CollisionObjects {
    constructor(x, y, scaling = 1) {
        super(x, y, scaling);
        this.width = 110 * scaling;
        this.height = 95 * scaling;
        this.image = squaredIronBox;
    }
}

class YellowSquaredIronBox extends CollisionObjects {
    constructor(x, y, scaling = 1) {
        super(x, y, scaling);
        this.width = 110 * scaling;
        this.height = 95 * scaling;
        this.image = yellowSquaredIronBox;
    }
}
