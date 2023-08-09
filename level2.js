function level2() {
    border1 = createSprite(10,300,780,5)
    border2 = createSprite(10,50,780,5)
    obs1 = createSprite(25,125,20,20)
    obs1.shapeColor = "Red"
    obs1.velocityX = 7
    obs2 = createSprite(25,278,20,20)
    obs2.shapeColor = "Red"
    obs2.velocityX = 7
    border3 = createSprite(0,175,100,5)
    border4 = createSprite(0,235,100,5)
    player = createSprite(25,208,25,25)   
    player.shapeColor = "Blue"
    obs3 = createSprite
    checkpoint = createSprite(385,200,20,20)
    checkpoint.shapeColor = "Green"
    
}

function displayLevel2() {
    image(level2bg,0,0,400,400);
    if(keyDown("RIGHT")){
        player.x = player.x+7;
      }
      if(keyDown("LEFT")){
        player.x = player.x-7;
      }
      if(keyDown("UP")){
        player.y = player.y-7;
      }
      if(keyDown("Down")){
        player.y = player.y+7;
      }
    if(player.isTouching(checkpoint))
    {
        player.destroy();
        border1.destroy();
        border2.destroy();
        border3.destroy();
        border4.destroy();
        obs1.destroy();
        obs2.destroy();
      /*  obs3.destroy();
        obs4.destroy();
        obs5.destroy();
        obs6.destroy();
        obs7.destroy();
        obs8.destroy();
        obs9.destroy();
        obs10.destroy();
        obs11.destroy(); 
        wall5.destroy();
        wall6.destroy();
        wall7.destroy();*/
        checkpoint.destroy();
      gameState = 0;   
    }
}
