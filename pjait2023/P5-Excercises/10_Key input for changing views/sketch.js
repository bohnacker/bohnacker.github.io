let myFont;

function preload() {
  myFont = loadFont("assets/Alkatra-Bold.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  angleMode(DEGREES);

  textFont(myFont);
  textSize(36);
}

function draw() {
  background("black");

  if (key == "a") {
    drawRedH();
  } else if (key == "b") {
    drawWithRandomPositions();
  } else {
    drawBlueO();
  }
}

function drawWithRandomPositions() {
  randomSeed(123);

  fill("blue");
  for (let y = 10; y < height; y = y + 30) {
    for (let x = 0; x < width; x = x + 30) {
      push();
      translate(x + random(-10,10), y + random(-10,10));
      rotate(mouseX + y + x);
      // scale(1 + y / height);
      text("O", -15, 15);
      pop();
    }
  }
}

function drawRedH() {
  fill("#ED225Daa");
  for (let y = 10; y < height; y = y + 30) {
    for (let x = 0; x < width; x = x + 30) {
      push();
      translate(x, y);
      rotate(mouseX + y + x + millis() / 10);
      scale(1 + y / height);
      text("H", -15, 15);
      pop();
    }
  }
}

function drawBlueO() {
  fill("blue");
  for (let y = 10; y < height; y = y + 30) {
    for (let x = 0; x < width; x = x + 30) {
      push();
      translate(x, y);
      rotate(mouseX + y + x);
      // scale(1 + y / height);
      text("O", -15, 15);
      pop();
    }
  }
}
