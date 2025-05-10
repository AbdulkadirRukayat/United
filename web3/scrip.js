

// Hamburger menu toggle
const navToggle = document.querySelector ('.nav-toggle');
const navList = document.querySelector ('.main-nav-list');

navToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});

const yearEl = document.querySelector(".year");
const currentyear = new Date().getFullYear();
yearEl.textContent =currentyear;

