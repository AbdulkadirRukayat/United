
// script.js
// No JavaScript is strictly necessary for this static hero section,
// but I've included a simple script for potential button interactions,
// such as alerting on click. You can expand this as needed.

document.addEventListener('DOMContentLoaded', () => {
    const primaryBtn = document.querySelector('.btn.primary');
    const secondaryBtn = document.querySelector('.btn.secondary');

    primaryBtn.addEventListener('click', () => {
        alert('Getting in touch...'); // Placeholder for contact form or email link
    });

    secondaryBtn.addEventListener('click', () => {
        alert('Downloading CV...'); // Placeholder for actual download
        // In a real scenario, this could trigger a file download:
        // window.location.href = 'path/to/cv.pdf';
    });
});

// script.js
// No JavaScript is strictly necessary for this static about me section,
// but I've included a simple script for potential future interactivity.

document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill-card');
    skills.forEach(skill => {
        skill.addEventListener('mouseover', () => {
            skill.style.backgroundColor = '#2a0052';
        });
        skill.addEventListener('mouseout', () => {
            skill.style.backgroundColor = '#1a0033';
        });
    });
});

// script.js
// No JavaScript is strictly necessary for this static journey section,
// but I've included a simple script for potential hover effects.

document.addEventListener('DOMContentLoaded', () => {
    const experienceCard = document.querySelector('.experience-card');
    experienceCard.addEventListener('mouseover', () => {
        experienceCard.style.backgroundColor = '#2a0052';
    });
    experienceCard.addEventListener('mouseout', () => {
        experienceCard.style.backgroundColor = '#1a0033';
    });
});

// script.js
// Adding simple hover effects for interactivity

document.addEventListener('DOMContentLoaded', () => {
    const certCards = document.querySelectorAll('.cert-card');
    certCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.backgroundColor = '#2a0052';
        });
        card.addEventListener('mouseout', () => {
            card.style.backgroundColor = '#1a0033';
        });
    });

    const methods = document.querySelectorAll('.method');
    methods.forEach(method => {
        method.addEventListener('mouseover', () => {
            method.querySelector('.icon').style.backgroundColor = '#2a0052';
        });
        method.addEventListener('mouseout', () => {
            method.querySelector('.icon').style.backgroundColor = '#1a0033';
        });
    });
});

// script.js
// Adding hover effects for skill items

document.addEventListener('DOMContentLoaded', () => {
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.querySelector('.level').style.backgroundColor = '#3b0073';
        });
        item.addEventListener('mouseout', () => {
            item.querySelector('.level').style.backgroundColor = '#2a0052';
        });
    });
});

// script.js
// Simple interactivity for the button and hover effects

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.btn');
    btn.addEventListener('click', () => {
        alert('Opening message form...'); // Placeholder for actual form or email client
    });

    const methods = document.querySelectorAll('.method');
    methods.forEach(method => {
        method.addEventListener('mouseover', () => {
            method.querySelector('.icon').style.backgroundColor = '#3b0073';
        });
        method.addEventListener('mouseout', () => {
            method.querySelector('.icon').style.backgroundColor = '#2a0052';
        });
    });
});

// project
// Adding interactivity for the button and hover effects

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.btn');
    btn.addEventListener('click', () => {
        alert('Redirecting to all projects...'); // Placeholder for actual navigation
    });

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.backgroundColor = '#2a0052';
        });
        card.addEventListener('mouseout', () => {
            card.style.backgroundColor = '#1a0033';
        });
    });
});
