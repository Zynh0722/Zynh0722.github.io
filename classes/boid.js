class Boid {
    constructor(pX = windowWidth/2, pY = windowHeight/2) {
        this.maxSpeed = 5;
        this.visionRange = 100;
        this.maxForce = 0.2;

        this.pos = createVector(pX, pY);
        this.vel = createVector(random(-1, 1), random(-1, 1)).setMag(random(2, this.maxSpeed));
        this.acc = createVector();
    }
    
    align(boids) {
        let target = createVector();

        let total = 0;
        for (let other of boids) {
            let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
            if (other != this && d < this.visionRange) {
                target.add(other.vel);
                total++;
            }
        }
        if (total > 0) {
            target.div(total);
            // target.sub(this.vel);
            target.setMag(this.maxSpeed);
            target.limit(this.maxForce);
        }
        
        
        return target;
    }

    adhere(boids) {
        let target = createVector();

        let total = 0;
        for (let other of boids) {
            let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
            if (other != this && d < this.visionRange) {
                target.add(other.pos);
                total++;
            }
        }
        if (total > 0) {
            target.div(total);
            target.sub(this.pos);
            target.limit(this.maxForce * 1);
        }
        
        
        return target;
    }

    seperate(boids) {
        let target = createVector();

        let total = 0;
        for (let other of boids) {
            let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
            if (other != this && d < this.visionRange * 0.3) {
                let diff = p5.Vector.sub(this.pos, other.pos);
                diff.div(d);    
                target.add(diff);
                total++;
            }
        }
        if (total > 0) {
            target.div(total);
            target.setMag(this.maxSpeed);
            target.limit(this.maxForce * 2);
        }
        
        
        return target;
    }

    centerPull() {
        return p5.Vector.sub(this.pos, createVector(width/2, height/2)).limit(this.maxForce * 0.2).mult(-1);
    }


    edge() {
        if (this.pos.x < -20) {
            this.pos.x = width + 20;
        } else if (this.pos.x > width + 20) {
            this.pos.x = -20;
        }

        if (this.pos.y < -20) {
            this.pos.y = height + 20;
        } else if (this.pos.y > height + 20) {
            this.pos.y = -20;
        }
    }

    update(boids) {
        this.edge()
        this.acc.add(this.align(boids));
        this.acc.add(this.adhere(boids));
        this.acc.add(this.seperate(boids));
        this.acc.add(this.centerPull());
        this.vel.add(this.acc).limit(this.maxSpeed);
        this.pos.add(this.vel);
        this.acc.mult(0)
    }

    draw() {
        push();
        strokeWeight(1);
        stroke(255);
        noFill();

        translate(this.pos.x, this.pos.y);
        rotate(this.vel.heading() - PI / 2);

        let bWidth = 10;
        let bHeight = bWidth * 2;
        let bOffset = bHeight / 3;


        triangle((bWidth % 2 == 0) ? -bWidth/2 : -bWidth/2 + 1 ,-bOffset, 0,bHeight-bOffset, bWidth/2,-bOffset);
        pop();
    }
}
