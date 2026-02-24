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