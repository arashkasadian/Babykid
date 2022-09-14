////////////// SWIPER FOR PRODUCT

var productswiper = new Swiper('.product-swiper', {
    pagination: {
        el: '.swiper-pagination',
    },
});
////////////// SWIPER FOR PRODUCT END

////////////// SWIPER FOR reviewswiper

var reviewswiper = new Swiper('.review-swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: {
        375: {
            slidesPerView: 2,
        },
        760: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 5,
        },
    }
});
////////////// SWIPER FOR reviewswiper end


////////////// SWIPER FOR similars
var similarsswiper = new Swiper('.similars-swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        760: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 5,
        },
    }
});
////////////// SWIPER FOR similars end
