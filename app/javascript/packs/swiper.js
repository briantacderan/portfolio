var swiperOne = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  effect: 'fade',
  loop: true,
  speed: 300,
  mousewheel: {
    invert: false,
    forceToAxis: true
  },
  pagination: {
    el: '.swiper-pagination.collection',
    clickable: true,
    dynamicBullets: true
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next.collection',
    prevEl: '.swiper-button-prev.collection',
  }
});


window.onscroll = function() {
  const nav = document.getElementById('scroll-top');
  if (window.pageYOffset > 750) {
      nav.classList.add("opaque");
  } else {
      nav.classList.remove("opaque");
  }
}

function preload(arrayOfImages) {
  $(arrayOfImages).each(function(){
    $('<img/>')[0].src = this;
  });
}

const aws = 'https://bullseye-studio.s3.us-west-1.amazonaws.com/';

preload([
  `${aws}backgrounds/soma.png`,
  `${aws}backgrounds/soma-mobile.png`,
  `${aws}talent/lexi.png`,
  `${aws}talent/bea.png`,
  `${aws}talent/brian.png`
])
