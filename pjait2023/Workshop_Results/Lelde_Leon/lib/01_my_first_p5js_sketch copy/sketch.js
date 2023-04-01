function setup() {
  createCanvas(300, 300);

  background(500);
  fill(255,255,255);

  // yellow circle
  let c = color(255, 255, 0);
fill(c);
strokeWeight(4);
stroke(0,0,0);
  circle(150, 150, 200);

// mouth
  let f = color(255, 255, 255);
fill(f);
noStroke();
  ellipse(150, 170, 140, 100);
 
// mouth yellow rect
  let g = color(255, 255, 0);
  fill(g);
  noStroke();
  rect(70, 110, 160, 60);

// left white eye
  let a = color(255, 255, 255);
fill(a);
noStroke();
rect(100, 100, 30, 50);

// right white eye
let b = color(255, 255, 255);
fill(b);
noStroke();
rect(170, 100, 30, 50);

// left black eye
let d = color(0, 0, 0);
fill(d);
noStroke();
rect(100, 120, 30, 30);

// right black eye
let e = color(0, 0, 0);
fill(e);
noStroke();
rect(170, 120, 30, 30);



}

function draw() {

}
