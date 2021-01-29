// ------------- VARIABLES ------------- //
var ticking = false;
var isFirefox = (/Firefox/i.test(navigator.userAgent));
var isIe = (/MSIE/i.test(navigator.userAgent)) || (/Trident.*rv\:11\./i.test(navigator.userAgent));
var scrollSensitivitySetting = 45; //Increase/decrease this number to change sensitivity to trackpad gestures (up = less sensitive; down = more sensitive)
var slideDurationSetting = 600; //Amount of time for which slide is "locked"
var currentSlideNumber = 0;
var totalSlideNumber = $(".s").length;

// ------------- DETERMINE DELTA/SCROLL DIRECTION ------------- //
function parallaxScroll(evt) {
  var div = document.getElementById('slide-box');
  var flag = false;
  function touchStart() {
    div.style.color = "black";
  }
  function touchEnd() {
    var $target = evt.target;
    if ($target === div || div.contains($target)) {
      div.style.color = "#26384E";
    }
  }
  function mouseOver() {
    div.style.color = "black";
  }
  function mouseOut() {
    div.style.color = "#26384E";
  }
  div.addEventListener("mouseover", mouseOver);
  div.addEventListener("mouseout", mouseOut);
  div.addEventListener("touchstart", touchStart);
  div.addEventListener("touchend", touchEnd);
  if (div.style.color === "black") {
    return;
  }

  if (isFirefox) {
    //Set delta for Firefox
    delta = evt.detail * (-120);
  } else if (isIe) {
    //Set delta for IE
    delta = -evt.deltaY;
  } else {
    //Set delta for all other browsers
    delta = evt.wheelDelta;
  }

  if (ticking != true) {
    if (delta <= -scrollSensitivitySetting) {
      //Down scroll
      ticking = true;
      if (currentSlideNumber !== totalSlideNumber - 1) {
        currentSlideNumber++;
        nextItem();
      }
      slideDurationTimeout(slideDurationSetting);
    }
    if (delta >= scrollSensitivitySetting) {
      //Up scroll
      ticking = true;
      if (currentSlideNumber !== 0) {
        currentSlideNumber--;
      }
      previousItem();
      slideDurationTimeout(slideDurationSetting);
    }
  }
}

// ------------- SET TIMEOUT TO TEMPORARILY "LOCK" SLIDES ------------- //
function slideDurationTimeout(slideDuration) {
  setTimeout(function() {
    ticking = false;
  }, slideDuration);
}

// ------------- ADD EVENT LISTENER ------------- //
var mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
window.addEventListener(mousewheelEvent, _.throttle(parallaxScroll, 60), false);

window.addEventListener("touchmove", _.throttle(parallaxScroll, 60), false);

// ------------- SLIDE MOTION ------------- //
function nextItem() {
  var $target = $('.active').next('.s');
  if ($target.length == 0)
    $target = $('.s:first');

  $('html, body').animate({
    scrollTop: $target.offset().top + 20
  }, 'slow');

  $('.back').removeClass('back').addClass('back-back');
  $('.active').removeClass('active').addClass('back');
  $target.addClass('active');
};

function previousItem() {
  var $target = $('.s.back');
  if ($target.length == 0)
    $target = $('.s:first');

  $('html, body').animate({
    scrollTop: $target.offset().top + 20
  }, 'slow');

  $('.active').removeClass('active').addClass('forward');
  $('.back-back').removeClass('back-back').addClass('back');
  $target.removeClass('back').addClass('active');
};
