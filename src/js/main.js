// burger-menu
const openBtn = document.querySelector('.header-burgermenu')
const closeBtn = document.querySelector('.header-burgermenu-close')
const list = document.querySelector('.header-wrapper')
const body = document.querySelector('body')


openBtn.addEventListener('click' , function() {
    list.classList.add('header__vissable')
    closeBtn.classList.add('header__vissable')
    openBtn.classList.add("header__hidden")
    body.classList.add('body__bg')
})

closeBtn.addEventListener('click' , function() {
    list.classList.remove('header__vissable')
    closeBtn.classList.remove('header__vissable')
    openBtn.classList.remove("header__hidden")
    body.classList.remove('body__bg')
    // list.classList.toggle('header__hidden')
    // closeBtn.classList.toggle('header__hidden')
    // openBtn.classList.toggle("header__vissable")
})

// $(document).ready(function () {
//     $(".header__burger").click(function (event) {
//       $(".header__burger,.header__menu").toggleClass("active");
//       $("body").toggleClass("lock");
//     });
//   });

new Swiper('.house-slider' , {
    // Стрелки
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    navigation: {
        nextEl: '.swiper-button-prev-recommend',
        prevEl: '.swiper-button-next-recommend',
    },
        autoHeight: true,
        slidesPerView: 1,
        spaceBetween: 40,
        loop: true,

    breakpoints: {
        900: {
            slidesPerView: 3
        },
        600: {
            slidesPerView: 2
        },
    }
    
});


new Swiper('.main-review__swiper', {
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
        },
        autoHeight: true,
        initialSlide: 1,
        // slidesPerView: 1,
        spaceBetween: 150,
        loop: true,
        slidesPerGroup: 1,
        centeredSlides: true,
        loop: true,
        // autoplay: {
        //     delay: 4000,
        //     disavleOnInterection: true,
        // },
        speed: 1000,
})
