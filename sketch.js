let magnetA, magnetB;

function setup() {
  createCanvas(640, 480);
  magnetA = new Magnet(width / 3, height / 2, 1);
  magnetB = new Magnet((2 * width) / 3, height / 2, 1);
}

function draw() {
  background(255);

  let force = magnetA.calculateMagneticForce(magnetB);
  magnetA.applyForce(force);
  magnetB.applyForce(force.mult(-1));

  magnetA.update();
  magnetB.update();

  // 경계 체크
  magnetA.checkEdges();
  magnetB.checkEdges();

  magnetA.display();
  magnetB.display();
}
