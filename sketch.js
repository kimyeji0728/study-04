let magnetA, magnetB;

function setup() {
  createCanvas(640, 480);
  // 두 개의 공을 생성하고 초기 위치와 극성을 설정
  magnetA = new Magnet(width / 3, height / 2, 1);    // 양성 공
  magnetB = new Magnet((2 * width) / 3, height / 2, 1); // 같은 극성의 양성 공
}

function draw() {
  background(255);

  // 두 공 사이의 자력 계산 및 적용
  let force = magnetA.calculateMagneticForce(magnetB);
  magnetA.applyForce(force);
  magnetB.applyForce(force.mult(-1)); // 반대 방향의 힘을 다른 공에 적용

  // 각 공의 위치와 속도 업데이트
  magnetA.update();
  magnetB.update();

  // 공 표시
  magnetA.display();
  magnetB.display();
}
