var starImg,bgImg;
var star, starBody;
//criar variável para sprite de fada e imgFada
var fada, fadaImg, world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    //carregar animação de fada 
    fadaImg = loadImage("images/fairyImage1.png");

}

function setup() {
    createCanvas(800, 750);
    background(bgImg);

    //criar sprite de fada e adicionar animação para fada
    fada = createSprite(50,370, 50, 50);
	fada.addImage(fadaImg);
	fada.scale = 0.2;

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 ,{restitution:0.5, isStatic:false});
	World.add(world, starBody);
    
	Engine.run(engine);
}

function draw(){

    if(star.y > 370 && star.body.position.y > 370){
        Matter.Body.setStatic(starBody,true);
    }

    if(keyDown(LEFT_ARROW)){
       fada.velocityX = -4;
    }

    if(keyDown(RIGHT_ARROW)){
        fada.velocityX = 4;
     }


     fada.display();

     drawSprites();
}
