document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Logging in...');
    });
});