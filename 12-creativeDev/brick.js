class Brick {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.angle = 0;
    }
    display(d) {
        let distance = dist(mouseX, mouseY, this.x, this.y);
        translate(this.x, this.y);
        if (distance <= d) {
            this.angle += 1;
        }
        rotate(this.angle);
        rect(0, 0, size, size);
    }
}