document.addEventListener('DOMContentLoaded', function() {
  // Mostrar la imagen de presentación durante 2 segundos
  setTimeout(() => {
      const splashScreen = document.getElementById('splash-screen');
      splashScreen.classList.add('hidden');
      setTimeout(() => {
          splashScreen.style.display = 'none';
          document.getElementById('main-content').style.display = 'block';
          document.body.style.overflow = 'auto'; // Permitir el desplazamiento después de la pantalla de presentación
      }, 1000); // Esperar el tiempo de la transición para ocultar el splash screen
  }, 1000);
});





const carouselContainer = document.querySelector('.carousel-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carouselSlides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

function showSlide(n) {
  carouselContainer.style.transform = `translateX(-${n * 100}%)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % carouselSlides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + carouselSlides.length) % carouselSlides.length;
  showSlide(currentSlide);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);