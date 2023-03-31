let myFont;
let angle = 0;
let eyeIsClosed = false;
let color = 0;

function preload() {
  myFont = loadFont('./assets/Poppins-Bold.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
  // background(255);
  colorMode(HSB, 360, 100, 100, 100);
  angleMode(DEGREES);
  textFont(myFont);
  textSize(500);
}

function draw() {
  background('#cafffb');
  if (!eyeIsClosed || background('#0A3463'))
   

  for (let a = 0; a < 360; a = a + 15) {
    push()
    translate(mouseX, mouseY, pmouseX, pmouseY);
    let angle = (a + millis() / 50) % 360;
    rotate(angle)
    stroke('gold');
    strokeWeight(3);
    if (!eyeIsClosed || angle < 180+7.5 || angle > 360-7.5) {
      line(0, 0, 500, 0);
    }
    pop()

    fill('#cafffb');
    if (!eyeIsClosed || fill('#0A3463'))
    noStroke();
    ellipse(pmouseX, pmouseY, 300, 300);

    if (eyeIsClosed || fill('#ffffff'))
    noStroke();
    ellipse(pmouseX, pmouseY, 200, 200);

    if (eyeIsClosed || fill('#000000'))
    noStroke();
    ellipse(mouseX, mouseY, 50, 50);

    if (eyeIsClosed || fill('#ffffff'))
    noStroke();
    ellipse(mouseX+15, mouseY-15, 20, 20);

  }



  // fill(color);
  // if (eyeIsClosed == true) {
  //   rect(mouseX - 500, mouseY - 510, 1000, 500);
  // }

  // if(mouseIsPressed == true){
  //   fill("white");}
  //   else {
  //     fill("white");}
  //     rect(mouseX, mouseY,40,40);
}

function mouseClicked() {
  eyeIsClosed = !eyeIsClosed;
  background ('#0A3463');
  // if (mouseIsPressed == true) {
  //   for (let a = 0; a < 180; a = a + 15) {
  //     push()
  //     translate(mouseX, mouseY, pmouseX, pmouseY);
  //     rotate(a + millis() / 50)
  //     stroke('gold');
  //     line(0, 0, 500, 0);
  //     pop()
  //   }

  // } else {
  //   for (let a = 0; a < 360; a = a + 15) {
  //     push()
  //     translate(mouseX, mouseY, pmouseX, pmouseY);
  //     rotate(a + millis() / 50)
  //     stroke('gold');
  //     line(0, 0, 500, 0);
  //     pop()
  //   }
    // rect(mouseX, mouseY, 510, 260);
  }


  // rect(mouseX, mouseY, 510, 260);
  // if (color === 0) {
  //   color = 255;
  // } else {
  //   color = 0;
  // }



