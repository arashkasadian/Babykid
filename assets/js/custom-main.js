///////////START OF 2SIDED RANGE

var lowerSliderMobile = document.querySelector('#lower-mobile'),
upperSliderMobile = document.querySelector('#upper-mobile'),
lowerValMobile = parseInt(lowerSliderMobile.value);
upperValMobile = parseInt(upperSliderMobile.value);

upperSliderMobile.oninput = function () {
lowerValMobile = parseInt(lowerSliderMobile.value);
upperValMobile = parseInt(upperSliderMobile.value);

if (upperValMobile < lowerValMobile + 4) {
    lowerSliderMobile.value = upperValMobile - 4;

    if (lowerValMobile == lowerSliderMobile.min) {
        upperSliderMobile.value = 4;
    }
}
document.querySelector('#upper-text-mobile').innerHTML=upperSliderMobile.value *100000;
};


lowerSliderMobile.oninput = function () {
    lowerValMobile = parseInt(lowerSliderMobile.value);
    upperValMobile = parseInt(upperSliderMobile.value);

    if (lowerValMobile > upperValMobile - 4) {
        upperSliderMobile.value = lowerValMobile + 4;

        if (upperValMobile == upperSliderMobile.max) {
            lowerSliderMobile.value = parseInt(upperSliderMobile.max) - 4;
        }

    }
    document.querySelector('#lower-text-mobile').innerHTML=lowerSliderMobile.value *100000  ;
};

var lowerSlider = document.querySelector('#lower'),
upperSlider = document.querySelector('#upper'),
lowerVal = parseInt(lowerSlider.value);
upperVal = parseInt(upperSlider.value);

upperSlider.oninput = function () {
lowerVal = parseInt(lowerSlider.value);
upperVal = parseInt(upperSlider.value);

if (upperVal < lowerVal + 4) {
    lowerSlider.value = upperVal - 4;

    if (lowerVal == lowerSlider.min) {
        upperSlider.value = 4;
    }
}
document.querySelector('#upper-text').innerHTML=upperSlider.value *100000;
};


lowerSlider.oninput = function () {
lowerVal = parseInt(lowerSlider.value);
upperVal = parseInt(upperSlider.value);

if (lowerVal > upperVal - 4) {
    upperSlider.value = lowerVal + 4;

    if (upperVal == upperSlider.max) {
        lowerSlider.value = parseInt(upperSlider.max) - 4;
    }

}
document.querySelector('#lower-text').innerHTML=lowerSlider.value *100000  ;
};

///////////////END OF 2SIDED RANGE


////////////// SWIPER FOR MAIN PAGE
var swiper = new Swiper('.main-swiper', {
    effect: 'fade',
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '</span>';
        },
    },
});
////////////// SWIPER FOR MAIN PAGE END
