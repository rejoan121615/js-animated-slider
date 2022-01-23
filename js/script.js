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
    // utility or helper function
    function activeImgText() {
        const getText = getActiveItem.querySelector(".slider__content");
        const getImg = getActiveItem.querySelector(".img__container");
        return [getText, getImg];
    }
    function removeClass(items, classList) {
        items.forEach((item, index) => {
            // item.classList.remove()
        });
    }
    // slider functions data 
    const slidesItemsList = [];
    // control function
    leftBtn.onclick = function () {
        const [text, img] = activeImgText();
        text.classList.add("textMountSlide");
        img.classList.add("imgMountSlide");
        setTimeout(() => {
            text.classList.remove("textMountSlide");
            img.classList.remove("imgMountSlide");
        }, 1100);
    };

    rightBtn.onclick = function () {
        const [text, img] = activeImgText();
        text.classList.add("textUnmountSlide");
        img.classList.add("imgUnmountSlide");
        setTimeout(() => {
            text.classList.remove("textUnmountSlide");
            img.classList.remove("imgUnmountSlide");
            const removedItem = getActiveItem;
            getActiveItem.remove();
            slidesWrapper.appendChild(removedItem);
            snapShortSlides()[0].classList.add("active")
        }, 1100);
    };

    function snapShortSlides() {
        return document.querySelectorAll("#slider .slides__item");
    }
    // core slider function
    const coreSlider = () => {
        
    }
    return {
        slideLeft: function () {
            console.log("hello rejoan");
        },
    };
}

const slider = new Slider();
