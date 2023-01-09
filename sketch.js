var box1;

function setup() 
{
  createCanvas(400, 400);
  
  box1 = new Box(200,200,70,70,3,3);
}

function draw() 
{
  background(220);

  box1.show();

  box1.move();

  box1.moveUp();

}

