class State {
  constructor(level, actors, status) {
    this.level = level;
    this.actors = actors;
    this.status = status;
  }

  static start(level) {
    return new State(level, level.startActors, PLAYING);
  }

  get player() {
    return this.actors.find(e => e.type === PLAYER);
  }
}

State.prototype.update = function (time, keys) {
  let actors = this.actors.map(e => e.update(time, this, keys));
  let newState = new State(this.level, actors, this.status);
  let player = newState.player;
  if (newState.status !== PLAYING) {
    return newState;
  }
  if (this.level.touches(player.pos, player.size, LAVA)) {
    audioPlayerInterval("https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-14566/zapsplat_nature_lava_flow_17940.mp3");
    return new State(this.level, actors, LOST);
  }
  for (let actor of actors) {
    if (actor !== player && overlap(actor, player)) {
      newState = actor.collide(newState);
    }
  }
  return newState;
};
