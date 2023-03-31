let x, y; 
let speed = 5; 
let angle = 0; 
let d = 10; 
let count = 0; 
let shapeMode = 'ellipse';


let img;
function preload() {
  img = loadImage('./IMG_2344.png');
}

function setup() { 
  createCanvas(windowWidth, windowHeight); 
  x = width / 2; 
  y = height / 2; 
  background(100, 100, 100); 
  colorMode(HSB, 255); 
} 
 
function draw() { 
  count += 1; 
  if (count == 255) { 
    count = 0; 
  } 
   
  // Convert angle to radians 
  let radiansAngle = radians(angle); 
   
  // Calculate x and y components of velocity using trigonometry 
  let xspeed = speed * cos(radiansAngle); 
  let yspeed = speed * sin(radiansAngle); 
   
  x = x + xspeed; 
  y = y + yspeed; 
 
  if (x > width - d / 2) { 
    angle = 180 - angle; 
    x = width - d/2 - 1;
  } 
  if (x < d / 2) { 
    angle = 180 - angle; 
    x = d/2 - 1;
  } 
 
  if (y > height - d / 2 || y < d / 2) { 
    angle = 360 - angle; 
  } 
 
  if (shapeMode == 'ellipse') {
    noStroke(); 
    fill(count, 250, 1500); 
    ellipse(x, y, d, d);
  } else if (shapeMode == 'eagle') {
    translate(x, y);
    rotate(radiansAngle*100);
    image(img, -d/2, -d/2, d, d);  
  }
0
  // Check for A and D keys being pressed and update angle accordingly 
  if (keyIsPressed) { 
    if (key === "a" || key === "A") { 
      angle -= 5; 
    } else if (key === "d" || key === "D") { 
      angle += 5; 
    } 
  } 
}

function keyPressed() {
  if (key == 's') {
    shapeMode = 'ellipse'
  }
  if (key == 'w') {
    shapeMode = 'eagle'
  }

  if (keyCode == UP_ARROW) {
    d = d * 1.2;
  }
  if (keyCode == DOWN_ARROW) {
    d = d / 1.2;
  }

}


function keyPressed() {
  if (key == 's') {
    shapeMode = 'ellipse'
  }
  if (key == 'w') {
    shapeMode = 'eagle'
  }

  if (keyCode == UP_ARROW) {
    d = d * 1.2;
  }
  if (keyCode == DOWN_ARROW) {
    d = d / 1.2;
  }
  
  // Check for x key being pressed and clear the canvas
  if (key === "x" || key === "X") {
    clear();
  }
}







