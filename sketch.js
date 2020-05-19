// Jaeyong Lee
// Track Mouse in 4 Squares
// CS099
// Spring 2020

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  push(); strokeWeight(15);
  rect(0, 0, 400, 400);
  pop();
  push();strokeWeight(10);
  line(200, 0, 200, 400);
  line(0, 200, 400, 200);
  pop();
  
  // top left
  if (0<= mouseX && mouseX <= 200 && 0<= mouseY && mouseY <= 200){
    push();
    fill(255);
       arc(100, 100, 100, 100, 0, PI, CHORD);
    fill('RED');
       arc(100, 100, 100, 100, PI, 0, CHORD);
    pop();
      }
  // top right
  else if(200 <= mouseX && mouseX <= 400 && 0 <= mouseY  && mouseY <= 200){
     push();
    fill(255);
       arc(300, 100, 100, 100, HALF_PI, PI+ HALF_PI, CHORD);
    fill('blue');
       arc(300, 100, 100, 100,  PI+ HALF_PI, HALF_PI, CHORD);
    pop();
     }
  // bottom right
  else if(200 <= mouseX && mouseX<=400 && 200 <= mouseY && mouseY <= 400){
    push();
    fill('green');
       arc(300, 300, 100, 100, 0, PI, CHORD);
    fill(255);
       arc(300, 300, 100, 100, PI, 0, CHORD);
    pop();
          }
  // bottom left
  else if (mouseX>=0 && mouseX <= 200 && 200 <= mouseY && mouseY <= 400){
           push();
    fill('yellow');
       arc(100, 300, 100, 100, HALF_PI, PI+ HALF_PI, CHORD);
    fill(255);
       arc(100, 300, 100, 100,  PI+ HALF_PI, HALF_PI, CHORD);
    pop();
           }
  else{
  }
}