console.log('Hello from app.js bozo');

const ytLink = document.getElementById('ytLink');
const cb = document.getElementById('cb');

ytLink.addEventListener('click', function(e) {
  if (!cb.checked) {
    e.preventDefault();
  }
});
