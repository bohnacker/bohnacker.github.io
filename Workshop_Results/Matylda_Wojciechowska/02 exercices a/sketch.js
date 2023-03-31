let scl = 1;

function setup() {
  // put setup code here
  createCanvas(windowHeight, windowHeight);
  scl = windowHeight / 2000; 
 
}

function draw() {
  // put drawing code here
  
  background(100,0,155);

  scale(scl);
  noStroke();

  fill(155, 30, 145);
  triangle(0,2000,1,80,800,2000);

  fill(125, 60, 145);
  triangle(0,2000,980,100,2000,2000);

  fill(205,100);
  rect(0,300, 2000,300);

  fill(145, 30, 145);
  triangle(0,2000,400,100,800,2000);


  
  fill(145, 30, 165);
  triangle(0,2000,160,400,800,2000);

  
  fill(205,100);
  
  rect(0,1300, 2000,500);


  
  fill(205,100);
  rect(0,800, 2000,100);
  
  translate(800,0);
  fill(125, 70, 165);
  triangle(0,2000,899,700,2000,2000);


}
