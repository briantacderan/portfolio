import * as THREE from '/node_modules/three/build/three.module.js'
import { OrbitControls } from '/vendor/mods/three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from '/vendor/mods/three/addons/loaders/GLTFLoader.js'
import { RGBELoader } from '/vendor/mods/three/addons/loaders/RGBELoader.js'
import { DRACOLoader } from '/vendor/mods/three/addons/loaders/DRACOLoader.js'
import { GUI } from 'dat.gui'
import gsap from 'gsap'
import { NodeMaterial, uv, vec2, checker, float, timerLocal } from '/vendor/mods/three/nodes/Nodes.js'
// import { nodeFrame } from '/vendor/mods/three/addons/renderers/webgl-legacy/nodes/WebGLNodes.js'


// if(!Turbolinks) location.reload()
// Turbolinks.dispatch('turbolinks:load')

document.addEventListener('turbolinks:load', function() {

  let canvas, id, renderer, scene, camera, controls, s3, model, car, mixer, animation, action, clip, prevTime, startTime
  let yRotation = 0

  // model animation
  // let rendered = false
  // let played = false

  s3 = 'https://tacderan-code.s3.us-west-1.amazonaws.com/'

  init().catch(err => {
  	console.error(err)
  })

  async function init() {

  	// PARAMETERS
    id = {
  		loc: 'table_mountain_2',    												// Location
  		mod: 'puddles',																			// Model
  		dim: {																							// Dimensions
  			w: window.innerWidth,																	// width
  	    h: window.innerHeight,																// height
  		},
    }

  	// CANVAS
  	canvas = document.querySelector('canvas.webgl')
  	document.getElementById.innerHTML = id.mod          	// Title

  	// RENDERER
  	renderer = new THREE.WebGLRenderer({
  		canvas: canvas,
  		antialias: true,
  		alpha: false,
  	})
  	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  	renderer.setSize(id.dim.w, id.dim.h)
  	renderer.toneMapping = THREE.ACESFilmicToneMapping
  	// renderer.outputEncoding = THREE.sRGBEncoding
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.setAnimationLoop(animate)

  	// SCENE&CAMERA
  	scene = new THREE.Scene()
  	camera = new THREE.PerspectiveCamera(50, id.dim.w/id.dim.h, 0.1, 500)
  	camera.position.y = 2
  	camera.position.x = -10
  	scene.add(camera)

  	controls = new OrbitControls(camera, canvas)

  	controls.enableDamping = true
  	controls.autoRotate = true
  	controls.autoRotateSpeed = 0.5
  	controls.enablePan = false

  	// ORBITCONTROLS
  	// controls.enableZoom = false
  	controls.minDistance = 7.0        // 10.0
  	controls.maxDistance = 35.0
  	/* For Orthographic Camera
  	controls.minZoom = 1;
  	controls.maxZoom = 2; */

  	controls.target.set(0, 2, 0)
  	controls.update()

    const light = new THREE.PointLight(0xffffff, 1, 100)
    light.position.set(0, 10, 10)
    light.intensity = 200.0
    scene.add(light)

    // if(!window.texture || !window.gltf) {
    	// LOADERS
    	const rgbeLoader = new RGBELoader().setPath(`${s3}textures/equirectangular/`)
    	const gltfLoader = new GLTFLoader().setPath(`${s3}models/gltf/`)

      const dracoLoader = new DRACOLoader()
      dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')
      dracoLoader.preload()

      const mesh = gltfLoader.load('logo/logo.gltf', function(mesh) {
        const logo = mesh.scene
        logo.position.setY(2)
        yRotation = 180
        move(logo)
        scene.add(logo)
        model = logo
      })

      const [ texture, gltf ] = await Promise.all([
    		rgbeLoader.loadAsync(`${id.loc}/${id.loc}_1k.hdr`),
        gltfLoader.loadAsync(`${id.mod}/${id.mod}.gltf`)
    	])
    /* } else {
      const texture = JSON.parse(window.texture)
      const gltf = JSON.parse(window.gltf)
    } */


    texture.mapping = THREE.EquirectangularReflectionMapping
    texture.colorSpace = THREE.LinearSRGBColorSpace
    scene.background = texture
    scene.environment = texture

    document.querySelector('div.home-title h2').style.color = 'black'

  	scene.add(gltf.scene)


    /* gltfLoader.setDRACOLoader(dracoLoader)

    gltfLoader.load('barracuda/barracuda.gltf', function(mesh) {
      car = mesh
      model = mesh.scene
      model.position.setY(0)
      yRotation = 0

      $('#gltf1').on('click', function() {
        if(rendered && !played) {
          startTime = Date.now()
          prevTime = Date.now()

          animation = car.animations
          clip = animation[0]
          console.log(car.animations)
          mixer = new THREE.AnimationMixer(model)
          action = mixer.clipAction(clip).setDuration(6000)
          action.play()
          played = true
        }
      }, false)

      scene.add(model)
      rendered = true
    }) */


  	for(var i=0; i<scene.length; i++) {
  		console.log(scene[i].isMesh)
  	}

  	window.addEventListener('resize', onWindowResize)

    /* texture = await rgbeLoader.load(`${id.loc}/${id.loc}_4k.hdr`, textureScene)
    texture = await rgbeLoader.load(`${id.loc}/${id.loc}_8k.hdr`, textureScene) */
  }

  /* RAYCASTER
  const raycaster = new THREE.Raycaster()
  const mouse = new THREE.Vector2()

  let intersects = []
  let hovered = {}

  window.addEventListener('mousemove', (e) => {
    mouse.set((e.clientX / id.dim.w) * 2 - 1, -(e.clientY / id.dim.h) * 2 + 1)
    raycaster.setFromCamera(mouse, camera)
    intersects = raycaster.intersectObjects(scene.children, true)

    // If a previously hovered item is not among the hits we must call onPointerOut
    Object.keys(hovered).forEach((key) => {
      const hit = intersects.find((hit) => hit.object.uuid === key)
      if (hit === undefined) {
        const hoveredItem = hovered[key]
        if (hoveredItem.object.onPointerOver) hoveredItem.object.onPointerOut(hoveredItem)
        delete hovered[key]
      }
    })

    intersects.forEach((hit) => {
      // If a hit has not been flagged as hovered we must call onPointerOver
      if (!hovered[hit.object.uuid]) {
        hovered[hit.object.uuid] = hit
        if (hit.object.onPointerOver) hit.object.onPointerOver(hit)
      }
      // Call onPointerMove
      if (hit.object.onPointerMove) hit.object.onPointerMove(hit)
    })
  }, { passive: false }) */

  /*
  const title = document.querySelector('div#title')
  const cats = document.querySelector('div#categories')
  const photos = document.querySelector('div#title')
  const backbtn = document.querySelector('div#back-button')

  function pickSet(num) {
    title.classList.add('undisplay')
    catrs.classList.add('undisplay')
    switch num {
      case 1:

    }
  } */

  let currentlyPlaying = false

  // barracude1968
  document.getElementById('btn1').addEventListener('mouseup', function() {

    $('#categories ul').fadeOut('slow')
    $('#video, #overlay').fadeIn('fast')
    document.getElementById('video').classList.add('display')
    document.getElementById('overlay').classList.add('display')
    document.querySelector('#screen-filter').classList.add('theatre')
    document.querySelector('#title.home-title').classList.add('theatre')


    try {
      $('#video').html('<iframe id="ytplayer" type="text/html" width="1120" height="630" src="https://www.youtube.com/embed/Q2fOHzbFnkE?si=4Fh0JclhGPumgQoA&amp;controls=0&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>')
    } catch(err) {
      console.log(err)
    }
    setTimeout(() =>{
      currentlyPlaying = true
    }, 1000)

  }, false)

  // fathersanchez
  document.getElementById('btn2').addEventListener('mouseup', function() {

    $('#categories ul').fadeOut('slow')
    $('#video, #overlay').fadeIn('fast')
    document.getElementById('video').classList.add('display')
    document.getElementById('overlay').classList.add('display')
    document.querySelector('#screen-filter').classList.add('theatre')
    document.querySelector('#title.home-title').classList.add('theatre')


    try {
      $('#video').html('<iframe id="ytplayer2" type="text/html" width="1120" height="630" src="https://www.youtube.com/embed/lT47Os-w1gU?si=zgKv5yZJR7_qOed3&amp;controls=0&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>')
    } catch(err) {
      console.log(err)
    }
    setTimeout(() =>{
      currentlyPlaying = true
    }, 1000)

  }, false)

  // photos
  document.getElementById('btn5').addEventListener('mouseup', function() {

    $('#categories ul').fadeOut('slow')
    $('#photos, #overlay').fadeIn('fast')
    document.getElementById('photos').classList.add('display')
    document.getElementById('overlay').classList.add('display')
    document.querySelector('#screen-filter').classList.add('theatre')
    document.querySelector('#title.home-title').classList.add('theatre')

    setTimeout(() =>{
      currentlyPlaying = true
      window.dispatchEvent(new Event('resize'))
    }, 1000)

  }, false)

  window.addEventListener('mouseup', function(e) {
    if(((!$('#photos').is(e.target)) || (!$('#video').is(e.target))) && currentlyPlaying) {
      $('#photos, #video, #overlay').fadeOut('slow')
      $('#categories ul').fadeIn('slow')
      $('#video').html('')
      document.querySelector('#screen-filter').classList.remove('theatre')
      document.querySelector('#title.home-title').classList.remove('theatre')

      setTimeout(() =>{
        currentlyPlaying = false
      }, 1000)
    }
  }, false)

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

  function onWindowResize() {
  	id.dim.w = window.innerWidth
  	id.dim.h = window.innerHeight
    camera.aspect = id.dim.w / id.dim.h
  	camera.updateProjectionMatrix()
  	renderer.setSize(id.dim.w, id.dim.h)
  }

  function move(gltf) {
    yRotation += 0.02
    gltf.rotation.set(0, yRotation, 0)
  }

  let yAxisTriggered = false

  function adjustView() {
    if (camera.position.y <= 0.1 && !yAxisTriggered)  {
  		if (Math.abs(camera.position.z) > 14 && Math.abs(camera.position.x) > 14) {
  			yAxisTriggered = true
  		} else if (Math.abs(camera.position.z) < 14 && Math.abs(camera.position.x) < 14) {
  			yAxisTriggered = true

  			const tl = gsap.timeline({ defaults: { duration: 0.25 } })
  			tl.fromTo(camera.position, {
  				z: camera.position.z,
  				x: camera.position.x,
  				y: camera.position.y
  			}, {
  				z: camera.position.z < 16 ? 16 : camera.position.z,
  				x: camera.position.x < 16 ? 16 : camera.position.x,
  				y: camera.position.y
  			})
  		} else if (Math.abs(camera.position.z) < 14 || Math.abs(camera.position.x) < 14) {
  			yAxisTriggered = true

  			const tl = gsap.timeline({ defaults: { duration: 0.25 } })
  			tl.fromTo(camera.position, {
  				z: camera.position.z,
  				x: camera.position.x,
  				y: camera.position.y
  			}, {
  				z: camera.position.z*2,
  				x: camera.position.x*2,
  				y: camera.position.y
  			})
  		}
  	} else if (camera.position.y > 0.1 && yAxisTriggered)  {
  		yAxisTriggered = false
  	}
  }

  // INITIALIZE ANIMATION
  function animate() {
  	// nodeFrame.update()
  	controls.update()

    if((mixer !== undefined) && (prevTime - startTime < 5100 )) {
      const time = Date.now()
      mixer.update((time - prevTime) * 0.001)
      prevTime = time
    }

  	renderer.render(scene, camera)

    if(yRotation > 0) {
      move(model)
    }

  	adjustView()
  }
})
