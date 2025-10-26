// script.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const authLinks = document.querySelector('.auth-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        authLinks.classList.toggle('active');
    });

    // Close menu on link click
    document.querySelectorAll('.nav-links a, .auth-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            authLinks.classList.remove('active');
        });
    });

    // Prevent default form submission (placeholder)
    const searchForm = document.querySelector('.search-form');
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Search functionality coming soon!');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const categories = document.querySelectorAll('.category');
    categories.forEach(category => {
        category.addEventListener('click', () => {
            alert(`You selected ${category.querySelector('h3').textContent}`);
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const getStartedButton = document.querySelector('.get-started');
    getStartedButton.addEventListener('click', () => {
        alert('Redirecting to Get Started page...');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const getStartedButton = document.querySelector('.get-started');
    getStartedButton.addEventListener('click', () => {
        alert('Redirecting to Get Started page...');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const reasons = document.querySelectorAll('.reason');
    reasons.forEach(reason => {
        reason.addEventListener('click', () => {
            alert(`Learn more about ${reason.querySelector('h3').textContent}`);
        });
    });
});