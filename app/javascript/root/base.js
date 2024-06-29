// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails

// import "./@hotwired/turbo-rails"
// import "../controllers"

/* const WOW = require('wowjs')
window.wow = new WOW.WOW({
  live: false
})
window.wow.init() */

// for no scroll at all
/* function preventMotion(event) {
  window.scrollTo(0, 0);
  event.preventDefault();
  event.stopPropagation();
}

window.addEventListener("scroll", preventMotion, false);
window.addEventListener("touchmove", preventMotion, {
  passive: false
}); */


window.addEventListener("load", (event) => {
  window.onscroll = function() {
    const nav = document.getElementById('scroll-top')
    if (window.pageYOffset > 750) {
      nav.classList.add("opaque")
    } else {
      nav.classList.remove("opaque")
    }
  }

  function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
      $('<image/>')[0].href = this
    })
  }

  const aws = 'https://tacderan-code.s3.us-west-1.amazonaws.com/'

  preload([
    `images/new/${aws}sf-bridge.png`,
    `images/new/${aws}sf-front-mtn-full.png`,
    `images/new/${aws}sf-skyline-shadow.png`,
    `images/new/${aws}sf-mtn-left.png`,
    `images/new/${aws}sf-baywater.png`,
    `images/new/${aws}sf-front-mtn-white.png`
  ])

  if(window.innerWidth > 700) {
    document.querySelector('header').addEventListener('mouseenter', function() {

      $('img#heart-logo').css('display', 'none')
      $('.icon.designs').css('display', 'flex')
      $('header h2').fadeIn('slow')
      document.querySelector('header').classList.add('popup')

    })

    document.querySelector('header').addEventListener('mouseleave', function() {

      $('img#heart-logo').css('display', 'flex')
      $('.icon.designs').css('display', 'none')
      $('header h2').fadeOut('fast')
      document.querySelector('header').classList.remove('popup')

    })
  }

  // Page Loading animation

  setTimeout(() => {

    $('body').imagesLoaded(function() {
      document.getElementById('loading-page').classList.add('page-loaded')
      document.querySelector('html').classList.add('page-loaded')
      document.querySelector('body').classList.add('page-loaded')

      setTimeout(() => {
        // removes loading page container to reverse y offset
        document.getElementById('loading-page').classList.add('undisplay')
      }, '1000')

      // console.clear();
      console.log('SVG loaded!')
    })

  }, '2500')
})
