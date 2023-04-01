let myFont;
let angle = 0;
let eyeIsClosed = false;
let color = 0;
let gradient;

function preload() {
  myFont = loadFont('./assets/Poppins-Bold.ttf');
  gradient = loadImage('./assets/gradient.svg');
  gradientd = loadImage('./assets/gradientd.svg');
  gradients = loadImage('./assets/gradients.svg');
  lid = loadImage('./assets/lid.svg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
  // background(255);
  colorMode(HSB, 360, 100, 100, 100);
  angleMode(DEGREES);
  textFont(myFont);
  textSize(500);
}
function mouseClicked() {
  eyeIsClosed = !eyeIsClosed;
}
function draw() {
  background('#0A3463');
  if (eyeIsClosed) {
    background('#cafffb')
  }
   

if (!eyeIsClosed) {image(gradient, mouseX-2000, mouseY-2000, 4000, 4000)}
if (eyeIsClosed) {image(gradientd, mouseX-2000, mouseY-2000, 4000, 4000)}


  for (let a = 0; a < 360; a = a + 15) {
    push()
    translate(mouseX, mouseY, pmouseX, pmouseY);
    let angle = (a + millis() / 50) % 360;
    rotate(angle)
    stroke('gold');
    strokeWeight(3);
    if (!eyeIsClosed || angle < 180+7.5 || angle > 360-7.5) {
      line(0, 0, 500, 0);
    }
    pop()

    // fill('#cafffb');
    // if (!eyeIsClosed || fill('#0A3463'))
    // noStroke();
    // ellipse(pmouseX, pmouseY, 300, 300);

    
    
    
    if (!eyeIsClosed){ fill('#ffffff')
    noStroke();
    ellipse(pmouseX, pmouseY, 200, 200);}


    if (!eyeIsClosed){ fill('#000000')
    noStroke();
    ellipse(mouseX, mouseY, 50, 50);}

    if (!eyeIsClosed){ fill('#ffffff')
    noStroke();
    ellipse(mouseX+15, mouseY-15, 20, 20);}

    if (eyeIsClosed){image(gradients, mouseX-150, mouseY-150, 300, 300)}
    if (eyeIsClosed){image(lid, mouseX-126, mouseY-25, 250, 150)}


  }



  // fill(color);
  // if (eyeIsClosed == true) {
  //   rect(mouseX - 500, mouseY - 510, 1000, 500);
  // }

  // if(mouseIsPressed == true){
  //   fill("white");}
  //   else {
  //     fill("white");}
  //     rect(mouseX, mouseY,40,40);
}

function mouseClicked() {
  eyeIsClosed = !eyeIsClosed;
  background ('#0A3463');
}
//   (function() {

//     'use strict';

//     p5.prototype.fillGradient = function( type = 'linear', props = {}, context = false ) {

//         let _defaults = {

//             'linear' : {
//                 from: [0, 0], // x, y
//                 to: [width, height], // x, y
//                 steps : [ color(255), color(0, 96, 164), color(0) ] // color || [color, float]
//             },
//             'radial' : {
//                 from: [width/2, height/2, 0], // x, y, radius
//                 to: [width/2, height/2, max(width/2, height/2)], // x, y, radius
//                 steps : [ color(255), color(0, 96, 164), color(0) ]
//             },
//             'conic' : {
//                 from: [width/2, height/2, 90], // x, y, angle(degrees)
//                 steps : [ color(255), color(0, 96, 164), color(0) ]
//             }
//         }

//         let _type = type.toLowerCase();
//             _type = (!!_defaults[_type]) ? _type : 'linear'

//         let _props = Object.assign(_defaults[_type], props);
//         let _ctx = (!context) ? canvas.getContext("2d") : context.canvas.getContext('2d');

//         let _gradients = {

//             'linear' : () => _ctx.createLinearGradient(
//                 _props.from[0], _props.from[1],
//                 _props.to[0], _props.to[1]
//             ),
//             'radial' : () => _ctx.createRadialGradient(
//                 _props.from[0], _props.from[1], _props.from[2],
//                 _props.to[0], _props.to[1], _props.to[2]
//             ),
//             'conic' : () => _ctx.createConicGradient(
//                 radians(_props.from[2]), _props.from[0], _props.from[1],
//             )
//         }

//         let _gradient = (_gradients[_type])();

//             _props.steps.forEach( (step, i) => {

//                 let _step = !Array.isArray( step ) ? [step] : step
//                 let _stop = !!_step[1] ? _step[1] : ( i / (_props.steps.length-1) );
//                 _gradient.addColorStop( _stop, _step[0] )

//             });

//         _ctx.fillStyle = _gradient;
//     }

// })();
  
//   fillGradient('radial', {
//     from : [mouseX, mouseY, 0], // x, y, radius
//     to : [mouseX+550, mouseY+550, 1000], // x, y, radius
//     steps : [
//         color(255),
//         color(0, 96, 164),
//         color(0)
//     ] // Array of p5.color objects or arrays containing [p5.color Object, Color Stop (0 to 1)]
// });
  // if (mouseIsPressed == true) {
  //   for (let a = 0; a < 180; a = a + 15) {
  //     push()
  //     translate(mouseX, mouseY, pmouseX, pmouseY);
  //     rotate(a + millis() / 50)
  //     stroke('gold');
  //     line(0, 0, 500, 0);
  //     pop()
  //   }

  // } else {
  //   for (let a = 0; a < 360; a = a + 15) {
  //     push()
  //     translate(mouseX, mouseY, pmouseX, pmouseY);
  //     rotate(a + millis() / 50)
  //     stroke('gold');
  //     line(0, 0, 500, 0);
  //     pop()
  //   }
    // rect(mouseX, mouseY, 510, 260);
  


  // rect(mouseX, mouseY, 510, 260);
  // if (color === 0) {
  //   color = 255;
  // } else {
  //   color = 0;
  // }



