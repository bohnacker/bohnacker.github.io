let firstUse = true;
let brush;
let softBrush;
let song;

var typedKey = "p5*js";
var fontPath;
var spacing = 120;
var spaceWidth = 80; // width of letter ' '
var fontSize = 250;
var lineSpacing = fontSize * 1.2;
var textW = 0;
var letterX = 50 + spacing;
var letterY = lineSpacing;
var stepSize = 2;
var danceFactor = 1;
var font;
var pnts;
var freeze = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  colorMode(HSB);
  opentype.load("./assets/NeueMetana-Bold copy.otf", function (err, f) {
    if (err) {
      print(err);
    } else {
      font = f;
      pnts = getPoints(typedKey);
      loop();
    }
  });
  angleMode(DEGREES);
  background("black");
  softBrush = loadImage("./assets/softBrush.png");
  brush = softBrush;
  //song = loadSound('../assets/Disorder (2007 Remaster).mp3');
}

function typee() {
  if (!font) return;
  noFill();
  push();
  // translation according the actual writing position
  translate(letterX, letterY);
  // distortion on/off
  danceFactor = 1;
  if (mouseIsPressed && mouseButton == LEFT)
    danceFactor = map(mouseX, 0, width, 0, 3);
  // are there points to draw?
  if (pnts.length > 0) {
    // let the points dance
    for (var i = 0; i < pnts.length; i++) {
      pnts[i].x += (random(-stepSize, stepSize) / 2) * danceFactor;
      pnts[i].y += (random(-stepSize, stepSize) / 2) * danceFactor;
    }
    strokeWeight(0.08);
    stroke(322, 100, 100);
    beginShape();
    // start controlpoint
    curveVertex(pnts[pnts.length - 1].x, pnts[pnts.length - 1].y);
    // only these points are drawn
    for (var i = 0; i < pnts.length; i++) {
      curveVertex(pnts[i].x, pnts[i].y);
    }
    curveVertex(pnts[0].x, pnts[0].y);
    // end controlpoint
    curveVertex(pnts[1].x, pnts[1].y);
    endShape();
  }
  pop();
}

function koleczka() {
  kolor = map(mouseY, 0, 1080, 0, 100);
  noStroke();

  for (let i = 30; i < width; i += 60) {
    for (let j = 30; j < height; j += 60) {
      fill(322, kolor, 100);
      circle(i, j, mouseX / 10);
    }
  }
}

function OneView() {
  background(10);
  noStroke();

  let i = 0;
  let r = width;
  let x = mouseX - 250;
  let y = mouseY - 250;
  while (r > 1) {
    if (i % 2 == 0) {
      fill(100);
    } else if (mouseIsPressed) {
      fill(322, 100, 100);
    } else {
      fill(10);
    }
    x = map(r, 0, windowWidth, mouseX, 0);
    y = map(r, 0, windowHeight, mouseY, 0);
    rect(x, y, r, r);
    r *= 0.7;
    i++;
  }
}

function SecondView() {
  background(10);
  noStroke();
  let i = 0;
  let r = width;
  let x = mouseX - 250;
  let y = mouseY - 250;
  while (r > 1) {
    if (i % 2 == 0) {
      fill(100);
    } else if (mouseIsPressed) {
      fill(322, 100, 100);
    } else {
      fill(10);
    }

    x = map(r, 0, windowWidth, mouseX, 0);
    y = map(r, 0, windowHeight, mouseY, 0);
    rect(x, y, r, r);
    r *= 0.8;
    i += 1;
  }
}
function ThirdView() {
  background(10);
  noStroke();
  let i = 0;
  let r = width;
  let x = mouseX - 250;
  let y = mouseY - 250;
  while (r > 1) {
    if (i % 2 == 0) {
      fill(100);
    } else if (mouseIsPressed) {
      fill(322, 100, 100);
    } else {
      fill(10);
    }

    x = map(r, 0, windowWidth, mouseX, 0);
    y = map(r, 0, windowHeight, mouseY, 0);
    rect(x, y, r, r);
    r *= 0.9;
    i += 1;
  }
}
function FourthView() {
  background(10);
  noStroke();
  let i = 0;
  let r = width;
  let x = mouseX - 250;
  let y = mouseY - 250;
  while (r > 1) {
    if (i % 2 == 0) {
      fill(100);
    } else if (mouseIsPressed) {
      fill(322, 100, 100);
    } else {
      fill(10);
    }

    x = map(r, 0, windowWidth, mouseX, 0);
    y = map(r, 0, windowHeight, mouseY, 0);
    rect(x, y, r, r);
    r *= 0.95;
    i += 1;
  }
}
function FifthhView() {
  background(10);
  noStroke();
  let i = 0;
  let r = width;
  let x = mouseX - 250;
  let y = mouseY - 250;
  while (r > 1) {
    if (i % 2 == 0) {
      fill(100);
    } else if (mouseIsPressed) {
      fill(322, 100, 100);
    } else {
      fill(10);
    }

    x = map(r, 0, windowWidth, 1, 0);
    x = pow(x, 2);
    x = map(x, 1, 0, mouseX, 0);

    y = map(r, 0, windowHeight, mouseY, 0);
    rect(x, y, r, r);
    r *= 0.9;
    i += 1;
  }
}

function zosia() {
  if (mouseIsPressed == true) {
    stroke(322, 100, 100);
  } else {
    stroke("white");
  }

  randomSeed(1);
  background("black");
  translate(220, 50);
  fill("black");
  strokeWeight(2);

  for (let i = 0; i < 200; i = i + 18) {
    beginShape();
    for (let x = 50; x <= 450; x += 8) {
      if (x > 150 && x < 350) {
        vertex(x, random(75 + mouseY / 10 + i, 150 + i));
      } else {
        vertex(x, random(140 + i, 150 + i));
        endShape();
      }
    }
  }
}

function drawSoftBrush(col, brushSize, speed) {
  imageMode(CENTER);
  // background("black");
  // tint our brush
  tint(col, 80, 100, 0.05);
  push();
  translate(mouseX, mouseY);
  scale(sin(frameCount * speed) / 2 + 1.5);
  rotate(frameCount * 0.01);
  
  image(brush, 0, 0, brushSize, brushSize);
  pop();
}

function draw() {
  if (firstUse) {
    typee();
  }
  if (keyCode === 49) {
    OneView();
  } else if (keyCode === 50) {
    SecondView();
  } else if (keyCode === 51) {
    ThirdView();
  } else if (keyCode === 52) {
    FourthView();
  } else if (keyCode === 53) {
    FifthhView();
  } else if (keyCode === 84) {
    typee();
  } else if (keyCode === 81) {
    //background(0);
    koleczka();
  } else if (keyCode === 90) {
    //song.play();
    zosia();
  } else if (key === 'b') {
    drawSoftBrush(322 + sin(frameCount *3) * 10, 100, 0.05);
  }
}

function getPoints() {
  fontPath = font.getPath(typedKey, 0, 0, 160);
  var path = new g.Path(fontPath.commands);
  path = g.resampleByLength(path, 25);
  textW = path.bounds().width;
  for (var i = path.commands.length - 1; i >= 0; i--) {
    if (path.commands[i].x == undefined) {
      path.commands.splice(i, 1);
    }
  }
  return path.commands;
}

function keyPressed() {
  firstUse = false;

  if (keyCode === 84) {
    background(0);
  }
}
