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
        console.log(document.querySelector(".active"));
        const slides = snapShortSlides();
        slides.forEach((item, index) => {
            item.classList.remove("active");
        });
        slides[0].classList.add("active");
        classUtl(".active .slider__content").add("imgMountSlide");
        classUtl(".active .img__container").add("textMountSlide");
    }
    markActive();

    // control function
    leftBtn.onclick = function () {
        let currentActive = document.querySelectorAll(".slides__item");
        console.log(currentActive);
        const lastItem = currentActive[currentActive.length - 1];
        slidesWrapper.prepend(lastItem);
        markActive();
    };

    rightBtn.onclick = function () {
        let currentActive = document.querySelector(".active");
        currentActive.remove();
        slidesWrapper.appendChild(currentActive);
        currentSlideSnapshot = snapShortSlides();
        markActive();
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
