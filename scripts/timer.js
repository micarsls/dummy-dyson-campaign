document.addEventListener("DOMContentLoaded", function () {});

window.onload = () => {
  const fiveMinutes = 60 * 20;
  const display = document.querySelector("#countdown");
  startTimer(fiveMinutes, display);

  var splide = new Splide(".splide", {
    autoplay: true,
    interval: 3000,
  });
  splide.mount();
};

const startTimer = (duration, display) => {
  let timer = duration;
  let minutes, seconds;

  setInterval(() => {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = `${minutes}:${seconds}`;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
};
