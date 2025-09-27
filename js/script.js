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


    // Range slider start

    // 🎯 Настройки — всё управляется отсюда
    const MIN_GAP = 500; // минимальная разница между min и max

    const minInput = document.getElementById("minInput");
    const maxInput = document.getElementById("maxInput");
    const minRange = document.getElementById("minRange");
    const maxRange = document.getElementById("maxRange");
    const progress = document.querySelector(".progress");

    // Функция обновления прогресс-бара и инпутов
    function updateProgress(e) {
        let minVal = parseInt(minRange.value);
        let maxVal = parseInt(maxRange.value);

        // Корректируем, если разница меньше MIN_GAP
        if (maxVal - minVal < MIN_GAP) {
            if (e?.target?.id === "minRange") {
                minVal = maxVal - MIN_GAP;
                minRange.value = minVal;
            } else {
                maxVal = minVal + MIN_GAP;
                maxRange.value = maxVal;
            }
        }

        // Обновляем инпуты
        minInput.value = minVal;
        maxInput.value = maxVal;

        // Обновляем прогресс-бар
        const maxLimit = parseInt(maxRange.max);
        progress.style.left = (minVal / maxLimit) * 100 + "%";
        progress.style.right = 100 - (maxVal / maxLimit) * 100 + "%";
    }

    // 🎛 События для range-ползунков
    minRange.addEventListener("input", updateProgress);
    maxRange.addEventListener("input", updateProgress);

    // 🎛 События для input-полей
    minInput.addEventListener("change", () => {
        let value = parseInt(minInput.value) || 0;
        const maxVal = parseInt(maxRange.value);

        if (value < 0) value = 0;
        if (value > maxVal - MIN_GAP) value = maxVal - MIN_GAP;

        minRange.value = value;
        updateProgress();
    });

    maxInput.addEventListener("change", () => {
        let value = parseInt(maxInput.value) || 0;
        const maxLimit = parseInt(maxRange.max);
        const minVal = parseInt(minRange.value);

        if (value > maxLimit) value = maxLimit;
        if (value < minVal + MIN_GAP) value = minVal + MIN_GAP;

        maxRange.value = value;
        updateProgress();
    });

    // Стартовое обновление
    updateProgress();
    // Range slider End
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
