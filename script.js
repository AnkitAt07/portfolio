// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const form = document.querySelector('.contact-form form');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const subject = this.querySelector('input[placeholder="Subject"]').value;
        const message = this.querySelector('textarea').value;

        // Here you would typically send the data to a server
        console.log('Form submitted:', { name, email, subject, message });

        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// Mobile menu toggle (can be added if needed)
// const menuToggle = document.createElement('button');
// menuToggle.classList.add('menu-toggle');
// menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
// document.querySelector('header .container').appendChild(menuToggle);
//
// menuToggle.addEventListener('click', function() {
//     document.querySelector('nav ul').classList.toggle('active');
// });