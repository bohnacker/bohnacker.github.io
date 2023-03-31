function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);

  // for (let a = 0; a <= 360; a = a + 10) {
  //   stroke(a, 100, 100);
  //   strokeWeight(1);
  // }
}

function draw() {



  for (let i = 0; i <= 400; i = i + 10) {
    let h = i * (360 / 400);
    stroke(h, 100, 100);
    line(i, 0, 0, 400);
    line(i, 400, 400, 0);

  }
  // The above could be written separetaly
  // for (let i = 0; i<=300; i=i+10) {
  //   line(i,0,0,300);
  //   line(i,300,300,0);
  // }
  // for (let i = 0; i<=300; i=i+10) {
  // line(i,300,300,0);
  // }

}

