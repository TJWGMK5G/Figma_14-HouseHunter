new Swiper('.house-slider' , {
    // Стрелки
    navigation: {
        nextEl: 'swiper-button-next',
        prevEl: 'swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
        autoHeight: true,
        slidesPerView: 2,
        spaceBetween: -350,
        loop: true,
    
});

