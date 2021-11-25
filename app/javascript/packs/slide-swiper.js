var swiperOne = new Swiper('.swiper-container.projects', {
  slidesPerView: 1,
  spaceBetween: 20,
  effect: 'fade',
  loop: true,
  speed: 300,
  mousewheel: {
    invert: false,
  },
  pagination: {
    el: '.swiper-pagination.projects',
    clickable: true,
    dynamicBullets: true
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next.projects',
    prevEl: '.swiper-button-prev.projects',
  }
});

var swiperTwo = new Swiper('.swiper-container.neo', {
  slidesPerView: 1,
  spaceBetween: 20,
  effect: 'fade',
  loop: true,
  speed: 400,
  touchAngle: 15,
  // allowTouchMove: false,
  // allowSlidePrev: false,
  mousewheel: {
    invert: false,
  },
  pagination: {
    el: '.swiper-pagination.neo',
    clickable: true,
    dynamicBullets: true
  },
  // Navigation arrows
  navigation: {
    prevEl: '.swiper-button-prev.neo',
    nextEl: '.swiper-button-next.neo'
  }
});
