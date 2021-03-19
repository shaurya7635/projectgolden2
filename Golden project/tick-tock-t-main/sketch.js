var Rival, wall, spikes, lava, Goku, Platform,platform1,platform2,platform3,platform4,platform5;
 var RivalImg, WallImg, LavaImg, GokuImg,bgImg,PlatformImg,SpikesImg;
 var WallGroup, Damage,SpikesGroup;
 var GokuCrouch;
 function preload() {
       RivalImg = loadImage("../tick-tock-t-main/g/Rival.png");
       WallImg = loadImage("../tick-tock-t-main/g/Wall.png");
       GokuImg = loadImage("../tick-tock-t-main/g/Goku.png");
       bgImg = loadImage("../tick-tock-t-main/g/bg.png");
       PlatformImg = loadImage("../tick-tock-t-main/g/pla.png")
       GokuCrouch = loadImage("../tick-tock-t-main/g/Goku crouching.png");
       LavaImg = loadImage("../tick-tock-t-main/g/Lava.png")
       SpikesImg = loadImage("../tick-tock-t-main/g/Spikes.png")

     } 
function setup() {
     createCanvas(1300,550) 
     //Rival = createSprite(100, 200, 10, 10)
    // Rival.addImage("rival",RivalImg);
     //Rival.scale = 0.3

     

     WallGroup = new Group()
     SpikesGroup = new Group()

     

     Platform = createSprite(0,0,10,10)
     Platform.addImage("Plat",PlatformImg)

     platform1 = createSprite(500,0,10,10)
     platform1.addImage("plat",PlatformImg)

     platform2 = createSprite(1000,0,10,10)
     platform2.addImage("plat2",PlatformImg)

     platform3 = createSprite(0,550,10,10)
     platform3.addImage("plat3",PlatformImg)

     platform4 = createSprite(500,550,10,10)
     platform4.addImage("plat4", PlatformImg)
     
     platform5 = createSprite(1000,550,10,10)
     platform5.addImage("plat5", PlatformImg)
     

     Goku = createSprite(100,200,10,10)
     Goku.addImage("Imggoku",GokuImg)
     Goku.scale = 0.3
     Goku.addAnimation("crouch",GokuCrouch);
     Goku.scale = 0.4

     Damage = 100
      } 
 function draw() { 
     background(bgImg)
      
    
     spawnWall();
     spawnSpikes();
     PlayerControl();
     if(Goku.isTouching(WallGroup)||Goku.isTouching(SpikesGroup)) {
         Damage = Damage - 5
         WallGroup.destroyEach()
         SpikesGroup.destroyEach()
         background("red")
     }
      drawSprites();
      fill("black")
      textSize(20)
      text("Damage ="+Damage,50,50)
         }
         
function spawnWall(){
     if(frameCount%80 === 0){
     x = Math.round(random(200,2550))
    
    wall = createSprite(x,290,300,50)
    wall.lifetime =  60
    wall.addImage("addWall",WallImg)
    wall.scale = 1.4
    WallGroup.add(wall);
    }
}

function PlayerControl(){
    if(keyDown("d")||keyDown("D") ){
        Goku.x = Goku.x+10
    }

    if(keyDown("a")||keyDown("A")) {
        Goku.x = Goku.x-10
    }

    if(keyDown("space")){
         Goku.velocityY = -10; }
    Goku.velocityY = Goku.velocityY+10

    if(keyDown("c")){
        Goku.changeAnimation("crouch", GokuCrouch)}
    Goku.collide(platform3)
    Goku.collide(platform4)
    Goku.collide(platform5)
}

function spawnSpikes(){

    if (frameCount%80 === 0) {
        x = Math.round(random(300,2550))
    spikes = createSprite(x,500,10,10)
    spikes.lifetime =  60
    spikes.addImage("addSpikes",SpikesImg)
    spikes.scale = 1.0
    SpikesGroup.add(spikes);
    }
    
}