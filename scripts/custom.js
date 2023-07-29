document.addEventListener("DOMContentLoaded", () => {
  const fiveMinutes = 60 * 20;
  const display = document.querySelector("#countdown");
  startTimer(fiveMinutes, display);

  const modal = document.getElementById("modal");
  const closeModalButton = document.getElementById("closeModal");
  closeModalButton.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  const contact = document.getElementById("contact");
  contact.addEventListener("submit", (e) => {
    e.preventDefault();
    modal.classList.remove("hidden");
    contact.reset();
  });
});

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
