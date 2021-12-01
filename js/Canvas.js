// Вузол DOM-дерева, в якому відображається ігрові об'єкти і здійснюється логіка.
class Canvas {
  // Ініціалізація поля.
  constructor(parent, level) {
    this.dom = elt(DIV, {class: "game"}, drawGrid(level));
    this.actorLayer = null;
    parent.appendChild(this.dom);
  }

  // Видалення ігрвоого поля.
  clear() {
    this.dom.remove();
  }
}

// Перемальовує спрайти (активні об'єкти) на ігровому полі.
Canvas.prototype.syncState = function (state) {
  if (this.actorLayer) {
    this.actorLayer.remove();
  }
  this.actorLayer = drawActors(state.actors);
  this.dom.appendChild(this.actorLayer);
  this.dom.className = `game ${state.status}`;
};
