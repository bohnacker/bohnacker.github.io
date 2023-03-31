// let myFont;
// let angle = 0;
// function preload() {
//   myFont = loadFont('./assets/Poppins-Bold.ttf');}
//   let img;
// function preload() {
//   img = loadImage('assets/7170823_orig.jpg');
// }
// let color = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  angleMode(DEGREES);
  fill(0);
  
  // image(img, 0, 0);

  // textFont(myFont);
  // textSize(48);
  // fill('#ED225D');
//  for(let y=0; y<height; y=y+40){
//   for(let x=0; x<width; x=x+40) {
//     fill('black');
//     rect(x,y,40,40);  
//  }


  }
  

function draw() {
  background(204);
  let w = width;
  let h = height; 
  if ((mouseX > 40) && (mouseX < 80) && (mouseY > 20) && (mouseY < 80)){
    fill(255);
  }
  else {
    fill(0);
  }
  rect(40, 20, 40, 60);
// if(mouseIsPressed == true){
//   fill("red");}
//   else {
//     fill("white");}
//     rect(mouseX - 20, mouseY - 20,40,40);



 }

//  for(let y=0; y<height; y=y+40){
//   for(let x=0; x<width; x=x+40) {
//     fill('black');
//     rect(x,y,40,40);  
//  }

//  function mouseClicked() {
//   fill('blue');}

//     function mouseReleased() {
//     fill('blue');}

//  if(mouseIsPressed == true){
//   fill("red");}
//   else {
//     fill("white");}
//     rect(mouseX - 20, mouseY - 20,40,40);
//  let c = color(255, 255, 0);
//  function mouseClicked() {
//    if(mouseClicked == true){
//     fill(c);}
//     else (_mouseReleased=>true); {
//       fill(c);}
//       rect(0,0,40,40);
// if ((mouseX < 40) && (mouseX > 0) && (mouseY < 40) && (mouseY > 0)){
//   fill(0);
// }
// else {
//   fill(255);
// }
// rect(x, y, 40, 40);

// }

// function mouseReleased() {
// fill('blue');
//   rect(mouseX, mouseY, 40, 40);
//   if (color === 0) {
//     color = 255;
//   } else {
//     color = 0;
//   }

// }

// for(let y=0; y<height; y=y+40) {
//   for(let x=0; x<width; x=x+40) {
//     push();
//     translate(x,y);
//     rotate(mouseX + y+x);
//     text('A', -15, 15);
//     pop();
//     }
//   }

// }
