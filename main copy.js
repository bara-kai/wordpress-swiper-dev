import Swiper from 'swiper/bundle';

function setSwiper() {
  var mySwiper = new Swiper('.swiper', {
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
    breakpoints: {
      480: {
        spaceBetween: 20,
        slidesPerView: 1.2,
      },
      600: {
        spaceBetween: 25,
        slidesPerView: 1.4,
      },
      700: {
        spaceBetween: 30,
        slidesPerView: 1.2,
      },
      1000: {
        spaceBetween: 30,
        slidesPerView: 1.5,
        pagination: {
          renderBullet: function (index, className) {
            return (
              '<span class="' +
              className +
              '">' +
              ['ご来店', 'ご注文', 'お支払い', 'ご飲食'][index] +
              '</span>'
            );
          },
        },
      },
    },
  });
}

setSwiper();

window.addEventListener('resize', setSwiper);
