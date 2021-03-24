
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new roof(400,100,800,20);
	bobObject1= new bob(100,600,20,10);
	bobObject2= new bob(100,650,20,10);
	bobObject3= new bob(100,750,20,10);
	bobObject4= new bob(100,800,20,10);
	
  


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  drawSprites();
 
}



