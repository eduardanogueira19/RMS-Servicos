const counters = document.querySelectorAll('.stat-number');

const options = {
  root: null,
  threshold: 0.4
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counter = entry.target;

      const target = Number(counter.dataset.target);
      const speed = Number(counter.dataset.speed) || 20; // padrão
      let current = 0;

      const increment = Math.ceil(target / 200);

      const updateCount = () => {
        if (current < target) {
          current += increment;
          if (current > target) current = target;

          counter.innerText = new Intl.NumberFormat('pt-BR').format(current);
          setTimeout(updateCount, speed);
        } else {
          counter.innerText = new Intl.NumberFormat('pt-BR').format(target);
        }
      };

      updateCount();
      observer.unobserve(counter);
    }
  });
}, options);

counters.forEach(counter => {
  counter.innerText = '0';
  observer.observe(counter);
});