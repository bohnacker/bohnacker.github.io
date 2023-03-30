function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
  if (mouseIsPressed) {
    fill("red");
  } else {
    fill("white");
  }

  rect(mouseX - 20, mouseY - 20, 40, 40);
}
