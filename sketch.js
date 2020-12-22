const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;
var ground,paper;
var ball
function preload()
{
	
}

function setup() {
	createCanvas(1200,400);
//jj
	
	engine = Engine.create();
	world = engine.world;

//Create the Bodies Here.
box1= new Box(780,305,180,180)
//box2= new Box(645,332,10,100)
//box3= new Box(815,332,10,100)
/*var options ={
  restitution:1
}*/

//ball = Bodies.circle(200,100,20,options);
//World.add(world,ball);
  
ground=new Ground(10,400,10000,20)
   ball=new Paper(100,100,10) ;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  ground.display();
  box1.display();
  
  //box2.display();
  //box3.display();
 
  
  //ellipseMode(RADIUS);
  //ellipse(ball.position.x, ball.position.y, 20, 20);
  drawSprites();
}

function keyPressed() { 
  if (keyCode === UP_ARROW) { 
    Matter.Body.applyForce(ball.body,ball.body.position,{x:14,y:-20});
   } }
