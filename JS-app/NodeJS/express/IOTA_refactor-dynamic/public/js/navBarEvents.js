// Add a class when the user scrolls down
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // Adjust scroll distance as needed
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
let icon_src = '/imgs/logo/icon.PNG';
document.querySelector('#logo').setAttribute('src', icon_src)

document.head.insertAdjacentHTML(
    'beforeend',
    `<link rel="icon" type="image/x-icon" href="/imgs/logo/icon.png">`
);
