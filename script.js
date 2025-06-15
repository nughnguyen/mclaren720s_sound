const audio = document.getElementById("quochung");
const revFill = document.getElementById("rev-fill");
let isHolding = false;
let fadeOutInterval;

window.addEventListener("keydown", (e) => {
  if (e.code === "Space" && !isHolding) {
    isHolding = true;
    clearInterval(fadeOutInterval);
    audio.volume = 1;
    audio.currentTime = 0;
    audio.play();
    startRevBar();
  }
});

window.addEventListener("keyup", (e) => {
  if (e.code === "Space") {
    isHolding = false;
    fadeOutAudio();
    stopRevBar();
  }
});

function fadeOutAudio() {
  fadeOutInterval = setInterval(() => {
    if (audio.volume > 0.05) {
      audio.volume -= 0.05;
    } else {
      clearInterval(fadeOutInterval);
      audio.pause();
      audio.currentTime = 0;
      audio.volume = 1;
    }
  }, 100);
}

function startRevBar() {
  let width = 0;
  revFill.style.width = "0%";
  const interval = setInterval(() => {
    if (!isHolding || width >= 100) {
      clearInterval(interval);
    } else {
      width += 5 + Math.random() * 5; // tăng ngẫu nhiên như tua máy
      revFill.style.width = `${Math.min(width, 100)}%`;
    }
  }, 100);
}

function stopRevBar() {
  revFill.style.width = "0%";
}
