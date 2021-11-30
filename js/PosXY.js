class PosXY {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  plus(pos) {
    return new PosXY(this.x + pos.x, this.y + pos.y);
  }
  times(factor) {
    return new PosXY(this.x * factor, this.y * factor);
  }
}
