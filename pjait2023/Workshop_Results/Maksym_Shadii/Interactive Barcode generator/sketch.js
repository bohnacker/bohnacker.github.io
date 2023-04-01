// INPUT TEXT GENERATES A BARCODE DESIGN - YOU CAN TYPE TEXT IN LIVE ASS WELL

let inp = "Lorem ipsumLorem ipsum Lorem ipsumLorem ipsum Lorem ipsum";

let side = 450;
let scl = 1;
let g = [];

function setup() {
  createCanvas(windowHeight, windowHeight);
  scl = height/side;
  background(0, 0, 0);
}

function draw(){
  get_inp();
  draw_code(); 
}

function draw_code(){
  scale(scl);
  let x = side - 127;
  let y = 0;
  
  let shift = 0;
  
  let count = 0;
  
  while (count < inp.length){
    
    let id = inp.charCodeAt(count);
    
    stroke(get_col(id, count));
  
    
    if (x >= 0 + shift){
      line(x, shift, x + id, id + shift);
      x--;
      x--;
      
    } else {
      line(shift, y, id + shift, y + id);
      y++;
      y++;
    }
    
    if (y + inp.charCodeAt(count) >= side){
      shift += 127;
      x = side - 127;
      y = shift;
    }
    
    count++;
  }
}

function get_col(id, count){
  let re_id= map(id, 0, 127, 0, 255);
  let out_color = color(0,0,0);
  
  if (re_id >= 32){
    out_color = color(re_id * (count % 2), 255 - re_id, 255);
    
  } else if (re_id <= 90){
    
    out_color = color(255 - re_id, 255, re_id * (count % 2));
    
  } else{
    
    out_color = color(255, re_id * (count % 2), 255 - re_id);
  }
  
  return out_color;  
}


function get_inp(){
  if (keyIsPressed) {
    inp += key;
  }
}

function mouseClicked(){
  //save(); 
}