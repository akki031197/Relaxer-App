const container = document.getElementById("container");
const text = document.getElementById("text");

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdtime = totalTime / 5;

function breathAnimation() {
  text.innerHTML = "Breath In!";
  container.className = "container grow";

  setTimeout(() => {
    text.innerHTML = "Hold";
    setTimeout(() => {
      text.innerHTML = "Breath Out!";
      container.className = "container shrink";
    }, holdtime);
  }, breatheTime);
}
breathAnimation();
setInterval(breathAnimation, totalTime);
