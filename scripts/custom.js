document.addEventListener("DOMContentLoaded", () => {
  // Timer Initialization
  const fiveMinutes = 60 * 20;
  const display = document.querySelector("#countdown");
  startTimer(fiveMinutes, display);

  // Splide Slider
  const splide = new Splide(".splide", {
    type: "fade",
    rewind: true,
    autoplay: true,
    interval: 3000,
    pauseOnHover: true,
    pagination: false,
    classes: {
      arrow: "splide__arrow bg-copper",
    },
  });
  splide.mount();

  // Accordion Display
  const accordions = document.querySelectorAll(".accordion");
  accordions.forEach((accordion) => {
    accordion.addEventListener("click", () => {
      accordion.classList.toggle("active");
      const panel = accordion.nextElementSibling;
      panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
  });

  // Modal Close
  const modal = document.getElementById("modal");
  const closeModalButton = document.getElementById("closeModal");
  closeModalButton.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  //Contact Form Submission
  const contact = document.getElementById("contact");
  contact.addEventListener("submit", (e) => {
    e.preventDefault();
    modal.classList.remove("hidden");
    contact.reset();
  });
});

//Timer Function
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
