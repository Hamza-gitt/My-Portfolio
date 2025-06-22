// Typing effect
const typedText = document.getElementById("typed-text");
const roles = ["Frontend Developer", "UI Designer", "Problem Solver"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const current = roles[roleIndex];
  const displayed = current.substring(0, charIndex);
  typedText.textContent = displayed;

  if (!isDeleting && charIndex < current.length) {
    charIndex++;
    setTimeout(type, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(type, 1000);
  }
}
type();

// ScrollReveal animations
ScrollReveal({
  reset: true,
  distance: '60px',
  duration: 1200,
  delay: 200
});
ScrollReveal().reveal('header', { origin: 'top' });
ScrollReveal().reveal('.hero-text', { origin: 'left' });
ScrollReveal().reveal('.hero-img', { origin: 'right' });
ScrollReveal().reveal('#about h2, .about-content', { origin: 'bottom' });
ScrollReveal().reveal('#projects h2, .projects-grid', { origin: 'bottom' });
ScrollReveal().reveal('#contact h2, form', { origin: 'bottom' });

// Dark/Light Mode Toggle
const themeBtn = document.getElementById("theme-toggle");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  themeBtn.textContent = document.body.classList.contains("light-mode") ? "🌞" : "🌙";
});

// Back to Top Button
const topBtn = document.getElementById("topBtn");
window.onscroll = function () {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
};
topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Contact Form Submission
function submitForm(e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
}

// ScrollReveal for new sections
ScrollReveal().reveal('.more-projects .project', { origin: 'bottom', interval: 100 });
ScrollReveal().reveal('.experience h2, .experience-item', { origin: 'bottom', interval: 100 });
