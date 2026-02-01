const counters = document.querySelectorAll('.stat-number');

const options = {
  root: null,
  threshold: 0.4
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counter = entry.target;

      const target = Number(counter.getAttribute('data-target'));
      let current = 0;
      const increment = Math.ceil(target / 200);
      

      const updateCount = () => {
        if (current < target) {
          current += increment;
          if (current > target) current = target;

          counter.innerText = new Intl.NumberFormat('pt-BR').format(current);
          setTimeout(updateCount, 15);
        } else {
          counter.innerText = new Intl.NumberFormat('pt-BR').format(target);
        }
      };

      updateCount();
      observer.unobserve(counter); // anima só uma vez
    }
  });
}, options);

counters.forEach(counter => {
  counter.innerText = '0'; // garante que começa zerado
  observer.observe(counter);
});

// Menu toggle functionality

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const submenuLink = document.querySelector('.has-submenu > a');
const submenu = document.querySelector('.submenu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

/* Submenu no clique */
submenuLink.addEventListener('click', (e) => {
    e.preventDefault();
    submenu.classList.toggle('active');
});