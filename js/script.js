const carousel = document.querySelector('.carousel');
let currentIndex = 0;

function slide() {
  const imgWidth = carousel.firstElementChild.clientWidth;
  currentIndex++;
  if (currentIndex >= carousel.children.length) {
    currentIndex = 0;
  }
  const newPosition = -currentIndex * imgWidth;
  carousel.style.transform = `translateX(${newPosition}px)`;
}

setInterval(slide, 3000); // Cambia de imagen cada 3 segundos
