function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);

  let h = 100;

  // the yellow circle
  background(255);
  fill(60, 90, 90);
  strokeWeight(4);   // make outline bigger
  ellipse(200, 200, 300, 300);

  // mouth
  strokeWeight(8);
  noFill();
  line(140, 280, 260, 280);

  console.log("Value stored in h:", h)

  // white backgrounds
  fill(255);
  noStroke();
  rect(120, 130, 60, h);
  rect(220, 130, 60, h);

  h = 1;

  // black dots
  fill(0);
  ellipse(140, 190, 40, 40);
  ellipse(240, 190, 40, 40);
}

function draw() {
  // put drawing code here
}
