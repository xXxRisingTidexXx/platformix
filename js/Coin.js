// Монетки, яку гравець повинен зібрати для проходження рівня.
class Coin {ґ
  // Ініціалізація в заданій локації з коливанням.
  constructor(pos, basePos, swing) {
    this.pos = pos;
    this.basePos = basePos;
    this.swing = swing;
  }

  // Розміщення монетки над вказаною локацією для левітування.
  static create(pos) {
    let basePos = pos.plus(new Position(0.2, 0.1));
    return new Coin(basePos, basePos, 0);
  }

  // Повертає тип сутності.
  get type() {
    return COIN;
  }
}

// Стандартний розмір об'єкта.
Coin.prototype.size = new Position(0.5, 0.5);

// Обрахунок зіткнення з гравцем.
Coin.prototype.collide = function (state) {
  let filtered = state.actors.filter(e => e !== this);
  let status = state.status;
  if (!filtered.some(e => e.type === COIN)) {
    status = WON;
  }
  return new State(state.level, filtered, status);
};

// Перемалювання внаслідок коливання згори донизу.
Coin.prototype.update = function (time) {
  let swing = this.swing + time * SWING_SPEED;
  let swingPos = Math.sin(swing) * SWING_DIST;
  return new Coin(
    this.basePos.plus(new Position(0, swingPos)),
    this.basePos, swing
  );
};
