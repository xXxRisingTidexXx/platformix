// Сутність, при потраплянні до якої гравець змушений розпочинати проходження рівня заново.
class Lava {
  // Ініціалізація у вказаній позиції з опціями текучості.
  constructor(pos, speed, resetPos) {
    this.pos = pos;
    this.speed = speed;
    this.resetPos = resetPos;
  }

  // Розміщення комірки з (текучою чи статичною) лавою у заданій позиції.
  static create(pos, ch) {
    if (ch === "=") {
      return new Lava(pos, new Position(2, 0));
    } else if (ch === "v") {
      return new Lava(pos, new Position(0, 3), pos);
    }
  }

  // Повертає тип сутності.
  get type() {
    return LAVA;
  }
}

// Стандартний розмір об'єкта.
Lava.prototype.size = new Position(1, 1);

// Обрахунок зіткнення з гравцем.
Lava.prototype.collide = function (state) {
  return new State(state.level, state.actors, LOST);
};

// Перемалювання комірки лави внаслідок опадання (лише для текучих блоків).
Lava.prototype.update = function (time, state) {
  let newPos = this.pos.plus(this.speed.times(time));
  if (!state.level.touches(newPos, this.size, WALL)) {
    return new Lava(newPos, this.speed, this.resetPos);
  } else if (this.resetPos) {
    return new Lava(this.resetPos, this.speed, this.resetPos);
  } else {
    return new Lava(this.pos, this.speed.times(-1));
  }
};
