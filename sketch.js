var bg, bgImage;
var cat, catImage;
var mouse, mouseImage;
var catAnim, mouseAnim;
var catEndImg, mouseEndImg;

function preload() {
    //load the images here
    bgImage = loadImage("images/garden.png");
    catImage =loadAnimation("images/cat1.png");
    mouseImage =loadAnimation("images/mouse1.png");
    catAnim = loadAnimation("images/cat2.png","images/cat3.png");
    mouseAnim = loadAnimation("images/mouse2.png","images/mouse3.png");
    catEndImg = loadAnimation("images/cat4.png");
    mouseEndImg = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //Creating the background
    bg = createSprite(500,400,1000,800);
    bg.addImage("bgPic",bgImage);

    cat = createSprite(720,600,20,20);
    cat.addAnimation("catAnim",catImage);
    cat.scale = 0.13;


    mouse = createSprite(130,610,20,20);
    mouse.addAnimation("mouseAnim",mouseImage);
    mouse.scale = 0.13;
    

}

function draw() {

    background(255);

    //Code to Detect the collision between the cat and the mouse
    if(cat.x - mouse.x < cat.width/4 + mouse.width/4)
        {
            cat.velocityX = 0;
           cat.addAnimation("catFinalImg",catEndImg);
           cat.changeAnimation("catFinalImg");
           mouse.addAnimation("mouseFinalImg",mouseEndImg);
           mouse.changeAnimation("mouseFinalImg");
    
        }

    drawSprites();
}


function keyPressed(){

if(keyDown("LEFT_ARROW")){
mouse.addAnimation("mouseAnimation",mouseAnim);
mouse.frameDelay = 30;
mouse.changeAnimation("mouseAnimation")

cat.addAnimation("catAnimation",catAnim);
cat.changeAnimation("catAnimation");
cat.velocityX = -5;
}
}
