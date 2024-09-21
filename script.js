// script.js
const button = document.getElementById('changeTextBtn');
const heading = document.getElementById('heading');

button.addEventListener('click', () => {
  heading.textContent = 'Text Changed!';
});
