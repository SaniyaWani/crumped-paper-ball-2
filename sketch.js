
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dImage=loadImage("Dustbin.js");
}
var ground;
var dustbin,dObject,dImage;
var ball;
function setup() {
	createCanvas(1600, 700);

    
	engine = Engine.create();
	world = engine.world;

	

	

	//Create the Bodies Here.
    ground= new Ground (width/2,670,width,20);
	dustbin= new Dustbin (1200,650);
	ball= new Paper (200,450,40);
	
	World.add(world,ball);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ball.display();
  dustbin.display();
  ground.display();
  
  
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  
	}
}


