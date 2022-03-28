const upBtn = document.querySelector('.back-to-top-btn');

const hamMenu = document.querySelector('.menu-container');
const mobileMenu = document.querySelector('.mobile-menu');
const menuOverlay = document.querySelector('.menu-overlay');

hamMenu.addEventListener('click', () => {
  if (!hamMenu.classList.contains('close')) {
    hamMenu.classList.add('close');
    mobileMenu.classList.add('active');
    menuOverlay.classList.add('active');
  } else {
    hamMenu.classList.remove('close');
    mobileMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
  }
});

menuOverlay.addEventListener('click', () => {
  if (!hamMenu.classList.contains('close')) {
    hamMenu.classList.add('close');
    mobileMenu.classList.add('active');
    menuOverlay.classList.add('active');
  } else {
    hamMenu.classList.remove('close');
    mobileMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
  }
});

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