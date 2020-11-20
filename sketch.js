function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(123);  
  angleMode(DEGREES);

  translate(200, 200);
  rotate(270);

  var twentyFourHr = hour();
  var hr = twentyFourHr - 12;
  var min = minute();
  var sec = second();

  let hrAngle = map(hr, 0, 12, 0, 360);
  let minAngle = map(min, 0, 60, 0, 360);
  let secAngle = map(sec, 0, 60, 0, 360);

  //strokeWeight(7);
  //stroke(255, 0 , 0);
  //line(300, 300, 100, 100);

  strokeWeight(8);
  stroke(255, 0, 0);
  noFill();
  arc(0, 0, 280, 280, 0, secAngle);

  push();
  rotate(secAngle);
  line(0, 0, 100, 0);
  pop();

  strokeWeight(8);
  stroke(0, 255, 0);
  noFill();
  arc(0, 0, 300, 300, 0, minAngle);

  push();
  rotate(minAngle);
  line(0, 0, 70, 0);
  pop();

  strokeWeight(8);
  stroke(0, 0, 255);
  noFill();
  arc(0, 0, 320, 320, 0, hrAngle);

  push();
  rotate(hrAngle);
  line(0, 0, 40, 0);
  pop();

  drawSprites();
}