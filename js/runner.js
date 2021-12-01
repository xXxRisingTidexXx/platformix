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
      audioPlayerInterval(LEVEL_URL);
      i++;
    }
  }
  audioPlayer(COMPLETION_URL);
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

function audioPlayerInterval(url) {
  let audio = new Audio(url);
  audio.loop = true;
  audio.play();
  setTimeout(() => audio.pause(), 1500);
}

function audioPlayer(url) {
  new Audio(url).play();
}

async function reRunGame(plans, drawing) {
  audioPlayer(CLICK_URL);
  await runGame(plans, drawing);
}
