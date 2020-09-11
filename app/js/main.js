$(function () {

    $('.products__slider').slick({
        prevArrow: '<button class="slider-btn slider-btn__left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17"/></svg></button>',
        nextArrow: '<button class="slider-btn slider-btn__right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1"/></svg></button>',
        infinite: false
    });

    $('.questions__item-title').on('click', function () {
            $('.questions__item').removeClass('questions__item--active');
            $(this).parent().addClass('questions__item--active');
        }
    )

    $('#fullpage').fullpage({
        autoScrolling: true,
        scrollHorizontally: true,
        navigation: true,
        sectionSelector: '.page-section',
        responsiveWidth: 1200,
    });

    //adding the action to the button
    $(document).on('click', '.scroll__btn', function () {
        fullpage_api.moveSectionDown();
    });

});


window.addEventListener('scroll', () => {
    let header = document.querySelector('.header');

    header.style.background = window.scrollY > 50 ? 'rgba(0, 0, 0, .8)' : 'transparent';
})

//MOBILE MENU
let button = document.querySelector('.header__hamburger');
let menu = document.querySelector('.mobile__menu');
let body = document.querySelector('body');
let overlay = document.querySelector('.overlay_menu');
let links = document.querySelectorAll('.mobile__menu-link');

button.addEventListener('click', () => {
    button.classList.toggle('cross');
    menu.classList.toggle('active');
    body.classList.toggle('noscroll');
    overlay.classList.toggle('visible');
});

links.forEach(function (link) {
    link.addEventListener('click', function () {
        menu.classList.toggle('active');
        button.classList.toggle('cross');
        body.classList.toggle('noscroll');
        overlay.classList.toggle('visible');
    })
})

overlay.addEventListener('click', function () {
    this.classList.remove('visible');
    menu.classList.remove('active');
    body.classList.remove('noscroll');
    button.classList.remove('cross');
});

window.addEventListener('resize', function () {
    menu.classList.remove('active');
    body.classList.remove('noscroll');
    button.classList.remove('cross');
    overlay.classList.remove('visible');
});