
    const track = document.querySelector('.carousel-track1');
    const slides = document.querySelectorAll('.carousel-track1 img');
    const nextBtn = document.querySelector('.arrow.right');
    const prevBtn = document.querySelector('.arrow.left');

    let index = 0;

    function updateCarousel() {
        track.style.transform = `translateX(-${index * 100}vw)`;
    }

    nextBtn.addEventListener('click', () => {
        index = (index + 1) % slides.length;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        index = (index - 1 + slides.length) % slides.length;
        updateCarousel();
    });