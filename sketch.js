var helicopterIMG, helicopter, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}


	function setup(){
		var canvas = createCanvas(800,700);
		
		engine = Engine.create();
		world = engine.world;

		packageSprite=createSprite(width/2, 80, 10,10);
		packageSprite.addImage(packageIMG)
		packageSprite.scale=0.2
	
		helicopter=createSprite(5,200, 10,10);
		shapeColor="lime";

		groundSprite=createSprite(width/2, height-35, width,10);
		groundSprite.shapeColor=color(255)
		
		package1 = new Package(width/2,80,5,10);
		package2 = new Package(width/2,80,10,10);

		ground1 = new Ground(width/2,height-35,width,10)
		
	}
	


function draw() {
  	rectMode(CENTER);
	  background(mouseX,mouseY,mouseX);
	  createEdgeSprites();
	  Engine.update(engine);
	  console.log(package2.body.position.x);
	  console.log(package2.body.position.y);
	  console.log(package2.body.angle);
	  package1.display();
	  package2.display();
	  ground1.display();
	  
}
function keyPressed(){
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody,false)
	}
}