var nave, naveImage
var ground, groundImage
var asteroides, asteroideImage, asteroidesgroup
var gameState = "play"


function preload() {

    groundImage = loadImage("espaco-galaxia-fundo.jpg");
    naveImage = loadImage("png-nave.png");
    asteroideImage = loadImage("asteroides.png");

}

function setup() {
    createCanvas(600, 600);
    ground = createSprite(300, 300);
    ground.addImage(groundImage);
    ground.velocityY = 5;


    nave = createSprite(270, 500, 5, 10);
    nave.addImage(naveImage);
    nave.scale = 0.6;

    asteroidesgroup = new Group()

    nave.setCollider("rectangle", 0, 0, 230, 280);



}


function draw() {
    drawSprites()
    if (gameState == "play") {
        edges = createEdgeSprites();
        nave.collide(edges);

        if (ground.y > 500) {
            ground.y = height / 3;
        }

        if (keyDown("left")) {
            nave.x = nave.x - 5

        }

        if (keyDown("right")) {

            nave.x = nave.x + 5

        }


    }

    if (keyDown("up")) {

        nave.y = nave.y - 5




    }

    if (keyDown("down")) {

        nave.y = nave.y + 5
    }

    obstaculos()

    if (asteroidesgroup.isTouching(nave)) {
        nave.destroy()
        gameState = "end"





    }
    if (gameState == "end") {
        background("black")
        stroke("black")
        fill("purple")
        textSize(30)
        text("você perdeu", 200, 200)
        asteroidesgroup.setLifetimeEach(-1);





    }








}




function obstaculos() {

    if (frameCount % 240 == 0) {
        asteroides = createSprite(Math.round(random(120, 400)), -50)
        asteroides.velocityY = +5
        asteroides.scale = 0.3
        asteroides.addImage(asteroideImage)
        asteroidesgroup.add(asteroides)

    }

}