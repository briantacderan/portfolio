import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

document.addEventListener("turbolinks:load", function() {

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
      $('<image/>')[0].href = this;
    });
  }

  const aws = 'https://tacderan-code.s3.us-west-1.amazonaws.com/images/new/';

  preload([
    `${aws}sf-bridge.png`,
    `${aws}sf-front-mtn-full.png`,
    `${aws}sf-skyline-shadow.png`,
    `${aws}sf-mtn-left.png`,
    `${aws}sf-baywater.png`,
    `${aws}sf-front-mtn-white.png`
  ])

  const WOW = require('wowjs');
  window.wow = new WOW.WOW({
    live: false
  });
  window.wow.init();

  setTimeout(() => {

    $('body').imagesLoaded(function() {
    // $('div.intro.projects div.image-three').imagesLoaded(function() {
      document.getElementById('loading-page').classList.add('page-loaded');
      document.querySelector('html').classList.add('page-loaded');
      document.querySelector('body').classList.add('page-loaded');

      setTimeout(() => {
        document.getElementById('loading-page').classList.add('undisplay');
      }, '1000');

      console.clear();
      console.log('SVG loaded!');
    });

  }, '2500');

});
