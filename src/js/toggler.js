const toggleButton = document.getElementById('toggle');

toggleButton.addEventListener('click', () => {
  const menu = document.getElementById('menu');
  if (menu) {
    menu.classList.toggle('inactive');
    toggleButton.classList.toggle('active');
  }
});
