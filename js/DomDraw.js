// items display
class DomDraw {
  constructor(parent, level) {
    this.dom = elt(DIV, {class: "game"}, drawGrid(level));
    this.actorLayer = null;
    parent.appendChild(this.dom);
  }
  clear() {
    this.dom.remove();
  }
}
DomDraw.prototype.syncState = function(state) {
  if (this.actorLayer) {
    this.actorLayer.remove();
  }
  this.actorLayer = drawActors(state.actors);
  this.dom.appendChild(this.actorLayer);
  this.dom.className = `game ${state.status}`;
};
