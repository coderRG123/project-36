//Create variables here
var dog, happyDog, Milk;
var database;
var foodS, foodstock;
var food1, food2;
function preload(){
  dog=loadImage("Dog.png");
  happyDog=loadImage("happydog.png");
  Milk=loadImage("Milk.png");

}

function setup() {
 
	createCanvas(500, 500);

  database=firebase.database();
  d=createSprite(250, 300, 20, 20);
  d.scale=(0.1);
  d.addImage(dog);


  




   
  foodstock=database.ref('Food')
  foodstock.on("value", readStock);

  
}


function draw() {  
  background(46, 139, 87);

  drawSprites();
  
  textSize(20);
  fill("black");
  stroke("black");
  text("food remaining="+ foodS, 200, 250);
  //add styles here

  if(keyWentDown(UP_ARROW)){
    d.addImage(happyDog);
    writeStock(foodS);
   foodS-=1;
   if(foodS<1){
    foodS=0;
  }
  food2.y=300;
  food2.x=200;
  }

 for(var x=50; x<450; x=x+40){
  food1=createSprite(x, 100);
  food1.scale=0.08;
  food1.addImage(Milk);
 }

  for(var y=50; y<450; y=y+40){
    food2=createSprite(y, 200);
    food2.scale=0.08;
    food2.addImage(Milk);
    }

    

  
}

function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}


