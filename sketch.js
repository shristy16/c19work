var towerImg, tower;
var doorImg, door, doorsGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("pngegg.png");
  doorImg = loadImage("White_Door_PNG_Clip_Art-2554.png");
  ghostImg = loadImage("Pngitem_249647.png");
}

function setup() {
  createCanvas(800, 800);

  tower = createSprite(600,600);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

 doorsGroup = new Group();
 invisibleBlockGroup=new Group();


 ghost=createSprite(200,200,50,50);
 ghost.scale=0.1;
 ghost.addImage("ghost",ghostImg);

  
}

function draw() {
  background("black");

  if(gameState==="play"){

    if(keyDown("left_arrow")){
      ghost.x=ghost.x-3;
    }


    if(keyDown("right_arrow")){
      ghost.x=ghost.x+3;
    }

    if(keyDown("space")){
      ghost.velocityY=-5;
    }

    ghost.velocityY=ghost.velocityY+0.8;

    if(tower.y > 400){
      tower.y = 300
    }

    

    if(invisibleBlockGroup.isTouching(ghost)||ghost.y>600){
      ghost.destroy();
      gameState="end";
    }
    
    spwanDoors();
    drawSprites();

  }
  
  if(gameState==="end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over",230,250);
  }
  

}


function spwanDoors(){
  if (frameCount%240===0){
    door=createSprite(200,-50);
    door.addImage(doorImg);



    door.x=Math.round(random(120,400));
     door.velocityY=1;

    
     invisibleBlock.x=door.x;
     invisibleBlock.velocityY=1;

     ghost.depth=door.depth;
     ghost.depth+=1;

     door.lifetime=800;
     doorsGroup.add(door);

    
     invisibleBlock.debug=true;
     invisibleBlockGroup.add(invisibleBlock);

     

     
  }
}