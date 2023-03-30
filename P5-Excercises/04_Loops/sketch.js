function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
  background(0);

  // let i = 0;
  //  while (i < 10) {
  //   rect(i * mouseX, 50, 50, 50);
  //   i = i + 1;
  // }

  for (let i = 0; i < 10; i = i + 1) {
    rect(i * mouseX, 50, 50, 50);
  }
}
