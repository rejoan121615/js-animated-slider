var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}



// const slides = document.querySelectorAll(".mySlides");
// console.log(slides)


// slides[0].addEventListener("swipe", () => {
//   console.log('do something')
// })

// document.addEventListener("touched", () => {
//   console.log('hello')
// });


class Swipe {
    constructor(element) {
        this.xDown = null;
        this.yDown = null;
        this.element =
            typeof element === "string"
                ? document.querySelector(element)
                : element;

        this.element.addEventListener(
            "touchstart",
            function (evt) {
                this.xDown = evt.touches[0].clientX;
                this.yDown = evt.touches[0].clientY;
            }.bind(this),
            false
        );
    }

    onLeft(callback) {
        this.onLeft = callback;

        return this;
    }

    onRight(callback) {
        this.onRight = callback;

        return this;
    }

    onUp(callback) {
        this.onUp = callback;

        return this;
    }

    onDown(callback) {
        this.onDown = callback;

        return this;
    }

    handleTouchMove(evt) {
        if (!this.xDown || !this.yDown) {
            return;
        }

        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;

        this.xDiff = this.xDown - xUp;
        this.yDiff = this.yDown - yUp;

        if (Math.abs(this.xDiff) > Math.abs(this.yDiff)) {
            // Most significant.
            if (this.xDiff > 0) {
                this.onLeft();
            } else {
                this.onRight();
            }
        } else {
            if (this.yDiff > 0) {
                this.onUp();
            } else {
                this.onDown();
            }
        }

        // Reset values.
        this.xDown = null;
        this.yDown = null;
    }

    run() {
        this.element.addEventListener(
            "touchmove",
            function (evt) {
                this.handleTouchMove(evt).bind(this);
            }.bind(this),
            false
        );
    }
}



var swiper = new Swipe("#my-element");
swiper.onLeft(function () {
    console.log("You swiped left.");
});
swiper.run();
var swiper = new Swipe("#my-element");
swiper.onRight(function () {
    console.log("You swiped right.");
});
swiper.run();