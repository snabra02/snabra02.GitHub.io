
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(4);
}

function draw() {

  noStroke();
  for (let i = 0; i < 200; i++) {
    fill(random(100), random(255), random(255), random(255));
    ellipse(random(windowWidth), random(windowHeight), random(20));

   }
 }
