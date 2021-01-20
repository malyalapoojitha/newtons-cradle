const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball,ground,conector,hanger,rope1,rope2,rope3,rope4,rope5;

/*function preload()
{
	
}*/

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	hanger=new Hanger();
	paper1=new Paper(300,300,20)
	paper2=new Paper(350,300,20)
	paper3=new Paper(400,300,20)
	paper4=new Paper(450,300,20)
	paper5=new Paper(500,300,20)
	rope1=new Connector(paper1.body,hanger.body,-100);
	rope2=new Connector(paper2.body,hanger.body,-50);
	 rope3=new Connector(paper3.body,hanger.body,0);
	rope4=new Connector(paper4.body,hanger.body,50);
	rope5=new Connector(paper5.body,hanger.body,100);


	// rope1=new Connector(paper1.body,hanger.body);
	// rope2=new Connector(paper2.body,hanger.body);
	//  rope3=new Connector(paper3.body,hanger.body);
	// rope4=new Connector(paper4.body,hanger.body);
	// rope5=new Connector(paper5.body,hanger.body);
		
		
    

	Engine.run(engine);
  
}


function draw() {
 
  background(0);
  

  hanger.display();
  paper1.display();
  paper2.display();
  paper3.display();
  paper4.display();
  paper5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:-50,y:-50})
	}
}
