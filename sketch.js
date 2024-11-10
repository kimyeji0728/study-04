let magnetA, magnetB;

function setup() {
  createCanvas(640, 480);
  // 두 개의 공 객체를 생성하고 초기 위치 설정
  magnetA = new Magnet(width / 3, height / 2, 1);    // 양성 공 (파란색)
  magnetB = new Magnet((2 * width) / 3, height / 2, -1); // 음성 공 (빨간색)
}

function draw() {
  background(255);

  // 공을 화면에 표시
  magnetA.display();
  magnetB.display();
}
