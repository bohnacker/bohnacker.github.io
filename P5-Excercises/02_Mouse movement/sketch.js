let size = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
  rect(mouseX-size/2, mouseY-size/2, size, size);
}
