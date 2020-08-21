
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Const = Matter.Constraint


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground= new Ground(400,160,400,20)
	ball1= new PaperClass(400,400,30,PI/2)
	ball2= new PaperClass(340,400,30,PI/2)
	ball3= new PaperClass(460,400,30,PI/2)
	ball4= new PaperClass(280,400,30,PI/2)
	ball5= new PaperClass(520,400,30,PI/2)

	chain1= new Chain (ball1.body,ground.body,0,0)
	chain2= new Chain (ball2.body,ground.body,-60,0)
	chain3= new Chain (ball3.body,ground.body,60,0)
	chain4= new Chain (ball4.body,ground.body,-60*2,0)
	chain5= new Chain (ball5.body,ground.body,120,0)


	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background("grey");
  
  
  ground.display()
  ball1.display ()
  ball2.display ()
  ball3.display ()
  ball4.display ()
  ball5.display ()

  chain1.display ()
  chain2.display ()
  chain3.display ()
  chain4.display ()
  chain5.display ()

  drawSprites()
}

function keyPressed(){
	if(keyCode===32){
		console.log("hello")
		Body.applyForce(ball5.body,ball5.body.position,{x:-155,y:15})
	}
}



