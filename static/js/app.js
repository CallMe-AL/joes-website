const upBtn = document.querySelector('.back-to-top-btn');

const hamMenu = document.querySelector('.menu-container');
const mobileMenu = document.querySelector('.mobile-menu');
const menuOverlay = document.querySelector('.menu-overlay');

// post card variables
const postCard = [...document.querySelectorAll('.post-card')];

postCard.forEach(card => {
  // *** NOTE FOR FUTURE SELF *** 
  // if adding more links within cards in future, will need to prevent double event triggering
  // see below:
  // https://css-tricks.com/block-links-the-search-for-a-perfect-solution/#method-4-sprinkle-javascript-on-the-second-method
  //  
  // 
  const mainLink = card.querySelector('.main-post-card-link');

  card.addEventListener('click', (e) => {
    const isTextSelected = window.getSelection().toString();
    if (!isTextSelected) {
      // bubbles up to card and fires click event on the link
      mainLink.click();
    }
  });
});

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