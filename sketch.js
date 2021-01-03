var ground;
var ball2,ballimage;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	ballimage=loadImage("ball2png.png")	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(225)

	ball2=createSprite(width/8, 620, 10,10);
	ball2.addImage(ballimage)
	ball2.scale=0.1

	//ask miss
	//ball2=Matter.Bodies.circle(200, 200, 20);
	//World.add(world, ball2);

	Engine.run(engine);
	ground = Bodies.rectangle(width/2, height-35, width, 10 , {isStatic:true} );
	World.add(world, ground);
   walll= Bodies.rectangle(width/2-30, 550,20,200 , {isStatic:true} );
	World.add(world, walll);
	wallr= Bodies.rectangle(width/2+150, 550,20,200 , {isStatic:true} );
	World.add(world, wallr);
	wallb= Bodies.rectangle(width/1.8, 640,400,100 , {isStatic:true} );
	World.add(world, wallb);
   Engine.run(engine);

   var options={
	isStatic:false,
	restitution:0.3,
	friction:0.5,
	density:1.2

}


}


function draw() {
   rectMode(CENTER);
  background(220);
  rect(wallb.position.x, wallb.position.y, 200,20);
rect(walll.position.x, walll.position.y, 20,200);
rect(wallr.position.x, wallr.position.y, 20,200);

keyPressed();

  drawSprites();

}
function keyPressed(){
		if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball2.body,ball2.body.position,{x:200,y: 200});


		}
}


