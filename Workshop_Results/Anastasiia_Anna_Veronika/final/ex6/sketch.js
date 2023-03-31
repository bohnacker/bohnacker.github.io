let b;
let myFont;

var joinedText;
var alphabet = 'АБВГДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧЬЮЯ-:;.,!?`';
var counters = [];

var posX;
var posY;

var drawAlpha = true;


function preload() {
  myFont = loadFont('assets/Alkatra-Bold.ttf');
  joinedText = "Садок вишневий коло хати, Хрущі над вишнями гудуть, Плугатарі з плугами йдуть, Співають ідучи дівчата. А матері вечерять ждуть. Сім'я вечеря коло хати,Вечірня зіронька встає. Дочка вечерять подає, А мати хоче научати, Так соловейко не дає. Поклала мати коло хати Маленьких діточок своїх; Сама заснула коло їх. Затихло все, тілько дівчата Та соловейко не затих.";
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  colorMode(HSB, 360, 100, 100, 100);
  angleMode(DEGREES);

}

function draw() {
  
  if (key == "1"){
    background("white");
    colorGradRed()
  } else if(key == "2"){
    background("white");
    tripCircle()
  } else if(key == "3"){
    background("white");
    Cherry()
  } else if(key == "4"){
    clickCircle()
  } else {
    background("white");
    letterR()
  }
}

function mouseClicked() {
  if (b == 0) {
    b = 1;
  } else {
    b = 0;
  }
}

function colorGradRed() {
  for(var y = 10; y < height; y += 30){
    for(var x = 0; x < width; x += 30){
      noStroke();
      let a;
      if(b == 1){
        a = x;
        } else {
        a = y;
      }
    
      let hue = (a % 360)/7;
      fill(hue, 95, 95);

      push();
      translate(x, y);
      rotate(mouseX + y + x + millis()/10);
      rect(-20, -20, 35, 35, 50);
      pop();
    }
  }
}

// ----------------------------------------------------------------------

function letterR() {
  randomSeed(123)
  for(var y = 10; y < height; y += 30){
    for(var x = 0; x < width; x += 30){
      push();
      translate(x + random(-10,10), y+ random(-10,10));
      rotate(mouseX + y + x + millis()/7);
      noStroke();
      fill('#f4a261');
      textFont(myFont);
      textSize(25 + random(-20,35) + mouseX/60 + mouseY/60);
      text('O', -15, 15);
      pop();
    }
  }
}

function tripCircle(){
  noFill();
  
  for (let i = 1; i < 100; i++) {
    let hue = i % 360;
    stroke(hue, 95, 95);
    strokeWeight(2);

    let r = (Math.sin(millis()/1000 + i/100) + 1) * width / 2;
    circle(width / 2, height / 2, r);
  }
}

function countCharacters() {
  for (var i = 0; i < joinedText.length; i++) {
    // get one character from the text and turn it to uppercase
    var c = joinedText.charAt(i);
    var upperCaseChar = c.toUpperCase();
    var index = alphabet.indexOf(upperCaseChar);
    // increase the respective counter
    if (index >= 0) counters[index]++;
  }
}

function getUniqCharacters() {
  var charsArray = joinedText.toUpperCase().split('');
  var uniqCharsArray = charsArray.filter(function (char, index) {
    return charsArray.indexOf(char) == index;
  }).sort();
  return uniqCharsArray.join('');
}

function Cherry(){
  noStroke();
  textFont('monospace', 20);

  // use the following command, to collect all characters in the text automatically
  alphabet = getUniqCharacters();

  for (var i = 0; i < alphabet.length; i++) {
    counters[i] = 0;
  }

  countCharacters();

  posX = 20;
  posY = 40;

  // go through all characters in the text to draw them
  for (var i = 0; i < joinedText.length; i++) {
    // again, find the index of the current letter in the character set
    var upperCaseChar = joinedText.charAt(i).toUpperCase();
    var index = alphabet.indexOf(upperCaseChar);
    if (index < 0) continue;

    fill("red");
  
    var sortY = index * 20 + 40;
    var m = map(mouseX, 50, width - 50, 0, 1);
    m = constrain(m, 0, 1);
    var interY = lerp(posY, sortY, m);

    text(joinedText.charAt(i), posX, interY);

    posX += textWidth(joinedText.charAt(i));
    if (posX >= width - 200 && upperCaseChar == ' ') {
      posY += 30;
      posX = 20;
    }
  }
}

// ________________________________________________

function mousePressed(){
  if(key == "4"){
    for (let i = 1; i < 100; i++) {
      let hue = (i % 360)/2;
      stroke(hue, 95, 95);
      strokeWeight(2);

      let r = ((Math.sin(millis()/1000 + i/100) + 1) * width / 2)/10;
      circle(mouseX, mouseY, r);
    }
  }
}

function keyPressed() {
  if(key == "4"){
    background("white");

  }
}

function clickCircle(){
  noFill();

}

