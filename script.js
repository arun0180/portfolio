document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".card").forEach((el, i) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(10px)";
    setTimeout(() => {
      el.style.transition = "0.4s ease";
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, 150 + i * 120);
  });
});
