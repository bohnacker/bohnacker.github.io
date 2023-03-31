let inc = 0.04;
let start = 0;
let scl = 1;

function setup() {
  createCanvas(windowHeight, windowHeight);
  scl = windowHeight / 800;
  strokeJoin(ROUND);
  colorMode(HSB, 360, 100, 100, 100);
}

function draw() {

  background("Indigo");

  scale(scl*0.7);
  stroke("blue");
  strokeWeight(1);
  noFill();
  
  let lastX = 0;
  let lastY = 0;
  let xoff = start;
  for (let x = 0; x < width; x++) {
    let w = map(x, 0, width, 40, 2);
    strokeWeight(w);

    let hue = map(x, 0, width, 0, 360);
    stroke(hue, 100, 100);
    let y = noise(xoff) * height;
  
    
    if (x > 0) {
      line(lastX, lastY, x, y);
    }
    lastX = x;
    lastY = y;
    xoff += inc;
    
  }

  // beginShape();
  // let xoff = start;
  // for (let x = 0; x < width; x++) {
  //   stroke("blue");
  //   let y = noise(xoff) * height;
  //   vertex(x, y);
  //   xoff += inc;
  // }
  // endShape(); 

  start += inc * (mouseX - width/2) / 20;
}
