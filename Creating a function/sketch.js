var x1;
var y1;
var x2;
var y2;
var x1Direction;
var x2Direction;
var y1Direction;
var y2Direction;

function setup() {
   	createCanvas(displayWidth, displayHeight);
   	x1=370;
   	y1=180;
   	x2=290;
   	y2=180;
   	x1Direction=5;
   	x2Direction=5;
   	y1Direction=5;
   	y2Direction=5;

}

function draw() {
    	  background(51);

    fill(250,250,250);
  	ellipse(330, 170, 250, 250);
  	
  	fill(250,250,150);
  	ellipse(330, 170, 240, 240);
  	
  	fill(250,250,250);
  	stroke(0,0,0);
  	ellipse(390, 170, 100, 100);
  	
  	fill(250,250,250);
  	stroke(0,0,0);
  	ellipse(270, 170, 100, 100);
  	
  	 if(isOutOfBounds(x1, y1) == true) {
      //x1 = random(width);
      //y1 = random(height);
    x1Direction = x1Direction * -1;
    y1Direction = y1Direction * -1;
    
  }
  
    	 if(isOutOfBounds(x2, y2) == true) {
    //x2 = random(width);
    //y2 = random(height);
        x2Direction = x2Direction * -1;
        y2Direction = y2Direction * -1;
  }
  	
  	leftEye(x1,y1)
  	x1=x1 + x1Direction;
  	y1=y1 + y1Direction;
  	//y1++;
  	
  	rightEye(x2,y2)
  	//x2--;
  	//y2--;
  	x2=x2 - x2Direction;
  	y2=y2 - y2Direction;
  	
  	fill(0,0,0);
  	noStroke();
    arc(330, 230, 70, 60, 0, PI);
    
    fill(250,0,0);
  	noStroke();
    arc(320, 230, 40, 30, 0, PI);
    
}

function isOutOfBounds(xPosition, yPosition) {
  if (xPosition > windowWidth || xPosition < 0) {
    return true;
  }
  
  if (yPosition > windowHeight || yPosition < 0) {
    return true;
  }
  
  return false;
  
}

function leftEye(xPosition,yPosition) {
  	fill(100,200,250);
  	ellipse(xPosition, yPosition, 40, 40);
  	
  	fill(0,220,150);
  	ellipse(xPosition, yPosition, 30, 30);

  	fill(0,0,0);
  	ellipse(xPosition, yPosition, 17, 17);
  	
  	fill(250,250,250);
  	ellipse(xPosition, yPosition, 7, 7);
}

function rightEye(xPosition,yPosition) {
  	fill(100,200,250);
  	ellipse(xPosition, yPosition, 40, 40);
  	
  	fill(0,220,150);
  	ellipse(xPosition, yPosition, 30, 30);

  	fill(0,0,0);
  	ellipse(xPosition, yPosition, 17, 17);
  	
  	fill(250,250,250);
  	ellipse(xPosition, yPosition, 7, 7);
}
