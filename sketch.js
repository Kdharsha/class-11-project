var jake,jake_running;
var path,pathImg;
var boundary1,boundary2;

function preload(){
  //pre-load images
jake_running = loadAnimation("Runner-1.png","Runner-2.png");
  
 pathImg = loadImage("path2.png");
  }

function setup(){
  createCanvas(600,400);
  //create sprites here
jake = createSprite(200,340,10,10);
jake.addAnimation("jake",jake_running);
jake.scale=0.09

path=createSprite(300,200,200,420);
path.addImage("path",pathImg);
path.y = path.height /2;


 boundary1 = createSprite(170,200,3,410);
 boundary1.visible=false;

boundary2 = createSprite(435,200,3,410);
boundary2.visible=false;
} 
function draw() {
  background(220);

  path.velocityY= 4;
  console.log(path.y);

if(path.y > 400){
  path.y = path.height /2
}

jake.x=World.mouseX;

jake.collide(boundary2);
jake.collide(boundary1);

drawSprites();
}
