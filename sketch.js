
const Bodies =Matter.Bodies;
const World =Matter.World;
const Engine =Matter.Engine;
const Constraint = Matter.Constraint
var engine,world;




function setup() {
  createCanvas(3000,800);
 // createSprite(400, 200, 50, 50);


engine=Engine.create();
//my world is my engine's world
world=engine.world;
Engine.run(engine);

ball1=new Ball(300,400,60);
//String1=new Rope(ball1.body,{x:50,y:50});
 rope1 = new Rope(ball1.body,{x:400,y:50});
ground=new Ground(1500,700,width,20);
box1=new Box(900,100,70,70);
box2=new Box(900,100,70,70);
box3=new Box(900,100,70,70);
box4=new Box(900,100,70,70);
box5=new Box(900,100,70,70);
box6=new Box(900,100,70,70);
box7=new Box(900,100,70,70);
box8=new Box(900,100,70,70);
box9=new Box(900,100,70,70);
box10=new Box(900,100,70,70);
box11=new Box(800,100,70,70);
box12=new Box(800,100,70,70);
box13=new Box(800,100,70,70);
box14=new Box(800,100,70,70);
box15=new Box(800,100,70,70);
box16=new Box(800,100,70,70);
box17=new Box(800,100,70,70);
box18=new Box(800,100,70,70);
box19=new Box(800,100,70,70);
box20=new Box(800,100,70,70);




}

function draw() {
  background(255,255,255); 
  
ball1.display();
//String1.display();
rope1.display();
  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();





}
function mouseDragged(){


  Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
}
