const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies
const Body = Matter.Body;
const Constraint = Matter.Constraint;

let plinkos = [];
let plinkos2 = [];
let plinkos3 = [];
let plinkos4 = [];
let seperator = [];
let pa= [];
var seperatorHeight = 400;
var i=0;
var score = 0;
var gameState=1;
var play =1;
var end = 0;
function setup() {
  createCanvas(600,620);
  engine = Engine.create();
  world = engine.world;
  wall = new Wall(290,605,560,8);
  for ( var j = 40; j <= width; j=j+40)
 {
    plinkos.push(new Plinko(j,55,5));
    plinkos2.push(new Plinko(j-20,105,5));
    plinkos3.push(new Plinko(j,155,5));
    plinkos4.push(new Plinko(j-20,205,5));
 }

   for(var k =10; k <= width; k = k + 80)
    {
    seperator.push(new Seperators(k,500,5,220));
      console.log(k)
   }
  
   

}
function mouseClicked()
  {
   pa.push(new Partical(mouseX,10,5));
 }



function draw() {
  background(0,0,0);


  Engine.update(engine);
        drawSprites();
        fill("white")

if (gameState==play){


         for ( var j = 0; j <=14; j++)
  {
    plinkos[j].display();
    plinkos2[j].display();
    plinkos3[j].display();
    plinkos4[j].display();

  }

  for ( var j = 0; j <=7; j++)
  {
    seperator[j].display();

  }

  for ( var h = 0; h <pa.length; h++)
  {
    //pa[i].update();
   // pa[h].display();
pa[h].display();

    if (pa[h].body.position.x>10&&pa[h].body.position.x<90&&pa[h].body.position.y>500&&pa[h].body.position.y<510){
      score=score+500;
    }
    
    if (pa[h].body.position.x>90&&pa[h].body.position.x<170&&pa[h].body.position.y>500&&pa[h].body.position.y<510){
      score=score+300;
    }    
    if (pa[h].body.position.x>170&&pa[h].body.position.x<250&&pa[h].body.position.y>500&&pa[h].body.position.y<510){
      score=score+200;
    }    
    if (pa[h].body.position.x>250&&pa[h].body.position.x<330&&pa[h].body.position.y>500&&pa[h].body.position.y<510){
      score=score+100;
    }    
    if (pa[h].body.position.x>330&&pa[h].body.position.x<410&&pa[h].body.position.y>500&&pa[h].body.position.y<510){
      score=score+200;
    }    
    if (pa[h].body.position.x>410&&pa[h].body.position.x<500&&pa[h].body.position.y>500&&pa[h].body.position.y<510){
      score=score+300;
    }    
    if (pa[h].body.position.x>500&&pa[h].body.position.x<570&&pa[h].body.position.y>500&&pa[h].body.position.y<510){
      score=score+500;
    }
    if (pa.length==6){
      gameState=0
    }
    text("Score: "+ score,100,30);
  }

  wall.display();
 // if ((pa.x>150&&pa.x<430)){
 // }
 // console.log(pa.body.pos.x)

 text("Score: "+ score,100,30);
 text("500",40,500);
 text("300",120,500);
 text("200",200,500);
 text("100",280,500);
 text("200",360,500);
 text("300",440,500);
 text("500",520,500);
 //console.log(pa.length)
 
}

if( gameState==end){
  textSize(23)
  text ("game over",300,300)
  text("Score: "+ score,300,200);

}
}

