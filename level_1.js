function level1(){
    border1 = createSprite(width/2,height-90,width-30,5)
    border1.visible = true;
    border2 = createSprite(width/2,90,width-30,5)
    border2.visible = true;
    obs1 = createSprite(100,125,30,30)
    obs1.shapeColor = "Red"
    obs1.velocityX = 12
    obs2 = createSprite(100,278,20,20)
    obs2.shapeColor = "Red"
    obs2.velocityX = 12
    border3 = createSprite(145,height/2-50,100,5)
    border4 = createSprite(145,height/2+50,100,5)
    player = createSprite(145,height/2,50,50)
player.addImage(PlayerImg)
player.scale = 0.09;
    obs3 = createSprite(116,200,10,130)
    obs4 = createSprite(200,180,80,10)
    obs5 = createSprite(200,230,80,10)
    obs6 = createSprite(196,140,10,75)
    obs7 = createSprite(196,150,10,75)
    obs8 = createSprite(305,196,10,75)
    wall5 = createSprite(392,184,30,5)
    wall6 = createSprite(392,220,30,5)
    obs9 = createSprite(257,110,20,20)
    obs10 = createSprite(376,145,5,85)
    obs11 = createSprite(376,258,5,80)
    obs9.shapeColor = "red"
    obs9.velocityY = 10
    count = 0;
    checkpoint = createSprite(385,200,20,20)
    checkpoint.shapeColor = "Green"
    player.shapeColor = "Blue"
    wall7 = createSprite(24,197,5,200)
    wall7.visible = false;
}


function displayLevel1(){
  image(level1bg,0,50,width,height-100)
    text("Deaths: " + count,150,80);
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
    
    player.bounceOff(border1)
    player.bounceOff(border2)
    player.bounceOff(border3)
    player.bounceOff(border4)
    player.bounceOff(obs3)
    player.bounceOff(obs4)
    player.bounceOff(obs5)
    player.bounceOff(obs6)
    player.bounceOff(obs7)
    player.bounceOff(obs8)
    player.bounceOff(wall5)
    player.bounceOff(wall6)
    obs9.bounceOff(border2)
    obs9.bounceOff(border1)
    obs1.bounceOff(obs6)
    obs1.bounceOff(wall7)
    obs2.bounceOff(wall7)
    obs2.bounceOff(obs7)
    player.bounceOff(wall7)
    player.bounceOff(obs10)
    player.bounceOff(obs11)
    if(player.isTouching(obs9)||
      player.isTouching(obs1)||
       player.isTouching(obs2))
    {player.x=145
    player.y=height/2
    count = count+1
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
        obs3.destroy();
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
        wall7.destroy();
        checkpoint.destroy();
      gameState = 0;
              
        
    }
}