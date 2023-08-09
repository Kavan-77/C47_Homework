var border1,border2,border3,border4;
var obs,obs2,obs3,obs4,obs5,obs6,obs7,obs8,obs9,obs10,obs11;
var player,wall5,wall6,wall7,count,checkpoint;
var levelNumber = 1
var levelUpImg;
var gameState = 1;
var level1bg;
var level2bg;
var level3bg;
var PlayerImg;


function preload (){
  levelUpImg = loadImage("levelup.png")
  level1bg = loadImage("Level 1 backround.jpg")
  level2bg = loadImage("Level 2 backround.jpg")
  level3bg = loadImage("Level 3 backround.jpg")
  winningImg = loadImage("You Win.jpg")
  PlayerImg = loadImage("Player.png")
}
function setup () {
  createCanvas(windowWidth,windowHeight)
  setLevel();
}

function draw() {
  background("white")
 if (gameState===1){

 
  if(levelNumber === 1){
    displayLevel1();
  }
  if(levelNumber === 2){
    displayLevel2();
  }
  if(levelNumber === 3){
    displayLevel3();
  }
  }
  else {
    if (gameState===0) {
      levelUp();
    }
  } 

   if (gameState===2) {
    image (winningImg,0,0,400,400)
   }

  drawSprites()
}

function keyPressed() {
  if (keyCode===32 && gameState===0){
    levelNumber += 1;
    gameState = 1;
    setLevel();
  }
}

function setLevel() {
  if(levelNumber === 1){
    level1();
  }
  if(levelNumber === 2){
    level2();
  }
  if(levelNumber === 3){
    level3();
  }
}

function levelUp() {
  image(levelUpImg,0,0,400,400);
  fill(255)
  textSize(20)
  text("Press Space To Continue!!!",100,300)

}