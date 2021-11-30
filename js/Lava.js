class Lava {
  constructor(pos, speed, resetPos) {
    this.pos = pos;
    this.speed = speed;
    this.resetPos = resetPos;
  }
  static create(pos, ch) {
    if (ch === "=") {
      return new Lava(pos, new Position(2, 0));
    } else if (ch === "v") {
      return new Lava(pos, new Position(0, 3), pos);
    }
  }
  get type() {
    return LAVA;
  }
}
// initial size
Lava.prototype.size = new Position(1, 1);
// if actor got
Lava.prototype.collide = function(state) {
  return new State(state.level, state.actors, LOST);
};
// updating movement
Lava.prototype.update = function(time, state) {
  let newPos = this.pos.plus(this.speed.times(time));
  if (!state.level.touches(newPos, this.size, WALL)) {
    return new Lava(newPos, this.speed, this.resetPos);
  } else if (this.resetPos) {
    return new Lava(this.resetPos, this.speed, this.resetPos);
  } else {
    return new Lava(this.pos, this.speed.times(-1));
  }
};
