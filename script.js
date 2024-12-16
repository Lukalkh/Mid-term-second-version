document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const images = Array.from(track.children);
    let currentIndex = 0;

    // 自动轮播
    setInterval(() => {
        const slideWidth = images[0].getBoundingClientRect().width;
        currentIndex = (currentIndex + 1) % images.length;
        track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    }, 3000);
});
