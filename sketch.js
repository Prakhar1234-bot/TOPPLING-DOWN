const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var options ={
        isStatic: true
    }

   

    ground = Bodies.rectangle(200,380,400,30,options);
    World.add(world,ground);

    
    box1 = new Box(210,250,50,50);
    box2 = new Box(250,150,50,50);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,30);

    box1.display();
    box2.display();
}