let cubeSize = 40;
let spacing = 40;
let canvasSize = 750;

let gradient;
function preload() {
  gradient = loadImage("./gradient.svg");
}

function setup() {
  createCanvas(windowHeight, windowHeight, WEBGL);
}

function draw() {
  camera(0, 0, 650, 0, 0, 0, 0, 1, 0);

  if (keyIsPressed === true) {
    background(227, 28, 58);
  } else {
    background(42, 82, 190);
  }

  push();
  translate(0, 0, -spacing * 3 * 1.5);
  image(gradient, -width/2, -height/2, width, height);
  pop();

  let halfWidth = (spacing * (4 - 1)) / 2;

  // Add directional light
  directionalLight(255, 229, 180, -10, -10, -1);
  directionalLight(255, 229, 180, 10, 10, -1);

  let dirX = (mouseX / width - 0.5) * 2;
  let dirY = (mouseY / height - 0.5) * 2;
  directionalLight(255, 255, 255, -dirX, -dirY, -1);

  for (let k = 0; k <= 7; k++) {
    push();
    let base = 1.12;
    scale(pow(base, -k), pow(base, -k), 1);
    for (let i = -6; i <= 6; i++) {
      for (let j = -6; j <= 6; j++) {
        // producing checker board
        if ((i + j) % 2 == 0) {
          // keep diamond shape
          if (abs(i) + abs(j) == k * 2) {
            let x = i * spacing;
            let y = j * spacing;
            let z = (k - 3) * spacing * 1.5;
            push();
            translate(x, y, z);
            scale(1, 1, 1.5);
            noStroke();
            if (keyIsPressed === true) {
              fill(42, 82, 190);
            } else {
              fill(227, 28, 58);
            }
            //fill(227, 28, 58); // Set the fill color to red
            box(cubeSize);

            translate(0, 0, cubeSize * 0.5);
            if (keyIsPressed === true) {
              fill(255, 219, 88);
            } else {
              let r = lerp(60, 204, k/7);
              let g = lerp(60, 153, k/7);
              let b = lerp(150, 228, k/7);
              fill(r, g, b);
            }
            plane(cubeSize);
            pop();
          }
        }
      }
    }
    pop();
  }
}
