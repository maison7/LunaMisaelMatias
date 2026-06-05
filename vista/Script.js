
const reveals = document.querySelectorAll('.reveal');


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.id;
    }
  });
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = 'var(--gold)';
    } else {
      link.style.color = '';
    }
  });
});
