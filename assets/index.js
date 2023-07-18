//Use Observer API as User views the sections
const nav = document.querySelectorAll('.nav');
const options = {
  threshold: 1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fixed');
    }
  });
}, options);

nav.forEach(nav => {
    observer.observe(nav);
});