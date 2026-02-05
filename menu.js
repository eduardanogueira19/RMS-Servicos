
// Menu toggle functionality
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  const links = document.querySelectorAll('.menu a');

  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  // Fecha o menu quando clicar em um link
  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
    });
  });