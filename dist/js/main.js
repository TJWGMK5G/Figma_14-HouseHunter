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
        slidesPerView: 2,
        spaceBetween: -350,
        loop: true,
    
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
