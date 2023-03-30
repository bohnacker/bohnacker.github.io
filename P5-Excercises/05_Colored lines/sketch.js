function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
  background(0);

  // line(0, 0, 0, 400);
  // line(20, 0, 0, 400);
  // line(40, 0, 0, 400);

  for (let i = 0; i <= 400; i = i + 10) {
    let h = i * (360 / 400);
    stroke(h, 100, 100);
    line(i, 0, 0, 400);
  }

  // line(0, 400, 400, 0);
  // line(20, 400, 400, 0);
  // line(40, 400, 400, 0);

  stroke(0, 100, 100);
  for (let i = 0; i <= 400; i = i + 10) {
    let h = i * (360 / 400);
    stroke(h, 100, 100);
    line(i, 400, 400, 0);
  }

}
