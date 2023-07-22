function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

var loop = {
    strings: ['Web engineer', 'Designer', 'Developer', 'Python Developer'],
    typeSpeed: 50,
    backSpeed: 100
};

var typed = new Typed(".typing", loop);