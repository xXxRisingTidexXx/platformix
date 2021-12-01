// Створює DOM-представлення об'єкту з атрибутами та дочірніми вузлами.
function elt(name, attrs, ...children) {
  let dom = document.createElement(name);
  for (let attr of Object.keys(attrs)) {
    dom.setAttribute(attr, attrs[attr]);
  }
  for (let child of children) {
    dom.appendChild(child);
  }
  return dom;
}

// Зображує ігрове поле у вигляді таблиці.
function drawGrid(level) {
  return elt("table", {
    class: "background",
    style: `width: ${level.width * SCALE}${SIZE_UNITS}`
  }, ...level.rows.map(row =>
    elt("tr", {style: `height: ${SCALE}${SIZE_UNITS}`},
      ...row.map(type => elt("td", {class: type})))
  ));
}

// Відмальовує черговий ігровий об'єкт у вигляді div-блоку.
function drawActors(actors) {
  return elt(DIV, {}, ...actors.map(actor => {
    let rect = elt(DIV, {class: `actor ${actor.type}`});
    rect.style.width = `${actor.size.x * SCALE}${SIZE_UNITS}`;
    rect.style.height = `${actor.size.y * SCALE}${SIZE_UNITS}`;
    rect.style.left = `${actor.pos.x * SCALE}${SIZE_UNITS}`;
    rect.style.top = `${actor.pos.y * SCALE}${SIZE_UNITS}`;
    return rect;
  }));
}

// Перевіряє, чи є накладання в заданих прямокутників.
function overlap(a1, a2) {
  return a1.pos.x + a1.size.x > a2.pos.x &&
    a1.pos.x < a2.pos.x + a2.size.x &&
    a1.pos.y + a1.size.y > a2.pos.y &&
    a1.pos.y < a2.pos.y + a2.size.y;
}
