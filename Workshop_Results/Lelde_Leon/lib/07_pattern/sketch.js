let myFont;
let angle = 0;
function preload() {
  myFont = loadFont('./assets/Poppins-Bold.ttf');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  angleMode(DEGREES);

  textFont(myFont);
  textSize(48);
  fill('#ED225D');

}

function draw() {
background("grey");

// for(let y=0; y<height; y=y+40) {
//   for(let x=0; x<width; x=x+40) {
//     push();
//     translate(x,y);
//     rotate(mouseX + y);
//     text('A', -15, 15);
//     pop();
//     }
//   }


for(let y=0; y<height; y=y+10) {
  for(let x=0; x<width; x=x+40) {
    push();
    translate(x,y);
    rotate(mouseX + y+x);
    text('A', -15, 15);
    pop();
    }
  }
  // translate(width / 2, height / 2);

  // rotate(angle);
 
//   angle = angle + 3;

//   const scream = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
// textSize(20);
// textWrap(WORD);
// text(scream, 0, 0, 100);
// fill(0, 0, 0, 75);
// text(scream, 0, 20, 100);
// fill(0, 0, 0, 50);
// text(scream, 0, 40, 100);
// fill(0, 0, 0, 25);
// text(scream, 0, 60, 100);
// strokeWeight(2);
// ellipseMode(CENTER);
// fill(255);
// ellipse(15, 50, 15, 15);
// fill(0);
// ellipse(11, 47, 1, 1);
// ellipse(19, 47, 1, 1);
// ellipse(15, 52, 5, 5);
// line(15, 60, 15, 70);
// line(15, 65, 5, 55);
// line(15, 65, 25, 55);
// line(15, 70, 10, 80);
// line(15, 70, 20, 80);



  }
