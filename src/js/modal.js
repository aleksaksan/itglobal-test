const openModaBtn = document.getElementById('create-btn');
const modalWindow = document.querySelector('.modal');
const modalContent = document.querySelector('.modal__content');
const cancelBtns = document.querySelectorAll('.cancel');


const closeModal = () => {
  modalWindow.classList.remove('modal__active');
}

openModaBtn.addEventListener('click', () => {
  modalWindow.classList.add('modal__active');

  cancelBtns.forEach(btn => {
    btn.addEventListener('click', closeModal);
  })

  modalWindow.addEventListener('click', (event) => {
    event.stopPropagation();
    if (event.target === modalWindow) {
      closeModal();
    }
  })
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeModal();
    }
  })
});

