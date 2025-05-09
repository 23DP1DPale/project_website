const menu = document.getElementById('nav-icon');
const navbar = document.getElementById('nav-container');
const nav = document.querySelectorAll('.navigation');
const closeMenu = document.getElementById('close-menu')

menu.addEventListener('click', () => {
    navbar.classList.add('show');
});

closeMenu.addEventListener('click', () => {
    navbar.classList.remove('show');
});


window.addEventListener('resize', () => {
    if (window.innerWidth > 800) {
        navbar.classList.remove('show');
    }
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
        } else {
            entry.target.classList.remove('appear');
        }
    });
});

const circleObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('circleAppear');
        } else {
            entry.target.classList.remove('circleAppear');
        }
    });
});

const hiddenHeroElements = document.querySelectorAll('.hiddenHero')
hiddenHeroElements.forEach((el) => observer.observe(el));

const hiddenAboutElements = document.querySelectorAll('.hiddenAbout')
hiddenAboutElements.forEach((el) => observer.observe(el));

const hiddenImage = document.querySelectorAll('.hiddenImage');
hiddenImage.forEach((el) => observer.observe(el));

const hiddenDownload = document.querySelectorAll('.hiddenDownload');
hiddenDownload.forEach((el) => observer.observe(el));

const hiddenCircleTop = document.querySelectorAll('.hiddenCircleTop');
hiddenCircleTop.forEach((el) => circleObserver.observe(el));

const hiddenCircleBottom = document.querySelectorAll('.hiddenCircleBottom');
hiddenCircleBottom.forEach((el) => circleObserver.observe(el));
