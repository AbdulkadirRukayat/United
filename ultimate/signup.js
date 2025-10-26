document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const password = document.getElementById('password').value;
        if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
        } else {
            alert('Account created successfully!');
        }
    });
});