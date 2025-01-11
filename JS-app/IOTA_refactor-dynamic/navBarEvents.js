// Add a class when the user scrolls down
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // Adjust scroll distance as needed
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.querySelector('#logo').setAttribute('src', 'file:///M:/Train/web-dev-bootcamp/JS-app/IOTA_refactor-dynamic/logo/icon.PNG')