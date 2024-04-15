import * as THREE from '/node_modules/three/build/three.module.js'
import { OrbitControls } from '/vendor/mods/three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from '/vendor/mods/three/addons/loaders/GLTFLoader.js'
import { RGBELoader } from '/vendor/mods/three/addons/loaders/RGBELoader.js'
import { GUI } from 'dat.gui'
import gsap from 'gsap'
import { NodeMaterial, uv, vec2, checker, float, timerLocal } from '/vendor/mods/three/nodes/Nodes.js'
// import { nodeFrame } from '/vendor/mods/three/addons/renderers/webgl-legacy/nodes/WebGLNodes.js'


// if(!Turbolinks) location.reload()
// Turbolinks.dispatch('turbolinks:load')

document.addEventListener('turbolinks:load', function() {

  let canvas, id, renderer, scene, camera, controls, s3, model
  let yRotation = 0

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

  	controls.target.set(0, 1, 0)
  	controls.update()

    const light = new THREE.PointLight(0xffffff, 1, 100)
    light.position.set(0, 10, 10)
    light.intensity = 200.0
    scene.add(light)

    // if(!window.texture || !window.gltf) {
    	// LOADERS
    	const rgbeLoader = new RGBELoader().setPath(`${s3}textures/equirectangular/`)
    	const gltfLoader = new GLTFLoader().setPath(`${s3}models/gltf/`)

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


  	for(var i=0; i<scene.length; i++) {
  		console.log(scene[i].isMesh)
  	}

  	window.addEventListener('resize', onWindowResize)

    /* texture = await rgbeLoader.load(`${id.loc}/${id.loc}_4k.hdr`, textureScene)
    texture = await rgbeLoader.load(`${id.loc}/${id.loc}_8k.hdr`, textureScene) */
  }

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

  // INITIALIZE ANIMATION
  function animate() {
  	// nodeFrame.update()
  	controls.update()
  	renderer.render(scene, camera)

    if(yRotation > 0) {
      move(model)
    }

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
})
