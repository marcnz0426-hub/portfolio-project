const hireBtn = document.getElementById('hire-btn');
hireBtn.addEventListener('click', function() {
    if (this.textContent === 'Hire Me') {
        this.style.backgroundColor = '#535C91';
        this.textContent = 'Thanks for your interest!';
        setTimeout(function() {
            document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' })}, 1000);
    } else {
        this.style.backgroundColor = '';
        this.textContent = 'Hire Me';
    }
})

const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', function(event) {
    if (this.textContent === 'Send Message') {
        event.preventDefault();
        this.style.backgroundColor = '#535C91';
        this.textContent = 'Thank you for reaching out! I will get back to you soon.';
    } else {
        this.style.backgroundColor = '';
        this.textContent = 'Send Message';
    }

})

fetch('https://api.github.com/users/marcnz0426-hub/repos')
    .then(response => response.json())
    .then(data => {
        const projectsSection = document.getElementById('github-projects');
        data.forEach(repo => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');
            projectCard.innerHTML = `
                <img src="https://placehold.co/300x200?text=${repo.name}" alt="${repo.name}">
                <h3>${repo.name}</h3>
                <p>${repo.description}</p>
                <a href="${repo.html_url}" target="_blank">View Project</a>
            `;
            projectsSection.appendChild(projectCard);
        });
    })
    .catch(error => console.error(error));