let wpHeight = window.innerHeight;
let wpWidth = window.innerWidth;

let bricks = [];
let cols;
let rows;
let size = 20;
let offset = 4;

let rgbaColor = {
  color: "rgb(255,0,255)"
}

function setup() {
  createCanvas(wpHeight, wpWidth);
  
  let gui = new dat.GUI();
  let guiNewColor = gui.addColor(rgbaColor, "color");
  
  guiNewColor.onChange(function(value) {
    let newColor = color(value);
    for (let i=0 ; i<cols ; i++) {
      for (let j=0 ; j<rows ; j++) {
        bricks[i][j].changeColor(newColor);
      }
    }
  });
  rectMode(CENTER);
  angleMode(DEGREES);

  cols = width/size;
  rows = height/size;

  for (let i=0 ; i<cols ; i++) {
    bricks[i] = [];
    for (let j=0 ; j<rows ; j++) {
      bricks[i][j] = new Brick(size/2 + i*size, size/2 + j*size);
    }
  }


}

function draw() {
  background(0);
  for (let i=0 ; i<cols ; i++) {
    for (let j=0 ; j<rows ; j++) {
      bricks[i][j].display(30, offset)
    }
  }
}
