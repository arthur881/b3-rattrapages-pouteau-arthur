class Brick {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.angle = 0;
        this.color = 70;
        this.hoverColor = 255;
    }
    display(d, offset) {
        noFill();
        stroke(this.color);
        push();
        translate(this.x, this.y);
        this.move(d);
        rotate(this.angle);
        rect(0, 0, size-offset, size-offset);
        pop();
    }
    changeColor(newColor) {
        this.hoverColor = newColor
    }
    move(d) {
        let distance = dist(mouseX, mouseY, this.x, this.y);
        if (distance <= d) {
            this.angle += 1;
            this.color = this.hoverColor;
        } else {
            if (this.angle > 0 && this.angle <= 50) {
                this.angle += 1;
            } else if (this.angle > 50) {
                this.angle = 0;
            }
            if (this.color != 70) {
                this.color -= 5;
            } else {
                this.color = 70;
            }
        }
    }
}