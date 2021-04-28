// Hér kemur kóðinn þinn:
var bukur = 100;
var munnur = 0
var munnurS = 150

function setup() {
  createCanvas(2000,1000);
  rectMode(CENTER);
}
function draw() {
  background(224, 202, 227);


  // Teiknum búkinn
  fill(25, 2, 28);

  arc(mouseX + bukur/2 -50,mouseY-bukur/2, 200, 1000, PI,TWO_PI);
  // Teiknum hausinn
  fill(255);

  ellipse(mouseX,mouseY - bukur/2-350, 100,120);
  // Teiknum augun
  fill(0);
  ellipse (mouseX - 25,mouseY - bukur/2-360, 20,15);
  ellipse (mouseX + 25,mouseY - bukur/2-360, 20,15);

  ellipse (mouseX - 25,mouseY - bukur/2-345, 20,5);
  ellipse (mouseX + 25,mouseY - bukur/2-345, 20,5);

  fill(0);
  ellipse(mouseX,mouseY - bukur/2-310, 40,5);
  // Teiknum munn


  fill(143, 25, 21);
  ellipse(mouseX,mouseY - bukur/2-150, 100,munnur);
  noStroke();
  fill(227, 106, 102);
  ellipse(mouseX,mouseY - bukur/2-munnurS, 40 , munnur/2);

  //teiknna merki
  fill(211, 165, 230);
  arc (mouseX - 25,mouseY - bukur/2-370, 15,40,PI, TWO_PI);
  arc (mouseX + 25,mouseY - bukur/2-370, 15,40,PI, TWO_PI);

  arc (mouseX - 25,mouseY - bukur/2-340, 15,40,0, TWO_PI+PI);
  arc (mouseX + 25,mouseY - bukur/2-340, 15,40,0, TWO_PI+PI);




}

function mousePressed() {
	//bukur = random (50,150);
  munnur = (munnur+10);
  munnurS = (munnurS-3);

  if(munnur==200){
    munnur=0;
    munnurS=150
  }
}
