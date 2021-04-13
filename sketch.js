var gardenImg, garden;
var catImg1, catImg2, cat;
var mouseImg1, mouseImg2, mouse;
var mouseImg3;
var catImg3;

function preload()
 {
  //load the images here
  gardenImg = loadImage("images/garden.png");
  catImg1 = loadAnimation("images/cat1.png");
  mouseImg1 = loadAnimation("images/mouse4.png");
  catImg2 = loadAnimation("iamges/cat2.png", "images/cat3.png");
  mouseImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
  mouseImg3 = loadAnimation("images/mouse1.png");
  catImg3 = loadAnimation("images/cat4.png");
   

}

function setup()
{
  createCanvas(1000,800);
  //create tom and jerry sprites here
  garden = createSprite(500,400);
  garden.addImage(gardenImg);

  mouse = createSprite(180,630);
  mouse.addAnimation("normalMouse",mouseImg1);
  mouse.scale = 0.1;

  cat = createSprite(600,650);
  cat.addAnimation("normalCat", catImg1);
  cat.scale = 0.1;
    
   mouse.debug = true;
  mouse.setCollider("circle",0,0,200);
  
  cat.debug = true;
 cat.setCollider("circle",0,0,200);
}

function draw() {

  background(255);
  //Write condition here to evalute if tom and jerry collide
  
  if(keyDown("left_arrow"))
    {
      cat.x = cat.x - 3;
      cat.addAnimation("runningCat", catImg2);
      cat.changeAnimation("runningCat", catImg2);
      
      mouse.addAnimation("teasingMouse", mouseImg2);
      mouse.changeAnimation("teasingMouse", mouseImg2);
      
    } else if(keyWentUp("left_arrow"))
      {
        cat.changeAnimation("normalCat", catImg1);
        

      }
  

  if (mouse.x - cat.x < mouse.width/2 + cat.width/2 &&
     cat.x - mouse.x < mouse.width/2 + cat.width/2 &&
     mouse.y - cat.y < mouse.height/2 + cat.height/2 &&
     cat.y - mouse.y < mouse.height/2 + cat.height/2)
    {
      cat.addAnimation("collidedCat",catImg3);
      cat.changeAnimation("collidedCat", catImg3);
      mouse.addAnimation("collidedMouse",mouseImg3);
      mouse.changeAnimation("collidedMouse",mouseImg3);
    }
  
  
  
  drawSprites();
}



