const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground,ball;
function setup() {
  createCanvas(800,400);

  engine=Engine.create();
  world=engine.world;
  
  ball=Bodies.circle(200,100,20);
  World.add(world,ball)
  
  var ground_options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,800,20,ground_options);
  World.add(world,ground);
}

function draw() {
  background("black");  
  Engine.update(engine);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
}