// Typed.js for typing animation
document.addEventListener("DOMContentLoaded", function () {
  new Typed("#typed-text", {
    strings: ["DevHec Labs"],
    typeSpeed: 80,
    showCursor: false
  });
});

// Orbiting particles
const canvas = document.getElementById("orbitCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

let particles = [];
for (let i = 0; i < 30; i++) {
  particles.push({
    angle: Math.random() * Math.PI * 2,
    radius: 40 + Math.random() * 100,
    speed: 0.01 + Math.random() * 0.01,
    size: 2 + Math.random() * 2
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(99, 102, 241, 0.3)";
  particles.forEach(p => {
    p.angle += p.speed;
    const x = canvas.width / 2 + Math.cos(p.angle) * p.radius;
    const y = canvas.height / 2 + Math.sin(p.angle) * p.radius;
    ctx.beginPath();
    ctx.arc(x, y, p.size, 0, Math.PI * 2);
    ctx.fill();
  });
  requestAnimationFrame(animate);
}
animate();

document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in");

  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});
