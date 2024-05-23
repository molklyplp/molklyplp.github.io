function setup() {
 createCanvas(400, 400,WEBGL);
 rotateX(PI/4)
 rotateY(PI/4)
 normalMaterial();
box(200,200,200)
}
function draw() {
   background('black')
  push();
 rotateZ(frameCount * 0.05);
 rotateX(frameCount * 0.03);
 rotateY(frameCount * 0.05);
box(200,200,200)
}



