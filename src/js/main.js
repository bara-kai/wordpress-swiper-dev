import Swiper from 'swiper/bundle';
import { HeroSwiper, NormalSwiper } from './hero-slider';

document.addEventListener('DOMContentLoaded', function () {
  const heroswiper = new HeroSwiper('.hero-swiper');
  heroswiper.start({
    delay: 4000,
  });

  const normalswiper = new NormalSwiper('.normal-swiper');
});
