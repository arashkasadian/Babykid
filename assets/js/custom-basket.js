//// increase or decrease amount of product handle
var decreasebtn = document.querySelectorAll("#decreasebtn");
var increasebtn = document.querySelectorAll("#increasebtn");
var ampontinp = document.querySelectorAll("#amountinp");
ampontinp.forEach((element, index) => {
    decreasebtn[index].onclick = () => {
        if (ampontinp[index].value > 1) {
            document.querySelectorAll("#amountinp")[index].value--;
        }
    }
    increasebtn[index].onclick = () => {
        if (ampontinp[index].value < 9) {
            document.querySelectorAll("#amountinp")[index].value++;
        }
    }
});
//// increase or decrease amount of product handle end



///////swiper for sets product
var setsswiper = new Swiper('.sets-swiper', {
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
///////swiper for sets product end
