// Navbar Fixed
let nav = document.querySelector('nav');

window.onscroll = () => {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        nav.classList.add('shadow-sm');
    } else {
        nav.classList.remove('shadow-sm');
    }
}
// Navbar Fixed

// Carousel Margin
setInterval(() => {
    let navHeight = document.querySelector('nav').offsetHeight;
    let headerCarousel = document.getElementById('headercarousel');
    headerCarousel.style.marginTop = `${navHeight}px`;
}, 100)


// Carousel Margin