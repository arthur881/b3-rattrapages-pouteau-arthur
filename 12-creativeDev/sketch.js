let b;
let size = 100;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  angleMode(DEGREES);
  b = new Brick(width/2, height/2);
}

function draw() {
  background(220);
  b.display(30);
}
