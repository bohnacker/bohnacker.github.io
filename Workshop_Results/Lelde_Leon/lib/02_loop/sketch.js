function setup() {
  createCanvas(300, 300);

  for (let i = 20; i < 300; i=i+5) {
    console.log(i);
    line(i, 20, 20, 300);
  }
 
  for (let i = 20; i < 300; i=i+5) {
    console.log(i);
    line(300, 20, i, 300);
  }
 

}

function draw() {

}
