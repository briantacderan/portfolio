var swiperOne = new Swiper('#swiper-1', {
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

var swiperTwo = new Swiper('#swiper-2', {
  slidesPerView: 1,
  spaceBetween: 20,
  effect: 'fade',
  loop: true,
  speed: 300,
  mousewheel: {
    invert: false,
    forceToAxis: true
  },
  /* allowTouchMove: false,
  allowSlidePrev: false,
  mousewheel: {
    invert: false,
    thresholdDelta: 7,
    thresholdTime: 1000,
  },*/
  pagination: {
    el: '.swiper-pagination.neo',
    clickable: true,
    dynamicBullets: true
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next.neo',
    prevEl: '.swiper-button-prev.neo',
  }
});
