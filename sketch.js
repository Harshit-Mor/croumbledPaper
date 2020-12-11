const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,paper1,ground1;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(1250, 650);
	rectMode(center);


	engine = Engine.create();
	world = engine.world;

	paper1=new Paper(200,450,70);
	ground1=new Ground(width/2,620,width,20);
	dustbin1=new Dustbin(1200,510,20,200);
	dustbin2=new Dustbin(1000,510,20,200);
	dustbin3=new Dustbin(1100,600,200,20);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper1.display();
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});
	}
}