import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import ScrollToPlugin from "gsap/ScrollToPlugin"
import Lenis from "@studio-freight/lenis"

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

document.addEventListener("turbolinks:load", function() {

  const tl2 = gsap.timeline({
    paused: true,
    scrollTrigger: {
      scrub: 0,
      trigger: '.scrollPist',
      start: '1200vh',
      end: '2400vh',
    }
  })

  const tl = gsap.timeline({
    paused: true,
    scrollTrigger: {
      scrub: 0,
      trigger: '.scrollDist',
      start: 'top top',
      end: '1200vh',
      snap: true,
    }
  })

  gsap.set('.main', {
    position: 'fixed',
    width: '100%',
    height: '400%',
    maxWidth: '1200px',
    top: 0,
  })

  gsap.set('.scrollDist', {
    width: '100%',
    height: '400%',
  })

  gsap.set('.about', {
    width: '100%',
    height: '400%',
    top: '2400px',
  })

  gsap.set('.projects', {
    width: '100%',
    height: '300%',
    top: '4000px',
  })

  gsap.utils.toArray(".me-container").forEach(function(container) {
    let words = container.querySelector("#me");

    gsap.from(words, {
      rotationY: 36,
      opacity: 0,
      duration: 1,
      yPercent: -100, // -50,
      stagger: 0.1,
      ease:"power4.easeOut",
      scrollTrigger: {
        trigger: words,
        start: 'top center',
      }
    })
  })

  gsap.from(".skill", {
    rotationY: 36,
    opacity: 0,
    duration: 0.8,
    yPercent: -100,
    stagger: 0.1,
    ease:"Expo.easeOut",
    scrollTrigger: {
      trigger: '.pContent',
      start: 'top center',
    }
  })

  tl2.fromTo('.mtn-front', {y:0},{y:-700}, 0)
  tl2.fromTo('.baywater', {y:-300},{y:-950}, 0)
  tl2.fromTo('.mtn-full', {y:350},{y:0}, 0)
  tl2.fromTo('.bkg-skyline', {y:-300},{y:-1000}, 0)
  tl2.fromTo('.mtn-left', {y:-350},{y:-1100}, 0)
  tl2.fromTo('.bridge', {y:-300},{y:-800}, 0)
  tl2.fromTo('.inspire', {y:0},{y:-1150}, 0)
  tl2.fromTo('.think', {x:0},{x:-2850}, 0)

  tl.fromTo('.mtn-front', {y:380},{y:0}, 0)
  tl.fromTo('.baywater', {y:350},{y:-300}, 0)
  tl.fromTo('.mtn-full', {y:800},{y:350}, 0)
  tl.fromTo('.bkg-skyline', {y:350},{y:-300}, 0)
  tl.fromTo('.mtn-left', {y:300},{y:-350}, 0)
  tl.fromTo('.bridge', {y:100},{y:-300}, 0)
  tl.fromTo('.arrow', {y:850},{y:0}, 0)

  $('#arrowBtn').on('mouseenter', (e) => {
    gsap.to('.arrow', {
      y: 10,
      duration: 0.8,
      ease: 'back.inOut(3)',
      overwrite: 'auto'
    });
  })

  $('#arrowBtn').on('mouseleave', (e) => {
    gsap.to('.arrow', {
      y: 0,
      duration: 0.5,
      ease: 'power3.out',
      overwrite: 'auto'
    });
  })

  $('#arrowBtn').on('click', (e) => {
    gsap.to(window, {
      scrollTo: '.bkg-skyline',
      duration: 1.5,
      ease: 'power1.inOut'
    });
  })
  // scrollTo requires the ScrollTo plugin
  // (not to be confused w/ ScrollTrigger)

  gsap.to(".pContent", {
    yPercent: -40,
    ease: "none",
    scrollTrigger: {
      trigger: ".pSection",
      scrub: true
    },
  });

  gsap.to(".pContent", {
    yPercent: -40,
    ease: "none",
    scrollTrigger: {
      trigger: ".pSection",
      scrub: true
    },
  });

  gsap.utils.toArray(".image-container").forEach(function(container) {
    let image = container.querySelector("img");

    gsap.to(image, {
      yPercent: 30,
      y: () => image.offsetHeight - container.offsetHeight,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        scrub: true,
        pin: false,
        invalidateOnRefresh: true
      },
    });
  });

  gsap.utils.toArray(".project-img").forEach(function(container) {
    let image = container.querySelector("img");

    gsap.to(image, {
      yPercent: 30,
      y: () => image.offsetHeight - container.offsetHeight,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        scrub: true,
        pin: false,
        invalidateOnRefresh: true
      },
    });

    $(image).on('mouseenter', (e) => {
      gsap.to(container, {
        y: 15,
        duration: 0.8,
        ease: 'back.inOut(3)',
        overwrite: 'auto'
      });
    })

    $(image).on('mouseleave', (e) => {
      gsap.to(container, {
        y: 0,
        duration: 0.5,
        ease: 'power3.out',
        overwrite: 'auto'
      });
    })
  });

});

setTimeout(() => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
  });

  function raf(time) {
    lenis.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}, '3500');

document.addEventListener("turbolinks:before-cache", function() {
  gsap.scrollTo('#loading-page');
  $(window).scrollTo(0, 0);
  tl.pause(0);
  tl2.pause(0);
  lenis.stop();
  gsap.kill();
})
