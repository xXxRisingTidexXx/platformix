function runLevel(level, Display) {
  let display = new Display(document.body, level);
  let state = State.start(level);
  let ending = 1;
  return new Promise(resolve => {
    runAnimation(time => {
      state = state.update(time, ARROW_KEYS);
      display.syncState(state);
      if (state.status === PLAYING) {
        return true;
      } else if (ending > 0) {
        ending -= time;
        return true;
      } else {
        display.clear();
        resolve(state.status);
        return false;
      }
    });
  });
}

async function runGame(plans, drawing) {
  for (let i = 0; i < plans.length;) {
    let status = await runLevel(new Level(plans[i]), drawing);
    if (status === WON) {
      audioPlayerInterval("https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-35448/zapsplat_multimedia_game_sound_coins_collect_several_at_once_001_40812.mp3");
      i++;
    }
  }
  audioPlayer("https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-epic-stock-media/esm_8_bit_small_win_arcade_80s_simple_alert_notification_game.mp3");
  $('#modal').modal('show');
}

function runAnimation(frameFunc) {
  let lastTime = null;

  function frame(time) {
    if (lastTime != null) {
      let timeStep = Math.min(time - lastTime, 100) / 1000;
      if (frameFunc(timeStep) === false) {
        return;
      }
    }
    lastTime = time;
    requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}

function audioPlayerInterval(path) {
  let audio = new Audio(path);
  audio.loop = true;
  audio.play();
  setTimeout(() => audio.pause(), 1500);
}

function audioPlayer(path) {
  new Audio(path).play();
}
