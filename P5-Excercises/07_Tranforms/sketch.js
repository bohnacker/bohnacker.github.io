let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  angleMode(DEGREES);
}

function draw() {
  background("black");

  push();   // store the original coordinate system
  translate(mouseX, mouseY);
  rotate(angle);
  rect(-25, -25, 50, 50);
  pop();

  push();   // store the original coordinate system
  translate(mouseX, mouseY);
  rotate(-angle);
  rect(-15, -15, 30, 30);
  pop();

  angle = angle + 2;
}
