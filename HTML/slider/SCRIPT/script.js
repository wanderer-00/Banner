// инициализация slickSlider в div.slider
$(document).ready(function(){
    $('.slider').slick({
        arrows:           true,
        dots:             true,
        adaptiveHeight:   true,
        slidesToScroll:      1,
        slidesToShow:        3,
        easing:         'ease',
        infinite:         true,
        autoplay:         true,
        autoplaySpeed:    1000,
        pauseOnDotsHover: true,
        pauseOnHover:     true,
        pauseOnFocus:     true,
        waitForAnimate:   true,
    });
});

console.log('script.js активен');
// manual - https://www.youtube.com/watch?v=rXNfDfqtM3M