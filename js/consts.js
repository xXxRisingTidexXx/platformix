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
const CLICK_URL = "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-sound-ex-machina/sound_ex_machina_Button_Click.mp3";
const LEVEL_URL = "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-35448/zapsplat_multimedia_game_sound_coins_collect_several_at_once_001_40812.mp3";
const COMPLETION_URL = "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-epic-stock-media/esm_8_bit_small_win_arcade_80s_simple_alert_notification_game.mp3";
const LAVA_URL = "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-14566/zapsplat_nature_lava_flow_17940.mp3";
