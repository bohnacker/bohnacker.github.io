let myFont;
let angle = 0;
function preload() {
  myFont = loadFont('./assets/Poppins-Bold.ttf');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
fill(0);
background (255);
colorMode(HSB, 360, 100, 100, 100);
  angleMode(DEGREES);
  textFont(myFont);
  textSize(500);

}

function draw() {
  //background(204);
  // let k=20;
  // stroke('red');
  // line(mouseX-k, mouseY-k, mouseX+k, mouseY+k);
  // line(mouseX+k, mouseY+k, mouseX+k, mouseY+k);


  
  let a=0;

  rotate (a);
  line(mouseX*a, mouseY*a, mouseX, mouseY,);

    if(mouseIsPressed == true){
      stroke("white");
    strokeWeight(4);}
      else {
        stroke("red");
        strokeWeight(1);}
        line(mouseX, mouseY, mouseX*a, mouseY*a);
  
        // fill('white');
        // noStroke();
        // text('YOLO', 100, 500);
  // // let a = 0
  // // for (let a = 0; a<360; a = a+10)
  // let a = 0;
  // let b = 0;
  // for (let a = 30; a < 100; a = 100 - b)
  // // for (let b = 70; b < 100; b = 100 - a)
  // line(mouseX-a, mouseY-b, mouseX+a, mouseY+b);
  // // line(mouseX-a, mouseY-b, mouseX+60, mouseY+40);
  // // line(mouseX-40, mouseY-60, mouseX+40, mouseY+60);
}
