let screenSize = 1000;
let gridSize = 50;
let Radius = 400;

function setup() {
  createCanvas(screenSize, screenSize);
}

function draw() {
  background("#F8F9FA");
  drawGrid(gridSize);
  plotCircle(Radius);
  plotAngle(Radius)
  
  noFill();
  stroke("#495057");
  strokeWeight(3);
  textSize(80);
  drawingContext.setLineDash([4, 0, 2]);
  
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text("Trigonometria", width/2, 1.2*gridSize);
}

function drawGrid(grid_size){
  
  // Set stroke style
  stroke("#CED4DA");
  strokeWeight(1);
  drawingContext.setLineDash([8, 0, 2]);
  
  // Draw grid
  for (let x = 0; x < width; x += grid_size){
    for (let y = 0; y < height; y += grid_size){
      line(x, y, x + grid_size, y);
      line(x, y, x, y + grid_size);
    }
  }
}

function plotCircle(radius, overhead = 50, overshoot = 30){
  
  // set Circle style
  noFill();
  stroke("#495057");
  strokeWeight(4);
  drawingContext.setLineDash([]);
  
  // draw Circle
  circle(width/2, overhead + height/2, 2*radius);
  
  
  stroke("#495057");
  strokeWeight(3);
  line(width/2 - radius - overshoot, height/2 + overhead, width/2 + radius + overshoot, height/2 + overhead);
  line(width/2, height/2  - radius - overshoot + overhead, width/2, height/2  + radius + overshoot + overhead);
  
  fill("#495057");
  noStroke();
  circle(width/2, overhead + height/2, 10);
  
}

function plotAngle(radius, overhead = 50, angle = -PI/9){
  
  stroke("#495057");
  strokeWeight(3);
  line(width/2, height/2 + overhead,width/2 + radius*cos(angle),height/2 + overhead + radius*sin(angle));
  
  arc(width/2, overhead + height/2, 0.75*radius, 0.75*radius, angle, 0);
  
  noStroke();
  fill("#F8F9FA");
  textAlign(CENTER, CENTER);
  textStyle(ITALIC);
  textSize(25);
  text("α", (width +  0.58*radius)/2, (2*overhead + height - 0.1*radius)/2);
  
  
  noStroke();
  fill("#2ec4b6");
  textAlign(RIGHT, CENTER);
  textStyle(BOLD);
  textSize(20);
  text("seno", (width/2 + radius*cos(angle) + width/2 + radius*cos(angle))/2, (height/2 + overhead + height/2 + overhead + radius*sin(angle))/2);
  stroke("#2ec4b6");
  strokeWeight(2);
  drawingContext.setLineDash([6,6]);
  line(width/2 + radius*cos(angle),height/2 + overhead,width/2 + radius*cos(angle), height/2 + overhead + radius*sin(angle));
  
  
  
  noStroke();
  fill("#e71d36");
  textAlign(CENTER, BOTTOM);
  textSize(20);
  text("cosseno", (width/2 + width/2 + radius*cos(angle))/2, (height/2 + overhead + radius*sin(angle) + height/2 + overhead + radius*sin(angle))/2);
  stroke("#e71d36");
  line(width/2, height/2 + overhead + radius*sin(angle), width/2 + radius*cos(angle), height/2 + overhead + radius*sin(angle));
  
  fill("#F8F9FA");
  stroke("#495057");
  drawingContext.setLineDash([]);
  circle(width/2 + radius*cos(angle),height/2 + overhead + radius*sin(angle), 20);
  
  
}
