import { OrbitControls, RGBELoader, GLTFLoader } from "./index"
import THREE from "./three.module"
// import POSTPROCESSING from "./postprocessing"
// import { SSGIEffect, TRAAEffect, HBAOEffect, MotionBlurEffect, VelocityDepthNormalPass } from "./realism-effects"

// import * as THREE from '../../vendor/mods/three/build/three.module.js'
// import { OrbitControls } from '/vendor/mods/three/examples/jsm/controls/OrbitControls.js'
// import { GLTFLoader } from './vendor/mods/three/addons/loaders/GLTFLoader.js'
// import { RGBELoader } from './vendor/mods/three/addons/loaders/RGBELoader.js'
// import { DRACOLoader } from './vendor/mods/three/addons/loaders/DRACOLoader.js'
// import * as BufferGeometryUtils from './vendor/mods/three/addons/utils/BufferGeometryUtils.js'
// import { GUI } from './dat.gui'
// import gsap from './gsap'
// import { NodeMaterial, uv, vec2, checker, float, timerLocal } from './vendor/mods/three/nodes/Nodes.js'
// import { nodeFrame } from '/vendor/mods/three/addons/renderers/webgl-legacy/nodes/WebGLNodes.js'
// import * as POSTPROCESSING from "./postprocessing"
// import { SSGIEffect, TRAAEffect, HBAOEffect, MotionBlurEffect, VelocityDepthNormalPass } from "./realism-effects"


// if(!Turbolinks) location.reload()
// Turbolinks.dispatch('turbolinks:load')

window.addEventListener("load", (event) => {
	let canvas, id, renderer, scene, camera, controls, s3, model, car, mixer
	      // animation, action, clip, prevTime, startTime
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
			loc: 'table_mountain_2/table_mountain_2_1k.hdr',    												// Location
			mod: 'puddles/puddles.gltf',												// Stage
			dim: {																							// Dimensions
				w: window.innerWidth,																	// width
		    h: window.innerHeight,																// height
			},
	    gltf: {                                             // Showcase
	      logo: 'logo/logo.gltf',
	      car: {
	        mesh: 'barracuda/barracuda.gltf',
	        tx: 'barracuda/Textures/'
	      }
	    }
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
	  renderer.outputColorSpace = THREE.SRGBColorSpace
	  // renderer.shadowMap.enabled = true
	  renderer.setAnimationLoop(animate)

	  // const composer = new POSTPROCESSING.EffectComposer(renderer)

	  // const pmremGenerator = new THREE.PMREMGenerator(renderer)
	  // pmremGenerator.compileEquirectangularShader()

		// SCENE&CAMERA
		scene = new THREE.Scene()
		camera = new THREE.PerspectiveCamera(50, id.dim.w/id.dim.h, 0.1, 500)
		camera.position.y = 2
		camera.position.x = -10



	  /* realism-effects
	  const velocityDepthNormalPass = new VelocityDepthNormalPass(scene, camera)
	  composer.addPass(velocityDepthNormalPass)

	  // SSGI
	  const ssgiEffect = new SSGIEffect(scene, camera, velocityDepthNormalPass)

	  // TRAA
	  const traaEffect = new TRAAEffect(scene, camera, velocityDepthNormalPass)

	  // Motion Blur
	  const motionBlur = new MotionBlurEffect(velocityDepthNormalPass)

	  // HBAO
	  const hbaoEffect = new HBAOEffect(composer, camera, scene)

	  const effectPass = new POSTPROCESSING.EffectPass(camera, ssgiEffect, hbaoEffect, traaEffect, motionBlur)

	  composer.addPass(effectPass) */
	  scene.add(camera)




	  // OrbitControls
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
	  light.position.set(5, 100, 100)
	  light.intensity = 2000.0
	  scene.add(light)

	  /* Light
	  const light = new THREE.DirectionalLight(0xffffff, 1, 100)
	  light.position.set(5, 10, 10)
	  light.intensity = 15.0
	  light.castShadow = true
	  scene.add(light)
	  // scene.add(new THREE.CameraHelper(light.shadow.camera))

	  // Light
	  const lightB = new THREE.DirectionalLight(0xffffff, 1, 100)
	  lightB.position.set(-5, 10, -10)
	  lightB.intensity = 10.0
	  lightB.castShadow = true
	  scene.add(lightB)
	  // scene.add(new THREE.CameraHelper(lightB.shadow.camera)) */

	  // const pmremGenerator = new THREE.PMREMGenerator(renderer)
	  // pmremGenerator.compileEquirectangularShader()

	  // LOADERS
	  // const txLoader = new THREE.TextureLoader().setPath(`${s3}models/gltf/`)


	  /* const txLoader = new THREE.TextureLoader().setPath('/gltf/')

	  const dracoLoader = new DRACOLoader()
	  dracoLoader.setDecoderPath(`${s3}models/loaders/draco/`)
	  dracoLoader.setDecoderConfig({ type: 'js' })
	  dracoLoader.preload() */

		const rgbeLoader = new RGBELoader().setPath(`${s3}textures/equirectangular/`)
		const gltfLoader = new GLTFLoader().setPath(`${s3}models/gltf/`)

	  const [ hdri, ground ] = await Promise.all([
	    rgbeLoader.loadAsync(id.loc),
	    gltfLoader.loadAsync(id.mod)
	  ])

	  const hdriCube = $.extend(true, {}, hdri)

	  hdri.mapping = THREE.EquirectangularReflectionMapping
	  hdriCube.mapping = THREE.CubeUVReflectionMapping
	  hdri.colorSpace = THREE.LinearSRGBColorSpace
	  hdriCube.colorSpace = THREE.LinearSRGBColorSpace
	  hdri.generateMipmaps = false
	  hdriCube.generateMipmaps = false

	  scene.environment = hdri
	  scene.background = hdri

		const mesh = gltfLoader.load('logo/logo.gltf', function(mesh) {
	    const logo = mesh.scene

	    logo.traverse((obj) => {
	      if(obj.isObject3d) obj.receiveShadow = true
	      if(obj.isGroup) obj.traverse((child) => {
	        if(child.isObject3d) child.receiveShadow = true
	      })
	      if(obj.isMesh) {
	        obj.castShadow = true
	        obj.receiveShadow = true
	        obj.material.envMap = hdri
	        // obj.material.envMapIntensity = 0.25
	      }
	    })

	    logo.position.setY((window.innerWidth > 700) ? 2 : 2.75)
	    yRotation = 180
	    move(logo)
	    scene.add(logo)
	    model = logo
	  })

	  if(ground.isObject3d) ground.receiveShadow = true

	  ground.scene.traverse((obj) => {
	    if(obj.isObject3d) obj.receiveShadow = true
	    if(obj.isGroup) obj.traverse((child) => {
	      if(child.isObject3d) child.receiveShadow = true
	    })
	    if(obj.isMesh) {
	      obj.castShadow = true
	      obj.receiveShadow = true
	      obj.material.envMap = hdri
	      // obj.material.envMapIntensity = 0.25
	    }
	  })

	  document.querySelector('div.home-title h2').style.color = 'black'

	  scene.add(ground.scene)



	  // SHOWCASE ITEMS

	  /* const mesh = gltfLoader.load('logo/logo.gltf', function(mesh) {
	    const logo = mesh.scene
	    logo.position.setY(2)
	    yRotation = 180
	    move(logo)
	    scene.add(logo)
	    model = logo
	  })

	  gltfLoader.setDRACOLoader(dracoLoader)
	  gltfLoader.setPath(`${s3}models/gltf/`)
	  // gltfLoader.setPath('/gltf/')

	  const [ carColorMap, carNormalMap, carMetalMap, carRoughMap, carTransMap, carSpecMap, carEmissionMap, whlColorMap, whlNormalMap, whlNormalInvMap, whlMetalRoughMap ] = await Promise.all([
	    txLoader.loadAsync(`${id.gltf.car.tx}Barracuda_16K-PNG_BaseColor.png`),
	    txLoader.loadAsync(`${id.gltf.car.tx}Barracuda_16K-JPG_Normal.jpg`),
	    txLoader.loadAsync(`${id.gltf.car.tx}Barracuda_16K-JPG_Metallic.jpg`),
	    txLoader.loadAsync(`${id.gltf.car.tx}Barracuda_16K-JPG_Roughness.jpg`),
	    txLoader.loadAsync(`${id.gltf.car.tx}Barracuda_16K-PNG_Transmission.png`),
	    txLoader.loadAsync(`${id.gltf.car.tx}Barracuda_16K-JPG_SpecularColor.jpg`),
	    txLoader.loadAsync(`${id.gltf.car.tx}Barracuda_16K-JPG_Emission.jpg`),
	    txLoader.loadAsync(`${id.gltf.car.tx}BarracudaWHEEL_4K-JPG_BaseColor.jpg`),
	    txLoader.loadAsync(`${id.gltf.car.tx}BarracudaWHEEL_4K-JPG_Normal.jpg`),
	    txLoader.loadAsync(`${id.gltf.car.tx}BarracudaWHEEL_4K-JPG_NormalInverted.jpg`),
	    txLoader.loadAsync(`${id.gltf.car.tx}BarracudaWHEEL_4K-JPG_Metallic-BarracudaWHEEL_4K-JPG_Roughness.jpg`)
	  ])

	  carColorMap.colorSpace = THREE.SRGBColorSpace
	  carSpecMap.colorSpace = THREE.SRGBColorSpace
	  carEmissionMap.colorSpace = THREE.SRGBColorSpace
	  whlColorMap.colorSpace = THREE.SRGBColorSpace

	  const maps = [ carColorMap, carNormalMap, carMetalMap, carRoughMap, carTransMap, carSpecMap, carEmissionMap, whlColorMap, whlNormalMap, whlNormalInvMap, whlMetalRoughMap ]

	  // maps.map((map, i) => map.flipY = (i<7) ? false : true)
	  maps.map((map) => map.flipY = false)

	  const mesh = gltfLoader.load(id.gltf.car.mesh, function(group) {
	    const barracuda = group.scene
	    console.log('\nSCENE TYPE: ', barracuda.type)

	    barracuda.traverse((obj) => {
	      console.log('\nSCENE CHILD TYPE: ', obj.type)

	      if(obj.isObject3d) obj.receiveShadow = true

	      if(obj.isGroup) obj.traverse((child) => {
	        if(child.isObject3d) child.receiveShadow = true
	      })

	      if(obj.isMesh) {
	        obj.castShadow = true
	        obj.receiveShadow = true

	        // if(obj.name.slice(-1) == 'y') {
	        if(obj.name.slice(-1) == 'P') {
	          obj.material = new THREE.MeshPhysicalMaterial({
	            envMap: hdri,
	            // envMapIntensity: 0.25,
	            map: maps[0],
	            normalMap: maps[1],
	            normalMapType: THREE.ObjectSpaceNormalMap,
	            roughnessMap: maps[3],
	            metalnessMap: maps[2],
	            // opacity: 1.0,
	            // transmission: 1.0,
	            // transmissionMap: maps[4],
	            specularColorMap: maps[5],
	            emissiveMap: maps[6],
	            emissiveIntensity: 28.0,

	            thickness: 1.001
	          })
	        } else {
	          obj.material = new THREE.MeshPhysicalMaterial({
	            envMap: hdri,
	            // envMapIntensity: 0.25,
	            map: maps[7],
	            normalMap: obj.name.slice(-1) == 'L' ? maps[8] : maps[9],
	            normalMapType: THREE.ObjectSpaceNormalMap,
	            roughnessMap: maps[10],
	            metalnessMap: maps[10],
	            thickness: 1.001
	          })
	        }

	        if(obj.geometry.isBufferGeometry) {
	          obj.geometry = BufferGeometryUtils.mergeVertices(obj.geometry, 0.001)
	          obj.geometry.computeVertexNormals()
	          obj.geometry.normalizeNormals()
	        }
	      }
	    })
	    barracuda.position.setY(0)
	    yRotation = 0
	    model = barracuda
	    scene.add(model)
	  }, function ( xhr ) {
	    console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' )
	  }, function ( error ) {
	    console.log( 'An error happened' )
	  }) */



	  // dracoLoader.dispose()



	  /* gltfLoader.load('barracuda/barracuda.gltf', function(mesh) {
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

	  /* texture = await rgbeLoader.load(`${id.loc}/${id.loc}_4k.hdr`, textureScene)
	  texture = await rgbeLoader.load(`${id.loc}/${id.loc}_8k.hdr`, textureScene) */

	  for(var i=0; i<scene.length; i++) {
			console.log(scene[i].isMesh)
		}

		window.addEventListener('resize', onWindowResize)
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
		switch(window.orientation) {
	    case -90: case 90:
	        /* Device is in landscape mode */
	        break;
	    default:
	        /* Device is in portrait mode */
    }

	  $('#categories ul').fadeOut('slow')
	  $('#video, #overlay').fadeIn('fast')
	  document.getElementById('video').classList.add('display')
	  document.getElementById('overlay').classList.add('display')
	  document.querySelector('#screen-filter').classList.add('theatre')
	  document.querySelector('#title.home-title').classList.add('theatre')

	  try {
			if(window.innerWidth > 730) {
	    	$('#video').html('<iframe id="ytplayer" type="text/html" width="1120" height="630" src="https://www.youtube.com/embed/Q2fOHzbFnkE?si=4Fh0JclhGPumgQoA&amp;controls=0&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>')
			} else {
				$('#video').html('<iframe id="ytplayer" type="text/html" width="672" height="378" src="https://www.youtube.com/embed/Q2fOHzbFnkE?si=4Fh0JclhGPumgQoA&amp;controls=0&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>')
			}
	  } catch(err) {
	    console.log(err)
	  }
	  setTimeout(() =>{
	    currentlyPlaying = true
	  }, 1000)

	}, false)

	// fathersanchez
	document.getElementById('btn2').addEventListener('mouseup', function() {
		switch(window.orientation) {
	    case -90: case 90:
	        /* Device is in landscape mode */
	        break;
	    default:
	        /* Device is in portrait mode */
    }

	  $('#categories ul').fadeOut('slow')
	  $('#video, #overlay').fadeIn('fast')
	  document.getElementById('video').classList.add('display')
	  document.getElementById('overlay').classList.add('display')
	  document.querySelector('#screen-filter').classList.add('theatre')
	  document.querySelector('#title.home-title').classList.add('theatre')

	  try {
			if(window.innerWidth > 730) {
		    $('#video').html('<iframe id="ytplayer2" type="text/html" width="1120" height="630" src="https://www.youtube.com/embed/lT47Os-w1gU?si=zgKv5yZJR7_qOed3&amp;controls=0&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>')
			} else {
				$('#video').html('<iframe id="ytplayer2" type="text/html" width="672" height="378" src="https://www.youtube.com/embed/lT47Os-w1gU?si=zgKv5yZJR7_qOed3&amp;controls=0&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>')
			}
	  } catch(err) {
	    console.log(err)
	  }
	  setTimeout(() =>{
	    currentlyPlaying = true
	  }, 1000)

	}, false)

	// photos
	document.getElementById('btn5').addEventListener('mouseup', function() {

	  setTimeout(() =>{
			$('#categories ul').fadeOut('slow')
			$('#photos, #overlay').fadeIn('fast')
			document.getElementById('photos').classList.add('display')
			document.getElementById('overlay').classList.add('display')
			document.querySelector('#screen-filter').classList.add('theatre')
			document.querySelector('#title.home-title').classList.add('theatre')

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
