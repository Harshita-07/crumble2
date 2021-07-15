const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;
function setup() {
	createCanvas(1200, 400);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1000,height-20);
	paperObject=new Paper(200,200,50);
    ground = new Ground(600,height,1200,20);
	//Create a Ground
	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 900,
	    height: 400,
	    wireframes: false
	  }
	});
	Engine.run(engine);
	//Render.run(render);
}
function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  dustbinObj.display();
  paperObject.display();

}
function keyPressed() {
  	if (keyCode === UP_ARROW) {
    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  	}
}