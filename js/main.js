// Navbar Fixed
let nav = document.querySelector('#navbar');
let scrollButton = document.getElementById('scrolltotop');

window.onscroll = () => {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        nav.classList.add('shadow-sm');
    } else {
        nav.classList.remove('shadow-sm');
    }

    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        scrollButton.style.display = "flex";
    } else if (document.body.scrollTop < 10 || document.documentElement.scrollTop < 10) {
        scrollButton.style.display = "none";
    }
}
// Navbar Fixed

// Carousel Margin
setInterval(() => {
    let navHeight = document.querySelector('nav').offsetHeight;
    let headerItem = document.getElementById('headeritem');
    headerItem.style.marginTop = `${navHeight}px`;
}, 100)
// Carousel Margin


// Owl Carousel
$(".ourclients-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 20,
    dots: false,
    loop: true,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        992: {
            items: 2
        }
    }
});
// Owl Carousel
