$(document).ready(function () {

    $('.top__banner__carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        autoplay: true,
        autoplayTimeout: 6000,
        smartSpeed: 800,
        items: 1
    })
    $('.products__carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        stagePadding: 2,
        autoplay: true,
        autoplayTimeout: 6000,
        smartSpeed: 800,
        responsive: {
            0: {
                items: 1.65
            },
            600: {
                items: 3.5
            },
            1000: {
                items: 4.7
            }
        }
    })
    $('.categories__carousel').owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        dots: false,
        stagePadding: 15,
        autoplay: true,
        autoplayTimeout: 6000,
        smartSpeed: 800,
        responsive: {
            0: {
                items: 2.7
            },
            600: {
                items: 4.7
            },
            968: {
                items: 6.7
            },
            1170: {
                items: 8.7
            },
            1250: {
                items: 10.7
            }
        }
    })

});
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()
document.addEventListener('DOMContentLoaded', function () {
    // Главный слайдер
    var main = new Splide('#image-slider', {
        type: 'slide',
        rewind: true,
        pagination: false,
        arrows: true,
        lazyLoad: 'nearby',
        gap: 10
    });

    // Слайдер для миниатюр — выступает как навигация
    var thumbs = new Splide('#thumbs-slider', {
        fixedWidth: 140,
        fixedHeight: 80,
        gap: 10,
        rewind: true,
        pagination: false,
        isNavigation: true,
        focus: 'center',
        arrows: false,
        breakpoints: {
            640: {
                fixedWidth: 100,
                fixedHeight: 70,
            }
        }
    });


    main.sync(thumbs);


    thumbs.mount();
    main.mount();
});
