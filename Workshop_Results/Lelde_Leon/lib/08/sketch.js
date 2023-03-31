// let myFont;
// let angle = 0;
// function preload() {
//   myFont = loadFont('./assets/Poppins-Bold.ttf');}
//   let img;
// function preload() {
//   img = loadImage('assets/7170823_orig.jpg');
// }
let color = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  angleMode(DEGREES);
  // image(img, 0, 0);

  // textFont(myFont);
  // textSize(48);
  // fill('#ED225D');



  }
  

function draw() {
background("grey");

for(let y=0; y<height; y=y+40){
  for(let x=0; x<width; x=x+40) {
    fill(color);
    rect(x,y,40,40);  
 }
  


 }


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
    if ((mouseX > 0) && (mouseX < 40) && (mouseY > 0) && (mouseY < 40)){
    fill(255);
  }
  else {
    fill(0);
  }  
  rect(0, 0, 40, 40);
}

function mouseReleased() {

 
  if (color === 0) {
    color = 255;
  } else {
    color = 0;
  }



}






// for(let y=0; y<height; y=y+40) {
//   for(let x=0; x<width; x=x+40) {
//     push();
//     translate(x,y);
//     rotate(mouseX + y+x);
//     text('A', -15, 15);
//     pop();
//     }
//   }


