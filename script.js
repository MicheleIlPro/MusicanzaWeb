menu = document.querySelector(".menu");
nav = document.querySelector("nav");
menu.onclick = function() {
    nav.classList.toggle("active");
}

window.addEventListener('DOMContentLoaded', (event) => {
    const contents = document.querySelectorAll('.content');

    contents.forEach((content) => {
      content.addEventListener('click', () => {
        content.classList.toggle('expanded');
        const hiddenContent = content.nextElementSibling;
        hiddenContent.classList.toggle('hidden');
      });
    });
  });

const button = document.getElementById('2');
const content = document.getElementById('1');

button.addEventListener('click', function() {
  const contentRect = content.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const targetTop = contentRect.top + scrollTop;
  
  window.scrollTo({
    top: targetTop,
    behavior: 'smooth' // Aggiunge un'animazione di scorrimento fluido
  });
});