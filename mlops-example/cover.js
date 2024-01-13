function setup() {
  createCanvas(1200, 627);
  noLoop();
  noStroke();
}

let grainSize = 25;

function draw() {
  background("#FFFCF2");
  
  for(let x = 0 + 2*grainSize; x < width - 2*grainSize; x += grainSize){
    for(let y = 0 + 4*grainSize; y < height - 2*grainSize; y += grainSize){
      
      if (random(0, 1) > 0.85) {
        if ((x*height/width >= height - y - 2*grainSize) && (x*height/width <= height - y + 2*grainSize)) {
          fill("#FF7E27");
        } else {
          fill("#E6E0D1");
        }
      } else {
        fill("#E6E0D1");
      }
      
      circle(x, y, grainSize/2);
    }
  }
}
