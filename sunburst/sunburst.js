let noisePallete = ["#d4a373", "#d6ccc2", "#343a40", "#e9ecef", "#99582a"]
let opacityLevel = ["00", "00", "11", "11", "22"] 

function setup() {
  createCanvas(600, 600);
  frameRate(5);
  //noLoop();
}

function draw() {
  background("#F7C5A5");
  
  noStroke();
  fill("#e3142b");
  circle(width/2, height/2, random(310, 330));
  
  fill("#E36414");
  circle(width/2, height/2, random(190, 210));
  
  fill("#E3CB14");
  circle(width/2, height/2, random(70, 90));
  
  sunBurst();
  noiseOverlay(5);
  
}


function noiseOverlay(grainSize){
  for(let x = 0; x < width; x += grainSize){
    for(let y = 0; y < height; y += grainSize){
      noStroke();
      fill(random(noisePallete) + random(opacityLevel))
      rect(x, y, grainSize);
    }
  }
}


function sunBurst(angleDivisions = 12){
  
  let angleIncrement = 2*PI/angleDivisions
  let colorArray = ["#E3CB14", "#E36414", "#e3142b"]
  let startingAngle = 0;
  
  for (let index = 0; index < colorArray.length; ++index) {
     const color = colorArray[index];
     let colorAngle = startingAngle + index*angleIncrement/3;
    
      for (let angle = colorAngle; angle < 2*PI; angle += angleIncrement){

        let startRadius = 180;
        let x_0 = width/2 + startRadius*cos(angle);
        let y_0 = height/2 + startRadius*sin(angle);


        let radiusIncrement = random(60, 120);
        let x_1 = width/2 + (startRadius + radiusIncrement)*cos(angle);
        let y_1 = height/2 + (startRadius + radiusIncrement)*sin(angle);

        noFill();
        strokeWeight(15);
        stroke(color);
        drawingContext.setLineDash([random(10, 15), random(12,16), random(12,14)]);
        line(x_0, y_0, x_1, y_1);

      }
  }
}

function keyPressed() {
  // this will download the first 5 seconds of the animation!
  if (key === 's') {
    saveGif('mySketch', 5);
  }
}
