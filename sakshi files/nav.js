document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burger-menu');
    const navLinks = document.getElementById('nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('active');
    });
});
