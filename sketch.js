
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var groundleft;
var groundright;
var ground1;
var ground2;
var ground3;
var ground4;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//crear los cuerpos aquí.

var ball_options ={
	isStatic : false,
	restitution : 0.3,
	friction : 0,
	density : 1.2
    }
		ball = Bodies.circle (100,200,20,ball_options);
		World.add(world,ball);

	Engine.run(engine);
	
	
	var ground_options ={
		isStatic: true
	  };

	ground = Bodies.rectangle(width/2,670,width,20,ground_options);
	World.add(world,ground);

    var groundleft_options ={
		isStatic: true
	 	 };
		groundleft = Bodies.rectangle(600,650,20,120,ground_options);
		World.add(world,groundleft);

	var groundright_options ={
		isStatic: true
	 	 };
     	groundright = Bodies.rectangle(730,650,20,120,ground_options);
	 	 World.add(world,groundright);

		  var ground1_options ={
			isStatic: true
			  };
			 ground1 = Bodies.rectangle(800,250,20,420,ground_options);
			  World.add(world,ground1);
			  var ground2_options ={
				isStatic: true
				  };
				 ground2 = Bodies.rectangle(10,250,20,420,ground_options);
				  World.add(world,ground2);
				  var ground3_options ={
					isStatic: true
					  };
					 ground3 = Bodies.rectangle(300,10,10,20,ground_options);
					  World.add(world,ground3);
  
}




function draw() {


	rectMode(CENTER);
  background(0);
  text("Perdon profesora por preguntar a altas horas de la noche :(",40,50);
  text ("Anota y gana",40, 170)
  textSize(50),
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,870,20);
  rect(groundleft.position.x,groundleft.position.y,20,120);
  rect(groundright.position.x,groundright.position.y,20,120);
  rect(ground1.position.x,ground1.position.y,20,820)
  rect(ground2.position.x,ground2.position.y,20,820)
  rect(ground3.position.x,ground3.position.y,820,20)
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball, {x:0,y:0} , {x:30,y:20} );
}
}


