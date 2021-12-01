// Двовимірна координата чергового об'єкту.
class Position {
  // Ініціалізація абсциси й ординати.
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // Додавання координат.
  plus(pos) {
    return new Position(this.x + pos.x, this.y + pos.y);
  }

  // Масштабування координати.
  times(factor) {
    return new Position(this.x * factor, this.y * factor);
  }
}
