const header = document.querySelector('header');
const playButton = document.querySelector('#playButton');
const infoButton = document.querySelector('#infoButton');
const getStarted = document.querySelector('#getStarted');
const heroVideo = document.querySelector('.hero-section video');

window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
});

playButton?.addEventListener('click', () => {
    heroVideo?.play();
    document.querySelector('#shows')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

infoButton?.addEventListener('click', () => {
    document.querySelector('#shows')?.scrollIntoView({ behavior: 'smooth' });
});

getStarted?.addEventListener('click', () => {
    document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
});

heroVideo?.addEventListener('click', () => {
    heroVideo.paused ? heroVideo.play() : heroVideo.pause();
});

// Highlight the current navigation section while scrolling.
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('header nav a');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    });
}, { threshold: 0.35 });
sections.forEach((section) => sectionObserver.observe(section));
