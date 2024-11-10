class Magnet {
  constructor(x, y, polarity) {
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.mass = 1;
    this.polarity = polarity; // 양수면 양전하, 음수면 음전하
    this.radius = 16; // 원의 반지름 설정
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  calculateMagneticForce(other) {
    let force = p5.Vector.sub(other.position, this.position);
    let distance = force.mag();
    distance = constrain(distance, 5, 50); // 너무 가까운 거리는 제한
    force.normalize();

    let strength = (this.polarity * other.polarity * 10) / (distance * distance);
    force.mult(strength);

    return force;
  }

  // 두 공이 가까워지지 않도록 밀어내는 반발력 계산
  calculateRepulsionForce(other) {
    let force = p5.Vector.sub(this.position, other.position);
    let distance = force.mag();
    
    // 일정 거리 이내로 가까워지면 반발력 발생
    let minDistance = this.radius * 2; // 두 공의 반지름을 합친 거리 이상으로 유지
    if (distance < minDistance) {
      force.normalize();
      let strength = (minDistance - distance) * 0.1; // 반발력의 크기
      force.mult(strength); // 반발력 적용
    } else {
      force.set(0, 0); // 가까워지지 않으면 반발력이 0
    }

    return force;
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  checkEdges() {
    if (this.position.x > width - this.radius) {
      this.position.x = width - this.radius;
      this.velocity.x *= -1;
    } else if (this.position.x < this.radius) {
      this.position.x = this.radius;
      this.velocity.x *= -1;
    }

    if (this.position.y > height - this.radius) {
      this.position.y = height - this.radius;
      this.velocity.y *= -1;
    } else if (this.position.y < this.radius) {
      this.position.y = this.radius;
      this.velocity.y *= -1;
    }
  }

  display() {
    stroke(0);
    fill(this.polarity > 0 ? 'blue' : 'red');
    ellipse(this.position.x, this.position.y, this.radius * 2, this.radius * 2);
  }
}
