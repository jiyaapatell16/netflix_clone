const header = document.querySelector('header');
const playButton = document.querySelector('#playButton');
const infoButton = document.querySelector('#infoButton');
const getStarted = document.querySelector('#getStarted');
const heroVideo = document.querySelector('.hero-section video');

window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
});

playButton?.addEventListener('click', () => {
    if (heroVideo) {
        heroVideo.play();
        heroVideo.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
});

infoButton?.addEventListener('click', () => {
    document.querySelector('#shows')?.scrollIntoView({ behavior: 'smooth' });
});

getStarted?.addEventListener('click', () => {
    document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
});

// Add a subtle pause/play interaction to the hero video.
heroVideo?.addEventListener('click', () => {
    if (heroVideo.paused) {
        heroVideo.play();
    } else {
        heroVideo.pause();
    }
});
