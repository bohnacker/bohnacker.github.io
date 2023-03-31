// let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  angleMode(DEGREES);

}

function draw() {

  background("black");

  translate(width/2, height/2);

  for (var i = 0; i < mouseY; i++) {
translate(i, 0);
rotate(mouseX / 5);

let h = (i*5) % 360;
fill(h, 100, 100);
noStroke();
  rect(-20, -20, 40, 40);
}


  // for (var i = 0; i < mouseY; i++) {
  //     let h = mouseX;
  //     fill(h, 100, 100);
  // translate(i, 0);
  // rotate(mouseX / 5);
  //   rect(-20, -20, 40, 40);
  // }


  // push(); //store the original coordinates
  //  translate(mouseX, mouseY);
  // rotate(angle);
  // rect(-25, -25, 50, 50);
  // pop();

  // translate(mouseX, mouseY);
  // rotate(-angle);
  // rect(-15, -15, 30, 30);


  // angle = angle + 2;

  // rotate(45)
  // rect(25, 25, 150, 25);
  // translate(125,50);  
  // rect(25, 25, 150, 25);

  // translate(125,50);  
  // rect(25, 25, 150, 25); 
  // rotate(45);
  // rect(25, 25, 150,25);
  
  // translate(mouseX, mouseY);
  // rotate(angle);
  // rect(-25, -25, 50, 50);

  // angle = angle + 1000;

}

