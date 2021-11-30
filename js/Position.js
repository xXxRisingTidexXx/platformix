class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  plus(pos) {
    return new Position(this.x + pos.x, this.y + pos.y);
  }
  times(factor) {
    return new Position(this.x * factor, this.y * factor);
  }
}
