function setup() {
  createCanvas(600, 600);
  noLoop();
  noStroke();
}

let colors = ["#80b918", "#bfd200","#92CD27"];

let noise_square = 30;
let big_square = 50;
let recursions = 5;
let x = 0;

function draw() {
  
  while (x < width) {
    let y = 0;
    while (y < height) {
      let i = 0;
      while (i < recursions){
        
        let little_square = big_square - 10*i;
        let padding_x = random(0, (big_square - little_square)/2);
        let padding_y = random(0, (big_square - little_square)/2);
        
        fill(random(colors));
        rect(x + padding_x, y + padding_y, little_square);
        
        i += 1;
      };
      y += big_square;
    };
    x += big_square;
  };
  
x = 0;
while (x < width) {
    y = 0;
    while (y < height) {
    
        fill(254, 255, 255, random(0,255));
        rect(x, y, noise_square);
        y += noise_square;
      };
    x += noise_square;
    };
  
}



  
