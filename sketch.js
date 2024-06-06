function setup() {
    createCanvas(600, 400);
    background("green");
  }
  
  function draw() {
    stroke("yellow");
    fill("red");
    
    if(mouseIsPressed){
    rect( mouseX, mouseY, 15, 30);
    }
  }