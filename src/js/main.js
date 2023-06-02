new Swiper('.house-slider' , {
    // Стрелки
    navigation: {
        nextEl: 'swiper-button-next',
        prevEl: 'swiper-button-prev',
    },
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //     dynamicBullets: true,
    // },
        autoHeight: true,
        slidesPerView: 1,
        spaceBetween: -350,
        loop: true,

    breakpoints: {
        // 320: {
        //     slidesPerView: 1
        // },
        // 768: {
        //     slidesPerView: 1
        // },
        1170: {
            slidesPerView: 2
        },
        // 1920: {
        //     slidesPerView: 4
        // }
    }
    
});


new Swiper('.main-review__swiper', {
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
        },
        autoHeight: true,
        // slidesPerView: 1,
        spaceBetween: 250,
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
