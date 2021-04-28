function setup() {
  createCanvas(3000,1000);
  background(255, 215, 0);
  fill(0);
  colorMode(HSB);
  frameRate(3);

}

function draw() {

 for(var x = 0; x < width; x = x+20){
   fill(random(0, 200),100,100);
   for(var y = 0; y < height; y = y+20){
     ellipse(x,y, 15,15);
   }
 }
}

    //  fill(random(0,360),75,100);
      //for(var i = 0; i < 20 ; i = i + 1) {
      //  ellipse(100 , 50 + i*20, 15, 15);
