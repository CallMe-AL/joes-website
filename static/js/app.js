const upBtn = document.querySelector('.back-to-top-btn');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 500) {
    upBtn.classList.add('show');
  } else {
    upBtn.classList.remove('show');
  }
});

upBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});