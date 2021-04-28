// Hér kemur kóðinn þinn:

function setup() {
  createCanvas(2000,2000);
  noStroke()

  frameRate(20);


}

function draw() {
  var x = 500;
  var y = 500;

  background(25, 42, 82);

    beginShape();
    fill(252, 76, 0);
    noStroke();
    rect(0,400, 1000, 1000);
    endShape();

    beginShape();
    fill(89, 76, 58);
    noStroke();
    rect(1000,400, 1000, 1000);
    endShape();

    beginShape();
    fill(155, 92,0);
    vertex(x-200,y);//vestur
    vertex(x-80, y-80);
    vertex(x,y-360);//n
    vertex(x+200,y-180);//breidd na
    vertex(x+360, y);//a
    vertex(x+40,y+40);//breidd au

    endShape();

    beginShape();
    fill(252, 76, 0);
    noStroke();
    ellipse(random(500,600),random(0,150), 30, 30);
    endShape();//springa

    beginShape();
    fill(240, 36, 0);
    noStroke();
    ellipse(random(500,600),random(0,500), 30, 30);
    endShape();//springa



  }
