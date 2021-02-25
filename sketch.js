const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var myengine, myworld;
var ground;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
   myengine = Engine.create();
   myworld = myengine.world;

  

   var ground_option ={
    isStatic: true
   }

   
   
   ground = Bodies.rectangle(200,390,400,20,ground_option);
   World.add(myworld,ground);
   
   var ball_option ={
    restitution: 1
}

   ball = Bodies.circle(200,220,20,ball_option);
   World.add(myworld,ball);

 

   console.log(ball);
   console.log(ground);
 
}

function draw(){
    background(0);

    Engine.update(myengine);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20)
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
   
}
