var zoogX = 10;
  var zoogY = 10;
  var zoogBukur = 100;
  var hradiX = 5;
  var hradiY = 3;

  function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  function draw() {
    background(235, 218, 240);
    zoogX = zoogX + hradiX;
    zoogY = zoogY + hradiY;
    if (abs(zoogX - width/2)> width/2){
      hradiX = -1*hradiX;
      zoogBukur = random (50,200);
    }
    if (abs(zoogY - height/2)> height/2){
      hradiY = -1*hradiY;
      zoogBukur = random (50,0);
    }

    zoog(zoogX,zoogY,zoogBukur);
  }

  // Teiknar geimveruna zoog
  // með miðju í punktinum (x,y)
  // Bukur: stjórnar lengdinni á búknum
  function zoog(x,y,bukur){
    rectMode(CENTER);
    // Teiknum búkinn
  fill(25, 2, 28);

  arc(x + bukur/2 -50,y-bukur/2, 200, 1000, PI,TWO_PI);
  // Teiknum hausinn
  fill(255);

  ellipse(x,y - bukur/2-350, 100,120);
  // Teiknum augun
  fill(0);
  ellipse (x - 25,y - bukur/2-360, 20,15);
  ellipse (x + 25,y - bukur/2-360, 20,15);

  ellipse (x - 25,y - bukur/2-345, 20,5);
  ellipse (x + 25,y - bukur/2-345, 20,5);

  fill(0);
  ellipse(x,y - bukur/2-310, 40,5);
  // Teiknum munn


  fill(143, 25, 21);
  ellipse(x,y - bukur/2-150, 100,0);
  noStroke();
  fill(227, 106, 102);
  ellipse(x,y - bukur/2-150, 40 , 0/2);

  //teiknna merki
  fill(211, 165, 230);
  arc (x - 25,y - bukur/2-370, 15,40,PI, TWO_PI);
  arc (x + 25,y - bukur/2-370, 15,40,PI, TWO_PI);

  arc (x - 25,y - bukur/2-340, 15,40,0, TWO_PI+PI);
  arc (x + 25,y - bukur/2-340, 15,40,0, TWO_PI+PI);
  }
