let pg;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // create invisible canvas and do some settings
  pg = createGraphics(100, 100, WEBGL);
  pg.colorMode(HSB, 360, 100, 100, 100);
  pg.angleMode(DEGREES);
  pg.noStroke();
}

function draw() {
  // draw on invisible canvas
  pg.push();
  pg.background(0);
  pg.pointLight(0, 0, 100, 40, -100, 400);
  pg.rotateY(mouseX / 4 - pg.width / 2);
  pg.rotateX(-(mouseY / 4 - pg.height / 2));

  pg.box(60);
  pg.pop();

  // draw on normal canvas
  background("black");

  for (let y = 0; y < height; y += 100) {
    for (let x = 0; x < width; x += 100) {
      image(pg, x, y);
    }
  }
}
