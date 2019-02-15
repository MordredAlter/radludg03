// We need 3 things everytime we use Three.js
 // Scene + Camera + Renderer
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 1000 )
const renderer = new THREE.WebGLRenderer({ antialias: true})

renderer.setSize( window.innerWidth, window.innerHeight )
// sets renderer background color
renderer.setClearColor("#222222")
document.body.appendChild( renderer.domElement )
camera.position.z = 5

// resize canvas on resize window
window.addEventListener( 'resize', () => {
	let width = window.innerWidth
	let height = window.innerHeight
	renderer.setSize( width, height )
	camera.aspect = width / height
	camera.updateProjectionMatrix()
})

// basic cube
var geometry = new THREE.BoxGeometry( 1, 1, 1)
var material = new THREE.MeshStandardMaterial( { color: 0x272dd1, flatShading: true, metalness: 0, roughness: 1 })
var cube = new THREE.Mesh ( geometry, material )
scene.add( cube )

// wireframe cube
var geometry = new THREE.BoxGeometry( 1.1, 1.1, 1.1)
var material = new THREE.MeshBasicMaterial( {
	color: "#272dd1", wireframe: true, transparent: true
})
var wireframeCube = new THREE.Mesh ( geometry, material )
scene.add( wireframeCube )

//2do wireframe cube
var geometry2 = new THREE.BoxGeometry( 1.2, 1.2, 1.2)
var material2 = new THREE.MeshBasicMaterial( {
	color: "#272dd1", wireframe: true, transparent: true
})
var wireframeCube2 = new THREE.Mesh ( geometry2, material2 )
scene.add( wireframeCube2 )

// ambient light
var ambientLight = new THREE.AmbientLight ( 0xffffff, 0.2)
scene.add( ambientLight )

// point light
var pointLight = new THREE.PointLight( 0xffffff, 1 );
pointLight.position.set( 25, 50, 25 );
scene.add( pointLight );


function animate() {
	requestAnimationFrame( animate )
	cube.rotation.x += 1;
	cube.rotation.y += 1;
	wireframeCube.rotation.x -= 0.04;
	wireframeCube.rotation.y -= 0.04;
	wireframeCube2.rotation.x += 0.04;
	wireframeCube2.rotation.y += 0.04;
	renderer.render( scene, camera )
}
animate()
