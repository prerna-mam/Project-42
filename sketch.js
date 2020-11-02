var hours, minutes, seconds
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  
  scAngle = map(sc,0,60,0,360);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  function translate(){
    hands=0,0;
    function  arc(){
push();
rotate(scAngle);
stroke(255,0,0)
strokeWeight(7);
line(0,0,100,0);
pop();
    }
  }
  drawSprites();
hours();
minutes();
}
function hours (){
  let h = hour();
  text('Current hour:\n' + h, 5, 50);
}
function minutes (){
  let m = minute();
text('Current minute: \n' + m, 5, 100);
}
function seconds(){
  let s = second();
text('Current second: \n' + s, 5, 150);
}