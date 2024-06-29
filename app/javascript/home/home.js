// import gsap from "gsap"
// import ScrollTrigger from "./gsap/ScrollTrigger"
// import ScrollToPlugin from "./gsap/ScrollToPlugin"
// import Lenis from "../../../node_modules/lenis"

// import { GLTFLoader } from '/vendor/mods/three/addons/loaders/GLTFLoader.js'
// import { RGBELoader } from '/vendor/mods/three/addons/loaders/RGBELoader.js'


window.addEventListener("load", (event) => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(ScrollToPlugin)

  // if(!Turbolinks) location.reload();
  // Turbolinks.dispatch("turbolinks:load");

  let myReq, start, lenis

  //if(window.innerWidth > 700) {
    if(localStorage.getItem('scrollEnabled') != 'yes') {
      /* window.scrollTo(0, 0)
      disableScroll()

      setTimeout(() => {
        cancelAnimationFrame(myReq)

      }, '3500') */
    } else {
      // enableScroll()
      setTimeout(() => {
        myReq = requestAnimationFrame(raf)
        enableScroll()
      }, '1500')
    }

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
      height: '300%',
      maxWidth: '1000px',
      top: 0,
    })

    gsap.set('.scrollDist', {
      width: '100%',
      height: '300%',
      maxWidth: '1000px',
    })

    gsap.set('.about', {
      width: '1000px',
      height: '230%',
      top: '2800px',
    })

    gsap.set('.projects', {
      width: '1000px',
      height: '100%',
      top: '4800px',
    })

    gsap.from('h1#me-intro', {
      rotationY: 80,
      opacity: 0,
      duration: 1,
      yPercent: 0, // -50,
      stagger: 0.1,
      ease:"power4.easeOut",
      scrollTrigger: {
        trigger: 'img#me-photo',
        start: 'bottom 80%',
      }
    })

    /*gsap.from('h1#me-intro.mobile-view', {
      delay: 3000,
      rotationY: 80,
      opacity: 0,
      duration: 1,
      yPercent: 0, // -50,
      stagger: 0.1,
      ease:"power4.easeOut",
      scrollTrigger: {
        trigger: 'img#me-photo',
        start: 'bottom 80%',
      }
    }) */

    gsap.utils.toArray(".me-container").forEach(function(container) {
      let words = container.querySelector("#me")

      gsap.from(words, {
        rotationY: 36,
        opacity: 0,
        duration: 1,
        yPercent: -100, // -50,
        stagger: 0.1,
        ease:"power4.easeOut",
        scrollTrigger: {
          trigger: words,
          start: 'bottom 80%',
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

    gsap.from("p.mission-content", {
      rotationY: 80,
      opacity: 0,
      duration: 1.5,
      yPercent: 0,
      stagger: 0.1,
      ease:"power4.easeIn",
      scrollTrigger: {
        trigger: 'h1#mission-title',
        start: 'bottom 80%',
      }
    })

    tl2.fromTo('.mtn-front', {y:100,scale:1},{y:-1300,scale:2}, 0)
    tl2.fromTo('.baywater', {y:-200},{y:-650}, 0)
    tl2.fromTo('.mtn-full', {y:450},{y:200}, 0)
    tl2.fromTo('.bkg-skyline', {y:-150},{y:-900}, 0)
    tl2.fromTo('.mtn-left', {y:-550},{y:-1000}, 0)
    tl2.fromTo('.bridge', {y:-200},{y:-600}, 0)
    tl2.fromTo('.inspire', {y:400,opacity:1},{y:250,opacity:0}, 0)

    tl.fromTo('.mtn-front', {y:480},{y:100}, 0)
    tl.fromTo('.baywater', {y:450},{y:-200}, 0)
    tl.fromTo('.mtn-full', {y:900},{y:450}, 0)
    tl.fromTo('.bkg-skyline', {y:450},{y:-150}, 0)
    tl.fromTo('.mtn-left', {y:400,scale:1},{y:-550,scale:1.3}, 0)
    tl.fromTo('.bridge', {y:-850,scale:2},{y:-200,scale:1}, 0)
    tl.fromTo('.arrow', {y:0},{y:5000}, 0)
    tl.fromTo('.inspire', {y:-400,scale:0},{y:400,scale:1.65}, 0)

    let body = $('html, body')

    let startTime

    countG()

    function countG() {
      startTime = Date.now()

      setTimeout(() => {

        gsap.utils.toArray('g').forEach(function(parent) {
          $('rect').on('click', function() {
            if(localStorage.getItem('scrollEnabled') != 'yes') {

              enableScroll()
              localStorage.setItem('scrollEnabled', 'yes')

              myReq = requestAnimationFrame(raf)

              setTimeout(() => {
                gsap.to(window, {
                  scrollTo: '.bkg-skyline',
                  duration: 1.5,
                  ease: 'power1.inOut'
                })
              }, '500')
            }
          })
        })

      }, '1500')
    }


    // scrollTo requires the ScrollTo plugin
    // (not to be confused w/ ScrollTrigger)

    gsap.to(".pContent", {
      yPercent: -40,
      ease: "none",
      scrollTrigger: {
        trigger: ".pSection",
        scrub: true
      },
    })

    gsap.to(".pContent", {
      yPercent: -40,
      ease: "none",
      scrollTrigger: {
        trigger: ".pSection",
        scrub: true
      },
    })

    gsap.utils.toArray(".image-container").forEach(function(container) {
      let image = container.querySelector("img")

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
      })
    })

    gsap.utils.toArray(".project-img").forEach(function(container) {
      let image = container.querySelector("img")

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
      })

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
        })
      })
    })

    const requestAnimationFrame =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame

    const cancelAnimationFrame =
    window.cancelAnimationFrame ||
    window.mozCancelAnimationFrame

    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    })

    function raf(time) {
      lenis.raf(time)
      ScrollTrigger.update()
      myReq = requestAnimationFrame(raf)
    }


    // SCROLL DISABLER
    // left: 37, up: 38, right: 39, down: 40,
    // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
    var keys = {37: 1, 38: 1, 39: 1, 40: 1}

    function preventDefault(e) {
      e.preventDefault()
    }

    function preventDefaultForScrollKeys(e) {
      if (keys[e.keyCode]) {
        preventDefault(e)
        return false
      }
    }

    // modern Chrome requires { passive: false } when adding event
    var supportsPassive = false
    try {
      window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; }
      }));
    } catch(e) {}

    var wheelOpt = supportsPassive ? { passive: false } : false;
    var wheelEvent = 'onwheel' in document.createElement('div')
                     ? 'wheel' : 'mousewheel'

    // call this to Disable
    function disableScroll() {
      window.addEventListener('DOMMouseScroll', preventDefault, false) // older FF
      window.addEventListener(wheelEvent, preventDefault, wheelOpt) // modern desktop
      window.addEventListener('touchmove', preventDefault, wheelOpt) // mobile
      window.addEventListener('keydown', preventDefaultForScrollKeys, false)
    }

    // call this to Enable
    function enableScroll() {
      window.removeEventListener('DOMMouseScroll', preventDefault, false)
      window.removeEventListener(wheelEvent, preventDefault, wheelOpt)
      window.removeEventListener('touchmove', preventDefault, wheelOpt)
      window.removeEventListener('keydown', preventDefaultForScrollKeys, false)
    }

    /*function countG() {
      setTimeout(() => {

        let numG = 0

        while(numG < 3) {
          if ((numG == 0) && (Date.now()-startTime > 12000)) {
            numG = 3
          } else {
            gsap.utils.toArray("g").forEach(function(gect) {
              if (gect != undefined) numG++
              else numG = 0
            }
          }
        }

        rect.on('click', function() {
          if(localStorage.getItem('scrollEnabled') != 'yes') {

            enableScroll()
            localStorage.setItem('scrollEnabled', 'yes')

            myReq = requestAnimationFrame(raf)

            // preloadModels()

            setTimeout(() => {
              gsap.to(window, {
                scrollTo: '.bkg-skyline',
                duration: 1.5,
                ease: 'power1.inOut'
              })
            }, '500')
          } else {
            enableScroll()
            setTimeout(() => {
              myReq = requestAnimationFrame(raf)
              enableScroll()
            }, '500')
          }
        }
      }, '1500')
    } */

    /* PRELOAD
    const aws = 'https://tacderan-code.s3.us-west-1.amazonaws.com/'
    const id = {
      loc: 'table_mountain_2',    						 						// Location
      mod: 'puddles',																			// Model
      dim: {																							// Dimensions
        w: window.innerWidth,																	// width
        h: window.innerHeight,																// height
      },
    }

    async function preloadModels() {
      const rgbeLoader = new RGBELoader().setPath(`${aws}textures/equirectangular/`)
    	const gltfLoader = new GLTFLoader().setPath(`${aws}models/gltf/`)

      const [ texture, gltf ] = await Promise.all([
        rgbeLoader.loadAsync(`${id.loc}/${id.loc}_1k.hdr`), gltfLoader.loadAsync(`${id.mod}/${id.mod}.gltf`)
      ])

      window.texture = JSON.stringify(texture, { clicked: true })
      window.gltf = JSON.stringify(gltf, { clicked: true })
    } */
  // }
})

/* window.onbeforeunload = function() {
  window.scrollTo(0, 0)
  console.log('one')
} */

window.onbeforeunload = function() {
  console.log('beforecache-unload')
  // document.getElementById('loading-page').classList.remove('undisplay')
  // window.scrollTo('#loading-page')
  cancelAnimationFrame(myReq)
  tl.pause(0)
  tl2.pause(0)
  lenis.stop()
  gsap.kill()
}
