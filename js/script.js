document.addEventListener('DOMContentLoaded', () => {
    const MIN_GAP = 0;

    const minInput = document.getElementById("minInput");
    const maxInput = document.getElementById("maxInput");
    const minRange = document.getElementById("minRange");
    const maxRange = document.getElementById("maxRange");
    const progress = document.querySelector(".progress");
    const maxLimit = parseInt(maxRange.max);

    const updateProgress = e => {
        let minVal = +minRange.value;
        let maxVal = +maxRange.value;

        if (maxVal - minVal < MIN_GAP) {
            if (e?.target?.id === "minRange") minVal = maxVal - MIN_GAP;
            else maxVal = minVal + MIN_GAP;
            minRange.value = minVal;
            maxRange.value = maxVal;
        }

        minInput.value = minVal;
        maxInput.value = maxVal;

        progress.style.left = (minVal / maxLimit) * 100 + "%";
        progress.style.right = 100 - (maxVal / maxLimit) * 100 + "%";
    };

    const allowOnlyNumbers = input => {
        input.addEventListener("input", () => input.value = input.value.replace(/\D/g, ""));
        input.addEventListener("blur", () => {
            if (input.value === "") input.value = 0;
        });
    };

    minRange.addEventListener("input", updateProgress);
    maxRange.addEventListener("input", updateProgress);

    [minInput, maxInput].forEach(input => allowOnlyNumbers(input));

    minInput.addEventListener("blur", () => {
        let value = parseInt(minInput.value) || 0;
        const maxVal = +maxRange.value;
        if (value < 0) value = 0;
        if (value > maxVal - MIN_GAP) value = maxVal - MIN_GAP;
        minRange.value = value;
        updateProgress();
    });

    maxInput.addEventListener("blur", () => {
        let value = parseInt(maxInput.value) || 0;
        const minVal = +minRange.value;
        if (value < minVal + MIN_GAP) value = minVal + MIN_GAP;
        if (value > maxLimit) value = maxLimit;
        maxRange.value = value;
        updateProgress();
    });

    updateProgress();
});
document.addEventListener('DOMContentLoaded', () => {
    const main = new Splide('#image-slider', {
        type: 'slide',
        rewind: true,
        pagination: false,
        arrows: true,
        lazyLoad: 'nearby',
        gap: 10
    });

    const thumbs = new Splide('#thumbs-slider', {
        fixedWidth: 140,
        fixedHeight: 80,
        gap: 10,
        rewind: true,
        pagination: false,
        isNavigation: true,
        focus: 'center',
        arrows: false,
        breakpoints: {640: {fixedWidth: 100, fixedHeight: 70}}
    });

    main.sync(thumbs);
    thumbs.mount();
    main.mount();
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

$(document).ready(() => {
    $('.top__banner__carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 800,
        items: 1
    });

    $('.products__carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        stagePadding: 2,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 800,
        responsive: {
            0: {items: 1.65},
            600: {items: 3.5},
            1000: {items: 4.7}
        }
    });

    $('.categories__carousel').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        dots: false,
        stagePadding: 15,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 800,
        responsive: {
            0: {items: 2.7},
            600: {items: 4.7},
            968: {items: 6.7},
            1170: {items: 8.7},
            1250: {items: 10.7}
        }
    });
});
Fancybox.bind("[data-fancybox]", {
    // Your custom options
});
