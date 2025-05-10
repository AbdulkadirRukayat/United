
const yearEl = document.querySelector(".year");
const currentyear = new Date().getFullYear();
yearEl.textContent =currentyear;


document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.main-nav-list');
  
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navToggle.classList.toggle('active');
      navList.classList.toggle('active');
    });
  });