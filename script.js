document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuIcon = document.getElementById('menu-icon');
  const navbar = document.querySelector('.navbar');

  menuIcon.addEventListener('click', () => {
      navbar.classList.toggle('active');
  });

  // Form submission
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      // Replace this with actual form submission logic
      console.log(`Form submitted:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

      // Clear form fields
      form.reset();

      // Optionally display a thank you message or redirect
      alert('Thank you for contacting us! We will get back to you shortly.');
  });
});
