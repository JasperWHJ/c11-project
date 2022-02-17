var path, boy, leftBoundary, rightBoundary;
var pathImg, boyImg;
var i;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  // general
  createCanvas(400, 400);

  // moving background
  path = createSprite(200, 200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

  // boy setup
  boy = createSprite(180, 340, 30, 30);
  boy.scale = 0.08;
  boy.addAnimation("running", boyImg);

  leftBoundary = createSprite(0, 0, 100, 800);
  leftBoundary.visible = false;

  rightBoundary = createSprite(410, 0, 100, 800);
  rightBoundary.visible = false;
}

function draw(){
  // general
  background(0);
  path.velocityY = 4;

  // boy position
  boy.x = World.mouseX;

  // collisions
  edges = createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  //code to reset the background
  if (path.y > 400) {
    path.y = height / 2;
  }

  drawSprites();
}
