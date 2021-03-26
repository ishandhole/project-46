const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;



function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(1000,600);
  

  square1 = new Square(40,550,40,40);

  obstacle1 = new Obstacle(100,100,1620,20);
  obstacle2 = new Obstacle(10,350,20,480)
  obstacle3 = new Obstacle(900,350,20,480)
  obstacle4 = new Obstacle(200,580,1380,20)

  ball1 = new Ball(800,500,30);

  
  obstacle5 = new Obstacle(815,500,150,10)
  obstacle6 = new Obstacle(700,550,10,40)
  obstacle7 = new Obstacle(700,210,10,200)
  obstacle8 = new Obstacle(95,525,150,10) 
  obstacle9 = new Obstacle(200,580,1380,20)
}

function draw() {
  background(0);  
  Engine.update(engine);


  square1.display()
  obstacle1.display()
  obstacle2.display()
  obstacle3.display()
  obstacle4.display()
  obstacle5.display()
  obstacle6.display()
  obstacle7.display()
  obstacle8.display()
  ball1.display()
}