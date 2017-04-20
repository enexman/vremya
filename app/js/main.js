(function() {
    var Slider = function() {
        this.sliderContainer = document.querySelector('.slider');
        this.sliderElements = this.sliderContainer.querySelectorAll('.slider__item');
        this.sliderNavigation = this.sliderContainer.querySelector('.slider__nav');
        this.activeElement = 0;
        this.TIMEOUT = 8000;
    };

    Slider.prototype.changeActiveSlider = function() {
        this.searchActiveElement = this.searchActiveElement.bind(this);
        Array.prototype.forEach.call(this.sliderElements, this.searchActiveElement);
    };

    Slider.prototype.searchActiveElement = function(item, index) {
        if (index !== this.activeElement) {
            item.classList.remove('slider__item--active');
            item.classList.remove('animation-img');
            this.sliderNavigation.children[index].classList.remove('slider__btn--active');
        } else {
            item.classList.add('slider__item--active');
            item.classList.add('animation-img');
            this.sliderNavigation.children[index].classList.add('slider__btn--active');
        }
    };

    Slider.prototype.addEventListeners = function() {
        this.clickNavigation = this.clickNavigation.bind(this);
        this.sliderNavigation.addEventListener('click', this.clickNavigation);
    };

    Slider.prototype.clickNavigation = function (evt) {
        switch (evt.target.id) {

            case 'first-slide' : this.activeElement = 0;
                this.changeActiveSlider();
                clearInterval(this.intervalId);
                this.animationSlides();
                break;

            case 'second-slide' : this.activeElement = 1;
                this.changeActiveSlider();
                clearInterval(this.intervalId);
                this.animationSlides();
                break;

            case 'third-slide' : this.activeElement = 2;
                this.changeActiveSlider();
                clearInterval(this.intervalId);
                this.animationSlides();
                break;
        }
    };

    Slider.prototype.animationSlides = function() {
        this.intervalFn = this.intervalFn.bind(this);
        this.intervalId = setInterval(this.intervalFn, this.TIMEOUT);
    };

    Slider.prototype.intervalFn = function() {
        (this.activeElement >= this.sliderElements.length - 1) ? this.activeElement = 0 : this.activeElement++;
        this.changeActiveSlider();
    };

    Slider.prototype.start = function() {
        this.changeActiveSlider();
        this.addEventListeners();
        this.animationSlides();
    };

    new Slider().start();
})()
