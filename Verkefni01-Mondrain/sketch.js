// Hér kemur kóðinn þinn:

function setup() {
  createCanvas(2000, 1000);
  background(225);
  strokeWeight(10);
  stroke(0);

}

function draw() {
  beginShape();
  fill(230, 14, 14);
  rect(300, 5, 400, 455);
  endShape();//rauður

  beginShape();
  fill(255);
  rect(300, 450, 400, 350);
  endShape();//hvítur stór

  beginShape();
  fill(255);
  rect(700, 5, 450, 445);
  endShape();//hvítur hægra horn

  beginShape();
  fill(255, 255, 245);
  rect(700, 450, 370, 300);
  endShape();//hvíti hægra horn niðri, bage

  beginShape();
  fill(255, 255, 245);
  rect(1070, 550, 80, 250);
  endShape();//bage hægra horn niðri


  beginShape();
  fill(54, 43, 255);
  rect(1070, 450, 80, 150);
  endShape();//blatt hægra horn niðri


  beginShape();
  fill(255, 245, 46);
  rect(700, 750, 200, 50);
  endShape();//lítill gulur


  beginShape();
  fill(0);
  rect(900, 750, 170, 50);
  endShape();//lítill svartur


}
