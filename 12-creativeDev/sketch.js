let bricks = [];
let cols;
let rows;
let size = 40;

// let wpHeight = window.innerHeight;
// let wpWidth = window.innerWidth;

function setup() {
  // createCanvas(wpHeight, wpWidth);
  createCanvas(400, 400);
  rectMode(CENTER);
  angleMode(DEGREES);

  cols = width/size;
  rows = height/size;

  for (let i=0 ; i<10 ; i++) {
    bricks[i] = [];
    for (let j=0 ; j<10 ; j++) {
      bricks[i][j] = new Brick(size/2 + i*size, size/2 + j*size);
    }
  }


}

function draw() {
  background(220);
  for (let i=0 ; i<10 ; i++) {
    for (let j=0 ; j<10 ; j++) {
      bricks[i][j].display(30)
    }
  }
}
