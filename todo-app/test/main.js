var typed = new Typed(".text", {
    strings: ["Web Developer", "Full Stack Developer"],
    startDelay: 1500,
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});
/*
var typed = new Typed(".reveal.text", {
    strings: ["Basic Informations"],
    startDelay: 1500,
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    cursorChar: " ",
    cursorCharStyle: "font-size: 32px; display: inline-block; vertical-align: middle;",
});



document.addEventListener('DOMContentLoaded', function () {
    var reveals = document.querySelectorAll('.reveal');

    function reveal() {
        for (var i = 0; i < reveals.length; i++) {
            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 150;

            if (revealtop < windowheight - revealpoint) {
                reveals[i].classList.add('active');
            } else {
                reveals[i].classList.remove('active');
            }
        }
    }

    window.addEventListener('scroll', reveal);
});*/

document.addEventListener('DOMContentLoaded', function () {
    var reveals = document.querySelectorAll('.reveal');
    var typedStarted = false; // Track if Typed.js has started

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function reveal() {
        for (var i = 0; i < reveals.length; i++) {
            if (isElementInViewport(reveals[i])) {
                reveals[i].classList.add('active');
                if (reveals[i].classList.contains('text') && !typedStarted) {
                    startTyped();
                    typedStarted = true;
                }
            } else {
                reveals[i].classList.remove('active');
            }
        }
    }

    var typeInitialized = false;

    function startTyped() {
        if (!typeInitialized) {
            var typed = new Typed(".reveal.text", {
                strings: ["Basic Informations"],
                startDelay: 500,
                typeSpeed: 50,
                backSpeed: 50,
                backDelay: 1000,
                cursorChar: "|",
                showCursor: true,
                loop: true,
            });
            typeInitialized = true;
        }
    }

    document.styleSheets[0].insertRule(".typed-cursor { font-size: 32px !important; }");

    window.addEventListener('scroll', reveal);
    reveal(); // Call reveal() initially to check if the elements are in view when the page loads
});

document.addEventListener('DOMContentLoaded', function () {
    var reveals = document.querySelectorAll(' .item-1-text, .item-3-text, .basic-info-btn, .my-image, .family-info-p, .family-info-header, .mama-image, .papa-image, .cats-image-1, .cats-image-2, .education-header, .elementary-img, .jhs-img, .shs-img, .elementary-content, .jhs-content, .shs-content, .education-projects-btn');

    function reveal() {
        for (var i = 0; i < reveals.length; i++) {
            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 150;

            if (revealtop < windowheight - revealpoint) {
                reveals[i].classList.add('active');
            } else {
                reveals[i].classList.remove('active');
            }
        }
    }

    window.addEventListener('scroll', reveal);
});

const dropdown = document.querySelector('.dropdown');

dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('show');
})