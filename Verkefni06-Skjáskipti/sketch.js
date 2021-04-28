function setup() {
  createCanvas(windowWidth, windowHeight);
  background(250, 213, 195);
  noStroke;

}
function draw() {
  if(mouseIsPressed){

    ellipse(mouseX,mouseY,20,20);
  }if(mouseX < width/2 && mouseY < height/2){
  	fill(237, 129, 126);
  }if(mouseX < width/2 && mouseY > height/2){
  	fill(163, 104, 151);
  }if(mouseX > width/2 && mouseY < height/2){
  	fill(110, 23, 92);
  }if(mouseX > width/2 && mouseY > height/2){
    	fill(59, 48, 102);
    }



}
