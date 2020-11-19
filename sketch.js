var wall, car;
var speed,weight;


function setup() {
  createCanvas(800,400);
  car = createSprite(400,200,40,40);
  

  wall = createSprite(740,200,40,height/2);

  speed  = random(55,90);
  weight  = random(400,1500);
}

function draw() {
  background("black");  
  car.velocityX = speed;

  if(car.isTouching(wall)){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180){
        car.shapeColor="red";
    }
    if(deformation<180 && deformation>100){
      car.shapeColor="yellow";
  }
  if(deformation<100){
    car.shapeColor="lime";
    
}

  }

  console.log(deformation);


  drawSprites();
} 