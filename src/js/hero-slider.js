import Swiper from 'swiper/bundle';

// Javascriptからswiper.min.cssをhtmlのheadタグ内にstyleとして挿入したいときは↓
// import 'swiper/css/bundle';

class HeroSwiper {
  constructor(el) {
    this.el = el;
    this.swiper = this._initSwiper();
  }

  _initSwiper() {
    return new Swiper(this.el, {
      // Optional parameters
      // direction: 'vertical',
      loop: true,
      grabCursor: true,
      effect: 'coverflow',
      centeredSlides: true,
      slidesPerView: 1,
      speed: 1000,
      breakpoints: {
        1024: {
          slidesPerView: 2,
        },
      },
    });
  }

  start(options = {}) {
    options = Object.assign(
      {
        delay: 1000,
        disableOnInteraction: false,
      },
      options
    );

    this.swiper.params.autoplay = options;
    this.swiper.autoplay.start();
  }
  stop() {
    this.swiper.autoplay.stop();
  }
}

class NormalSwiper {
  constructor(el) {
    this.el = el;
    this.swiper = this._initSwiper();
  }

  _initSwiper() {
    return new Swiper(this.el, {
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 1.15,
      spaceBetween: 15,
      centeredSlides: true,
    });
  }
}

export { HeroSwiper, NormalSwiper };
