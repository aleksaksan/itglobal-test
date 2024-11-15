`box-shadow: ;`

const header = document.getElementsByTagName('header')[0];
const taskHeader = document.getElementById('task-panel');

taskHeader.style.top = `${header.offsetHeight}px`;

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY; 
  const targetPosition = header.offsetHeight + taskHeader.offsetHeight; 

  if (scrollPosition >= targetPosition) {
    taskHeader.style.boxShadow = '0 4px 4px 0 rgba(0, 0, 0, 0.04)';
    console.log(header.offsetHeight)
  } else {
    taskHeader.style.boxShadow = '';
  }
});