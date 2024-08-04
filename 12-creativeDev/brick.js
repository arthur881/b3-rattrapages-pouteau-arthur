class Brick {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.angle = 0;
    }
    display(d) {
        
        push();
        translate(this.x, this.y);
        this.move(d);
        rotate(this.angle);
        rect(0, 0, size, size);
        pop();
    }
    move(d) {
        let distance = dist(mouseX, mouseY, this.x, this.y);
        if (distance <= d) {
            this.angle += 1;
        } else {
            if (this.angle > 0 && this.angle <= 50) {
                this.angle += 1;
            } else if (this.angle > 50) {
                this.angle = 0;
            }
        }
    }
}