var ghostImage, gameState = "play";

function preload() {
  ghostImage = loadImage("ghost-standing.png")
  doorImage = loadImage("door.png")
  towerImage = loadImage("tower.png")
  climberImage = loadImage("climber.png")
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300, 300)
  tower.addImage(towerImage)
  tower.velocityY = 1
  ghost = createSprite(300,300)
  ghost.addImage(ghostImage)
  ghost.scale = 0.3               
  doorGroup = new Group();
  climberGroup = new Group();
lineOGroup = new Group();
  
}

function draw() {
  background(0);
 if( gameState === "play"){
  
  if (tower.y > 400) {
    tower.y = 300;
  }
  spawnDoors();
 
if(keyDown("right_arrow")){
  ghost.x = ghost.x + 2
}
  
if(keyDown("left_arrow")){
  ghost.x = ghost.x - 2
}
if(keyDown("space")){
  ghost.velocityY = - 2  
}
ghost.velocityY = ghost.velocityY + 0.5
 if(lineOGroup.isTouching(ghost) || ghost.y > 600 ) {
   ghost.destroy();
  gameState = "end";
 
 }
  drawSprites();
 }
if( gameState === "end"){
textSize(30)
  text("GAMEOVER",200,300)
}

}


function spawnDoors() {

  if (frameCount % 250 === 0) {
    door = createSprite(100, -60)
    door.addImage(doorImage)
    
    climber = createSprite(100, 10)
    climber.addImage(climberImage)
     lineO = createSprite(100, 20)
     lineO.width = climber.width
     lineO.height = 2
     
    door.velocityY = 1
    climber.velocityY = 1
     lineO.velocityY = 1
    
    door.x = Math.round(random(100, 400))
   climber.x = door.x
    lineO.x = door.x
    
    door.lifetime = 700
    climber.lifetime = 700
    lineO.lifetime = 700
    
   doorGroup.add(door);
   climberGroup.add(climber);
    lineOGroup.add(lineO);
    
    ghost.depth = door.depth
    ghost.depth += 1
  }
  
  


}