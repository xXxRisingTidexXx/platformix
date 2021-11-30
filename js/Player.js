class Player {
  constructor(pos, speed) {
    this.pos = pos;
    this.speed = speed;
  }
  static create(pos) {
    return new Player(pos.plus(new Position(0, -0.5)), new Position(0, 0));
  }
  get type() {
    return PLAYER;
  }
}
// initial size
Player.prototype.size = new Position(0.8, 1);
// updating movement
Player.prototype.update = function(time, state, keys) {
  let xSpeed = 0;
  if (keys.ArrowLeft) {
    xSpeed -= PLAYER_X_SPEED;
  }
  if (keys.ArrowRight) {
    xSpeed += PLAYER_X_SPEED;
  }
  let pos = this.pos;
  let movedX = pos.plus(new Position(xSpeed * time, 0));
  if (!state.level.touches(movedX, this.size, WALL)) {
    pos = movedX;
  }
  let ySpeed = this.speed.y + time * GRAVITY;
  let movedY = pos.plus(new Position(0, ySpeed * time));
  if (!state.level.touches(movedY, this.size, WALL)) {
    pos = movedY;
  } else if (keys.ArrowUp && ySpeed > 0) {
    ySpeed = -JUMP_SPEED;
  } else {
    ySpeed = 0;
  }
  return new Player(pos, new Position(xSpeed, ySpeed));
};
