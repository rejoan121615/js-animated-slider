// get all tags
const slides = element(false, ".slides__item");
const [leftBtn, rightBtn] = element(false, ".btn__wrap .btn");
const sliderWrap = element(true, ".slide__item__wrap");

let snapShortStore = [];
let counter = 0;

function element(single, tag) {
    if (single) {
        return document.querySelector(tag);
    }
    return document.querySelectorAll(tag);
}

function takeSlidesSnapshort() {
    return element(false, ".slides__item");
}

function clearSliderWrap() {
    takeSlidesSnapshort().forEach((item, index) => {
        item.remove();
    });
    // takeSlidesSnapshort().forEach((item, index) => {
    //     console.log(item);
    //     item.classList.add("transX")
    // });
    // setTimeout(() => {
    //     const firstItem = document.querySelector(".slides__item");
    //     firstItem.remove()
    // }, 1000)
    // unMountEffect();
}

function mountEffect() {
    const [text, image] = slides[counter].children;
    text.classList.add("imgMountSlide");
    image.classList.add("textMountSlide");
}

function unMountEffect() {
    const [text, image] = document.querySelector(".slides__item").children;
    text.classList.remove("imgMountSlide");
    image.classList.remove("textMountSlide");
    text.classList.add("imgUnmountSlide");
    image.classList.add("textUnmountSlide");
}

leftBtn.onclick = function () {
    clearSliderWrap();
    counter === 0 ? (counter = slides.length - 1) : counter--;
    sliderWrap.appendChild(slides[counter]);
    mountEffect();

    // const [text, image] = document.querySelector(".slides__item").children;
    // console.log(text.classList.remove("imgMountSlide"));
    // console.log(image.classList.remove("textMountSlide"));
};
rightBtn.onclick = function () {
    clearSliderWrap();
    counter >= slides.length - 1 ? (counter = 0) : counter++;
    sliderWrap.appendChild(slides[counter]);
    mountEffect();
};
