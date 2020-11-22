var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,20,20);
  wall=createSprite(1600,200,20,height/2);
  wall.shapeColor=80,80,80;
  car.velocityX=speed;
}

function draw() {
  background(255,255,255);  
if(car.isTouching(wall)){
  car.collide(wall);
  var deformation=weight*speed*speed/22500;
if(deformation > 180){
  car.shapeColor=color(255,0,0);
}
if(deformation < 180 && deformation > 100){
  car.shapeColor=color(230,230,0);
}
if(deformation < 100){
  car.shapeColor=color(0,225,0);
}
}
  drawSprites();
}