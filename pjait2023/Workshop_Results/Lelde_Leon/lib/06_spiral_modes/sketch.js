let mode = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  angleMode(DEGREES);

}

function draw() {

  background("black");
  translate(width / 2, height / 2);

  for (var i = 0; i < mouseY; i++) {
    translate(i, 0);
    rotate(mouseX / 5);

    let h = (i * 5) % 360;
    fill(h, 100, 100);
    noStroke();

    if (mode == 0) {
      rect(-20, -20, 40, 40);
    } else {
      ellipse(0, 0, 60, 30);
    }


  }
}

  function keyTyped() {
    console.log(key);
    if (key == "1") {
      mode = 0;
    }
    else if (key == "2") {
      mode = 1;
    }



  }
