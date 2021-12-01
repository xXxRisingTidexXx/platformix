// Об'єкт, який утримує відомості про наповнення рівня - гравця та спрайти.
class State {
  // Ініціалізація рівня зі статусом гри.
  constructor(level, actors, status) {
    this.level = level;
    this.actors = actors;
    this.status = status;
  }

  // На початку людина перебуває в стані гри.
  static start(level) {
    return new State(level, level.startActors, PLAYING);
  }

  // Повертає вказівник на об'єкт гравця.
  get player() {
    return this.actors.find(e => e.type === PLAYER);
  }
}

// Здійснює перерахунок взаємодій на ігровому полі. Сюди входить перевірка на проходження / провал
// рівня та зіткнення рухомих об'єктів з рештою сутностей. Наприклад, при стіканні лави.
State.prototype.update = function (time, keys) {
  let actors = this.actors.map(e => e.update(time, this, keys));
  let newState = new State(this.level, actors, this.status);
  let player = newState.player;
  if (newState.status !== PLAYING) {
    return newState;
  }
  if (this.level.touches(player.pos, player.size, LAVA)) {
    audioPlayerInterval(LAVA_URL);
    return new State(this.level, actors, LOST);
  }
  for (let actor of actors) {
    if (actor !== player && overlap(actor, player)) {
      newState = actor.collide(newState);
    }
  }
  return newState;
};
