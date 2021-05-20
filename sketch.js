var bg,bgImg
var zombie1,zombie2,graveImg,zombie
var boy
var buttonUp
var ground
function preload(){
bgImg=loadImage("game/background.jpg")
zombie1=loadImage("game/download.jpg")
zombie2=loadImage("game/zombie3.jpg")
graveImg=loadImage("game/grave 1.png")

}

function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
 bg=createSprite(400,200,1200,400)
 bg.addImage(bgImg);
 bg.scale=2.5;
 bg.velocityX=-1
ground=createSprite(400,360,800,5)
ground.visible=false;

 boy=createSprite(50,340,15,15)

buttonUp=createSprite(75,40,20,20)
}

function draw() {
  background("black");  
if(bg.x<300){
  bg.x=400;
}
if(mousePressedOver(buttonUp)){
boy.velocityY=-15;
}
boy.velocityY=boy.velocityY+0.8
spawnZombies();
  
boy.collide(ground)

drawSprites();



}

function spawnZombies(){
  if(frameCount%400===0){
    zombie=createSprite(800,370,15,15);
    zombie.velocityX=-1
    var ran=Math.round(random(1,3))
    if(ran==1){
      zombie.addImage(zombie1)
    } else if(ran==2){
      
      zombie.addImage(zombie2)
    } else if(ran===3){
zombie.addImage(graveImg);
    }

    zombie.lifetime=800;
console.log(ran)
  }
}