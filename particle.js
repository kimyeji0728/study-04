class Magnet {
  constructor(x, y, polarity) {
    this.position = createVector(x, y);
    this.polarity = polarity; // 양수면 양전하, 음수면 음전하
    this.radius = 16; // 원의 반지름 설정
  }

  display() {
    stroke(0);
    fill(this.polarity > 0 ? 'blue' : 'red'); // 자성에 따라 색상 구분
    ellipse(this.position.x, this.position.y, this.radius * 2, this.radius * 2);
  }
}
