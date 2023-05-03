const headerSwiper = new Swiper('.header__slider', {
  direction: 'horizontal',
  slidesPerView: 'auto',
  grabCursor: true,
  spaceBetween: 0,
  loop: true,

  autoplay: {
    delay: 3000,
  },
});