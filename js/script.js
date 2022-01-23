function Slider() {
    // get all slider element
    const getAllSlides = document.querySelectorAll("#slider .slides__item");
    const [leftBtn, rightBtn] = document.querySelectorAll(
        "#slider .slide__btn .btn"
    );
    const getActiveItem = document.querySelector(
        "#slider .slides__item.active"
    );
    const slidesWrapper = document.querySelector(".slide__item__wrap");
    // all current slides
    let currentSlideSnapshot = [...getAllSlides];
    // utility or helper function
    function activeImgText() {
        const getText = getActiveItem.querySelector(".slider__content");
        const getImg = getActiveItem.querySelector(".img__container");
        return [getText, getImg];
    }

    function classUtl(element) {
        let item = document.querySelector(element);
        return {
            add: function (i) {
                item.classList.add(i);
                return this;
            },
            remove: function (i) {
                item.classList.remove(i);
                return this;
            },
        };
    }

    function markActive() {
        const slides = snapShortSlides();
        slides.forEach((item, index) => {
            item.classList.remove("active");
        });
        slides[0].classList.add("active");
    }
    markActive();

    function removeEffect() {
        document
            .querySelector(".active .slider__content")
            .classList.remove("imgMountSlide");
        document
            .querySelector(".active .img__container")
            .classList.remove("textMountSlide");
    }

    // unmount effect
    function unmountAll() {
        removeEffect();
        classUtl(".active .slider__content").add("imgUnmountSlide");
        classUtl(".active .img__container").add("textUnmountSlide");
        return setTimeout(() => {
            return true;
        }, 1000);
    }

    // control function
    leftBtn.onclick = function () {
        removeEffect();
        let sliderItemsList = document.querySelectorAll(".slides__item");
        const lastItem = sliderItemsList[sliderItemsList.length - 1];
        slidesWrapper.prepend(lastItem);
        markActive();
        classUtl(".active .slider__content").add("imgMountSlide");
        classUtl(".active .img__container").add("textMountSlide");
    };

    rightBtn.onclick = function () {
        removeEffect();
        let currentActive = document.querySelector(".active");
        currentActive.remove();
        slidesWrapper.appendChild(currentActive);
        markActive();
        classUtl(".active .slider__content").add("imgMountSlide");
        classUtl(".active .img__container").add("textMountSlide");
    };

    function snapShortSlides() {
        return document.querySelectorAll("#slider .slides__item");
    }
    // core slider function
    const coreSlider = () => {};
    return {
        slideLeft: function () {
            console.log("hello rejoan");
        },
    };
}

const slider = new Slider();
