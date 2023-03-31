let drops = [];
let thunder = false;
let font, fontsize = 20;
let drawBackground = true;

function preload() {
  font = loadFont('Comic Sans MS 400.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);
  for (let i = 0; i < 2000; i++) {
    drops.push(new Drop());
  }
}

function mouseClicked() {
  thunder = true;
}

function draw() {
  if (thunder) {
    background(255, 255, 255);
    thunder = false;
  } else {
    if (drawBackground) {
      background(10, 20, 85);
    } else {
      background(170, 215, 230);
    }
  }
  for (let i = 0; i < mouseX; i++) {
    drops[i].fall();
    if (keyIsPressed && key === "2") {
      drops[i].displaySnow();
    } else {
      drops[i].display();
    }
  }
  textAlign(RIGHT);
  drawWords(width * 0.35);
}

function drawWords(x) {
  fill(255, 255, 0);
  noStroke();
  text('Can you remember... the rain? Or... snow?', x, 80);
}

function keyPressed() {
  if (key == '1') {
    drawBackground = !drawBackground;
  }
}

class Drop {
  constructor() {
    this.x = random(width);
    this.y = random(-500, -50);
    this.z = random(0, 20);
    this.len = map(this.z, 0, 20, 10, 20);
    this.yspeed = map(this.z, 0, 20, 4, 10);
  }

  fall() {
    if (keyIsPressed && key === "2") {
      this.y += this.yspeed / 10;
    } else {
      this.y += this.yspeed;
    }
    let grav = map(this.z, 0, 20, 0, mouseY / height);
    this.yspeed += grav;
    if (this.y > height) {
      this.y = random(-200, -100);
      this.yspeed = map(this.z, 0, 20, 4, 10);
    }
  }

  display() {
    let thick = map(this.z, 0, 20, 1, 3);
    strokeWeight(thick);
    stroke(255, 255, 255);
    line(this.x, this.y, this.x, this.y + this.len);
  }

  displaySnow() {
    noStroke();
    fill(255, 255, 255);
    ellipse(this.x + sin(this.y / 100 + this.len) * 20, this.y, 4, 4);
  }
}
