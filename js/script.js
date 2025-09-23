$(document).ready(function () {

    $('.top__banner__carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        autoplay:true,
        autoplayTimeout:6000,
        smartSpeed:800,
        items: 1
    })
    $('.products__carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        stagePadding: 2,
        autoplay:true,
        autoplayTimeout:6000,
        smartSpeed:800,
        responsive: {
            0: {
                items: 1.2
            },
            600: {
                items: 3.5
            },
            1000: {
                items: 4.7
            }
        }
    })

});
