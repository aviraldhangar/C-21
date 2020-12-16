var fixedRect, movingRect;
var gameObject1,gameObject2;
var mRect;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "green";

mRect=createSprite(600,200,80,80);
mRect.shapeColor="white";



}

function draw() {
  background(0,0,0); 

  mRect.x = World.mouseX;
  mRect.y = World.mouseY;

  drawSprites();
  bounceOff(movingRect,fixedRect);

  if(isTouching(mRect, gameObject1)){
    mRect.shapeColor = "blue";
    gameObject1.shapeColor = "blue";
  }
  else {
    mRect.shapeColor = "green";
    gameObject1.shapeColor = "green";
  }



}

