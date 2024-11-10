let magnetA, magnetB;

function setup() {
  createCanvas(640, 480);
  magnetA = new Magnet(width / 3, height / 2, 1);     // 양성 공 (파란색)
  magnetB = new Magnet((2 * width) / 3, height / 2, -1); // 음성 공 (빨간색)
}

function draw() {
  background(255);

  // 자력 계산 및 적용
  let magneticForce = magnetA.calculateMagneticForce(magnetB);
  magnetA.applyForce(magneticForce);
  magnetB.applyForce(magneticForce.mult(-1));

  // 반발력 계산 및 적용
  let repulsionForce = magnetA.calculateRepulsionForce(magnetB);
  magnetA.applyForce(repulsionForce);
  magnetB.applyForce(repulsionForce.mult(-1));

  // 각 공의 위치와 속도 업데이트
  magnetA.update();
  magnetB.update();

  // 경계 체크
  magnetA.checkEdges();
  magnetB.checkEdges();

  // 공 그리기
  magnetA.display();
  magnetB.display();
}
