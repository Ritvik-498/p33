const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;
const Constraint = Matter.Constraint;
var bg,ground,gimg;
var runner,runnerImg;
var ice=[];
var maxSnow=100;

function preload(){
  bg=loadImage("snow2.jpg");
  runnerimg=loadImage("snowman.png")
}

function setup() {
  createCanvas(1300,600);
  
  engine=Engine.create();
  world= engine.world;
  runner= createSprite(700,200,50,50)

runner.addImage(runnerimg)
runner.scale=0.2






if(frameCount % 275 === 0){
  for(var i=0; i<maxSnow; i++){
  ice.push(new Snow(random(0,1350), random(0,50)));
  }
  }


}

function draw() {
  background(bg);  
  Engine.update(engine);

  

  if(keyWentDown("space")&& runner.y >= 100) {
    runner.velocityY = -12;
}

//add gravity
runner.velocityY=runner.velocityY+0.5;


  for(var i = 0;i < maxSnow; i++){
    ice[i].display();
    ice[i].changePosition();
    }    
    




  
  drawSprites();

}