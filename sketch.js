const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var bg, sn, engine, world, sn2

function preload(){
  bg = loadImage("snow3.jpg")
}
function setup() {
  createCanvas(1000,600);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create()
  world = engine.world;
 sn = new snow(200,200)
 sn2 = new snow(100,50)
}

function draw() {
  background(bg);
  Engine.update(engine)  
 // drawSprites();
 sn.display()
 sn2.display()
}