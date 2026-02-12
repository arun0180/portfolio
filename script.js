const revealOnScroll = () => {
  const reveals = document.querySelectorAll(".reveal");
  const triggerBottom = (window.innerHeight / 5) * 4;

  reveals.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    }
  });
};

// Listen for scroll
window.addEventListener("scroll", revealOnScroll);
// Initial check
window.addEventListener("DOMContentLoaded", revealOnScroll);
