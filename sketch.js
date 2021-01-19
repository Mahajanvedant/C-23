const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine,myWorld;
var ball;
var ground;
var b1,b2,b3;
var g1;

function setup() {
  createCanvas(400,400);
 myEngine=Engine.create();
myWorld=myEngine.world;

b1=new Box(200,300,50,50);
b2=new Box(240,100,50,100);
//b3=new Box(150,150,50,70);
g1=new Ground(200,height,400,20)

 

 



}

function draw() {
  background("lightgreen");  

Engine.update(myEngine);

b1.display()
b2.display()
//b3.display()
g1.display()


  drawSprites();
}