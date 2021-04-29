var boltiX = 100;
var boltiY = 100;
var hradiX = 5;
var hradiY = -6;
var boltiStaerd = 20;
var fstig = 0;
var gstig = 0;
var spadiBreidd = 150;
var spadiThykkt = 25;
var spadiY;
var spadi2X=0;
var hreifaS1X=0;




function setup() {
	createCanvas(windowWidth, windowHeight);
	spadiY = height - 45;
	rectMode(CENTER);
	textFont("Courier New",16);
	textStyle(BOLD);

}

function draw() {
	if (keyIsDown(LEFT_ARROW)) {
    spadi2X -= 10;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    spadi2X += 10;
  }
	if (keyIsDown(65)) {
    hreifaS1X -= 10;
  }

  if (keyIsDown(68)) {
    hreifaS1X += 10;
  }
  background(19, 3, 33);
	// Reikna ný hnit út frá hraða boltans:
  boltiX = boltiX + hradiX;
  boltiY = boltiY + hradiY;
	// Athuga hvort boltinn snertir vegginn hægra megin:
  if ((boltiX > width-boltiStaerd/2))  {
    hradiX = hradiX * -1;

  }// Athuga hvort boltinn snertir vegginn vinnstra megin:
  if ((boltiX < boltiStaerd/2))  {
    hradiX = hradiX * -1;
		}
  	// Athuga hvort boltinn snertir þakið
  if ((boltiY < boltiStaerd)) {
    hradiY = hradiY * -1;
  }// Athuga hvort boltinn snertir gólfið
if ((boltiY > height)) {
	hradiY = hradiY * -1;
}
  // Athuga hvort bolti snertir spaða:
  if(abs(spadiY - boltiY) < boltiStaerd/2 + spadiThykkt/2 && abs(hreifaS1X - boltiX) < boltiStaerd/2 + spadiBreidd/2){
    hradiY = hradiY * -1;
  }// Athuga hvort bolti snertir spaða 2:
  if(abs(spadiY - boltiY-700) < boltiStaerd/2 + spadiThykkt/2 && abs(spadi2X - boltiX) < boltiStaerd/2 + spadiBreidd/2){
    hradiY = hradiY * -1;
  }
	// Teikna boltann
  fill(255);
  ellipse(boltiX, boltiY, boltiStaerd, boltiStaerd);
	// Teikna spaðann
  fill(248, 252, 0);
  rect(hreifaS1X,spadiY ,spadiBreidd,spadiThykkt);
  fill (0);
  ellipse(hreifaS1X, spadiY, 10,10);
	// Teikna spaðann 2
  fill(174, 0, 255);
  rect(spadi2X,spadiY -700,spadiBreidd,spadiThykkt);
  fill (0);
  ellipse(spadi2X, spadiY-700, 10,10);
	// Teikna stigin
	fill(174, 0, 255);
	text("Fjólublár Stig: " + fstig,10,20);
	if((boltiY > height)){

  fstig= fstig+ 1;
}	// Teikna stigin 2
		fill(248, 252, 0);
		text("Gulur Stig: " + gstig,1200,20);
		if((boltiY < boltiStaerd)){

	  gstig= gstig + 1;
		}
		}
