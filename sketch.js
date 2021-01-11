
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 800);
	engine = Engine.create();
	world = engine.world;



	//Create the Bodies Here.
	cpaper = new Paper(200,200,10)

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);
	Engine.update(engine);
	cpaper.display();
	 


}



