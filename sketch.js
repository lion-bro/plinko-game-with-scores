var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle;
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score = 0;
var count = 0;

var gameState = "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");

  fill("white");
  textSize(25);
  text("Score : "+score,20,30);

  

  fill(0,255,0);

  text("500",25,550);
  text("500",740,550);

  text("400",100,550);
  text("400",660,550);

  text("300",185,550);
  text("300",580,550);

  text("200",260,550);
  text("200",500,550);

  text("100",335,550);
  text("100",420,550);

  Engine.update(engine);
 
  
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
     
  }

  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }

  if(particle !== null){

    particle.display();

    if(particle.body.position.y > 760){

      if(particle.body.position.x < 80){

        score += 500;
        particle = null;

        if(count >= 5){

          gameState = "end";  

        }
      }
    }

  }

  mousePressed();

}

function mousePressed(){
  if(gameState !== "end")
  {
    count++;
    particle = new Particle(mouseX,10,10);
  }
}
