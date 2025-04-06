// app.js

const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('show');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Fade out arrows when scrolling down
const scrollDown = document.querySelector('.scroll-down');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { // when user scrolls down 50px
    scrollDown.classList.add('hide-arrows');
  } else {
    scrollDown.classList.remove('hide-arrows');
  }
});
