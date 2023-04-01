function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  angleMode(DEGREES);
}

function draw() {
  background("black");

  translate(width / 2, height / 2);

  for (var i = 0; i < mouseY; i++) {
    translate(i, 0);
    rotate(mouseX / 5);

    let hue = (i * 5) % 360;
    fill(hue, 80, 80);
    rect(-20, -20, 40, 40);
  }
}
