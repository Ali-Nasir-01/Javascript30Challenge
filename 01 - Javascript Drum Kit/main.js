const playSound = (keyCode) => {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  if (!audio) return null;
  const key = document.querySelector(`div[data-key="${keyCode}"]`);

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
};

const removeTransition = (e) => {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
};

const keys = Array.from(document.querySelectorAll(".keys"));
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keyup", (ev) => {
  playSound(ev.key);
});
