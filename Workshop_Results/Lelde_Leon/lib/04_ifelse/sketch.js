function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);

}

function draw() {

    if(mouseIsPressed == true){
    fill("red");}
    else {
      fill("white");}
      rect(mouseX - 20, mouseY - 20,40,40);

//   fill("white");
//   if(mouseIsPressed == true){
//     fill("red");
// }
//     rect(mouseX - 20, mouseY - 20,40,40);

  // if(mouseIsPressed == true){
  //   fill("red");}
  //   else {
  //     fill(255,255,255);}
  //   rect(mouseX - 20, mouseY - 20,40,40);

}

