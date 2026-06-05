// ─── REVEAL AL HACER SCROLL ───
// Selecciona todos los elementos con clase "reveal"
const reveals = document.querySelectorAll('.reveal');

// Crea un observador que detecta cuando cada elemento entra en pantalla
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Agrega un pequeño delay escalonado para que aparezcan uno por uno
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      // Deja de observar el elemento una vez que ya apareció
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

// Aplica el observador a cada elemento
reveals.forEach(el => observer.observe(el));


// ─── RESALTAR LINK ACTIVO EN EL NAV ───
// Detecta en qué sección está el usuario mientras hace scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  // Revisa cuál sección está visible en pantalla
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.id;
    }
  });

  // Resalta el link del nav correspondiente a la sección actual
  navLinks.forEach(link => {
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = 'var(--gold)';
    } else {
      link.style.color = '';
    }
  });
});