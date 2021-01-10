import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/build/three.module.js';

const container = document.querySelector("#flex-container");

//set up raycaster
const raycaster = new THREE.Raycaster();
var INTERSECTED;


// set up mouse tracking for ray caster

const mouse = new THREE.Vector2();
document.addEventListener( "mousemove", onDocumentMouseMove, false );
window.addEventListener ("resize", onWindowResize, false);



function onDocumentMouseMove(event) {
    event.preventDefault();
    mouse.x = (event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight ) * 2 + 1;
}

//set up scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("black");
const camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
document.body.appendChild( renderer.domElement );
camera.position.z=5;

function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerWidth;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}





//Menu Cube Properties
const geometry_menu = new THREE.BoxGeometry();
const texture_menu = new THREE.TextureLoader().load("images/hand_control.png")
const material_menu = new THREE.MeshBasicMaterial( { 
    color: 0x00ff00,
    map: texture_menu,
    side: THREE.DoubleSide,
} );
const cube_menu = new THREE.Mesh( geometry_menu, material_menu );
cube_menu.scale.x = Math.min(window.innerWidth/500, 2);
cube_menu.scale.y = Math.min(window.innerWidth/500, 2);
cube_menu.scale.z = Math.min(window.innerWidth/500, 2);
scene.add(cube_menu);


//Instructions Cube Properties
const geometry_inst = new THREE.BoxGeometry();
const texture_inst = new THREE.TextureLoader().load("images/mouse_control.png")
const material_inst = new THREE.MeshBasicMaterial( { 
    color: 0x00ff00,
    map: texture_inst,
    side: THREE.DoubleSide,
} );
const cube_inst = new THREE.Mesh(geometry_inst, material_inst);
scene.add(cube_inst);
cube_inst.scale.x = Math.min(window.innerWidth/500, 2);
cube_inst.scale.y = Math.min(window.innerWidth/500, 2);
cube_inst.scale.z = Math.min(window.innerWidth/500, 2);

let bounceControl_m = true;
let up_m = true;
let bounceControl_i = true;
let up_i = true;

function animate(){
    requestAnimationFrame (animate);
    renderer.setSize( container.clientWidth, container.clientHeight);

    // rotation and position of centroid of both cubes
    cube_menu.rotation.x -= 0.02;
    cube_menu.rotation.y -= 0.02;
    cube_menu.rotation.z += 0.02;
    cube_menu.position.x = Math.min(window.innerWidth/500, 2);

    
    cube_inst.rotation.x += 0.02;
    cube_inst.rotation.y += 0.02;
    cube_inst.rotation.z += 0.02;
    cube_inst.position.x = -1 * Math.min(window.innerWidth/500, 2);

    // bouncing - menu cube 
    if (bounceControl_m) {
        cube_menu.rotation.x = 0
        cube_menu.rotation.y = 0
        if (up_m) {
            cube_menu.translateOnAxis(new THREE.Vector3(0, 1, 0).normalize(), 0.1)
            if (cube_menu.position.y > 1.5) {
                up_m = false
            }
        }
        else if (!up_m) {
            cube_menu.translateOnAxis(new THREE.Vector3(0, 1, 0).normalize(), -0.01)
            if (cube_menu.position.y < -0.5) {
                up_m = true
            }
        }
        else {
            cube_menu.position.set(0, 0, 0)
        }
    }
    //bouncing - inst cube 
    if (bounceControl_i) {
        cube_inst.rotation.x = 0
        cube_inst.rotation.y = 0
        if (up_i) {
            cube_inst.translateOnAxis(new THREE.Vector3(0, 1, 0).normalize(), 0.1)
            if (cube_inst.position.y > 1.5) {
                up_i = false
            }
        }
        else if (!up_i) {
            cube_inst.translateOnAxis(new THREE.Vector3(0, 1, 0).normalize(), -0.01)
            if (cube_inst.position.y < -0.5) {
                up_i = true
            }
        }
        else {
            cube_inst.position.set(0, 0, 0)
        }
    }

    // update the picking ray with the camera and mouse position
	raycaster.setFromCamera( mouse, camera );

	// calculate objects intersecting the picking ray
    const intersects = raycaster.intersectObjects( scene.children);

    if (intersects.length > 0) {
        if (INTERSECTED != intersects[ 0 ].object ){
            INTERSECTED = intersects[0].object;
        }
    } 

    
    renderer.render(scene, camera)
    
    
    if (INTERSECTED == cube_inst){
        
    } else {
        if (INTERSECTED == cube_menu){
            
        }
    }
}

animate();


