// burger-menu
// const openBtn = document.querySelector('.header-burgermenu')
// const closeBtn = document.querySelector('.header-burgermenu-close')
// const list = document.querySelector('.header-wrapper')

// openBtn.addEventListener('click' , function() {
//     // list.style.display = 'block';
//     closeBtn.classList.toggle('header-burgermenu-active')
// })

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
