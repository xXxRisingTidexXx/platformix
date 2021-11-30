const SWING_SPEED = 5;
const SWING_DIST = 0.1;
const SCALE = 20;
const PLAYER_X_SPEED = 7;
const GRAVITY = 30;
const JUMP_SPEED = 105;
const ARROW_KEYS = trackKeys(["ArrowLeft", "ArrowRight", "ArrowUp"]);

const COIN = "coin";
const LAVA = "lava";
const LOST = "lost";
const WALL = "wall";
const WON = "won";
const EMPTY = "empty";
const PLAYER = "player";
const PLAYING = "playing";

const DIV = "div";
const SIZE_UNITS = "px";

const SUPPORTED_CHARS = {
  ".": EMPTY,
  "#": WALL,
  "+": LAVA,
  "@": Player,
  "o": Coin,
  "=": Lava,
  "v": Lava
};
