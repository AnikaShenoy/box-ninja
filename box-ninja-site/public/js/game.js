import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/build/three.module.js';


// SOURCES:
// https://threejsfundamentals.org/threejs/lessons/threejs-fundamentals.html
// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene
// https://medium.com/@davisonpro/javascript-game-development-83a579580d48
// https://tympanus.net/codrops/2016/04/26/the-aviator-animating-basic-3d-scene-threejs/





function main() {
    const canvas = document.querySelector('#flex-container');
    const renderer = new THREE.WebGLRenderer({canvas, antialias: true});

    // NOTE: if we didn't pass 'canvas' as an argument to WebGLRenderer (above),
    // then we would have to set size and add renderer to HTML document:
    //      renderer.setSize(window.innerWidth, window.InnerHeight);
    //      document.body.appendChild(renderer.domElement);

    // trying to make raycaster work
    var raycaster = new THREE.Raycaster();
    let intersectedBox;

    // points keeper
    var points = 0;

    // REMOVE when implementing handtrack
    document.addEventListener( 'mousemove', onDocumentMouseMove, false );

    // need 3 things to display with three.js --> scene, camera, renderer
    // create a new scene
    var scene = new THREE.Scene();

    // creating a directional light to give box definition
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);

    // directional lights have a position and target --> default of both is (0,0,0)
    // setting position to (-1,2,4) --> left, above, and behind our camera
    // leaving target as default (so it will shine to origin)
    light.position.set(-1, 2, 4);
    scene.add(light);

    // PerspectiveCamera mimics the way humans see a scene
    // 75 --> FOV (in degrees)
    // IW/IH --> aspect ratio
    // 0.1 --> near, 500 --> far; this means that objects closer / farther won't be rendered
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 500);
    // moving camera out in z-plane
    camera.position.z = 5;


    // function that makes a new material with  specified geometry, color, 
    //  and x- and y-coordinates
    function makeShape(geometry, color, coordinates) {
        // often, we'd use:
        //      var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
        // but, we need to use MeshPhongMaterial, which is affected by lights
        const material = new THREE.MeshPhongMaterial({color})

        // mesh is an object that takes geometry and material objects which can be inserted into scene
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // by default, object is added to coordinates (0,0,0), but can be changed:
        cube.position.x = coordinates[0];
        cube.position.y = coordinates[1];
        cube.position.z = -10;

        return cube;
    }

    // REMOVE when implemented handtrack
    // create mouse vector and track movement
    const mouse = new THREE.Vector2();

    function onDocumentMouseMove( event ) {

        event.preventDefault();

        mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
        mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

    }

    // creating the cube geometry
    var geometry = new THREE.BoxGeometry(1, 1.2, 1);
    // array to randomize colours for the cubes
    var colours = [
        0x8844aa,
        0x4deeea,
        0x74ee15,
        0xffe700,
        0xf000ff,
        0x001eff,
        0xFF0000,
        0xC724B1,
        0xfeaf2f,
        0xfe17a2,
        0x40e0d0
    ];

    // create array to randomize speeds for the cubes
    if (document.getElementById("gesture") != null) {
        // slower speed if using gesture control
        var speeds = [
            0.1,
            0.15,
            0.2,
            0.12,
            0.12,
            0.05,
            0.09,
            0.13
        ];
    } else if (document.getElementById("mouse") != null) {
        // faster speeds if using mouse control
        var speeds = [
            0.13,
            0.15,
            0.2,
            0.12,
            0.18,
            0.19,
            0.15,
            0.13
        ];
    }
    // array to randomize speeds for the cubes 
    var speeds = [
        0.1,
        0.15,
        0.2,
        0.12,
        0.18,
        0.19,
        0.15,
        0.13
    ];
    // array to append cubes as needed
    var cubes = [
        makeShape(geometry, colours[Math.floor(Math.random()*11)], [0,0]),
    ];
    
    // this creates a loop that will keep on rendering the app everytime the page refreshes
    function render(time) { // time is given in milliseconds (ms)
        time *= 0.001 // convert time from milliseconds to seconds

        // randomly generate colour for the cube
        var colour = colours[Math.floor(Math.random()*10)];


//TODO: decide on which way of randomizing cubes is better
        
    //option 1:
        // these if-statements "randomly" generate the cubes and the cube's location
        //  since based on time, the intervals are more even
        if (time % 5 < 0.02) {
            cubes.push(makeShape(geometry, colour, [Math.random()*5, Math.random()*2.5]))
        }
        else if (time % 4 < 0.02) {
            cubes.push(makeShape(geometry, colour, [Math.random()*-5, Math.random()*-2.5]))
        }
        else if (time % 3 < 0.02) {
            cubes.push(makeShape(geometry, colour, [Math.random()*-5, Math.random()*2.5]))
        }
        else if (time % 2 < 0.02) {
            cubes.push(makeShape(geometry, colour, [Math.random()*5, Math.random()*-2.5]))
        }
        
    // option 2:
        // since this is truly random, intervals can be uneven
        /*
        var random = Math.random() / 1.5;
        if (random < 0.001) {
            cubes.push(makeShape(geometry, colour, [Math.random()*5, Math.random()*2.5]));
        }
        else if (random > 0.001 && Math.random() < 0.002) {
            cubes.push(makeShape(geometry, colour, [Math.random()*-5, Math.random()*-2.5]));
        }
        else if (random > 0.002 && Math.random() < 0.003) {
            cubes.push(makeShape(geometry, colour, [Math.random()*-5, Math.random()*2.5]))
        }
        else if (random > 0.003 && Math.random() < 0.004) {
            cubes.push(makeShape(geometry, colour, [Math.random()*5, Math.random()*-2.5]))
        }
        */
        

        // this sets the speed of each cube (because we're translating it by a bit
        //  in each frame)
        cubes.forEach((cube, index) => {  // => is just a way to shorten the syntax
            
            // speed is randomly chosen from the array of possible speeds
            cube.translateZ(speeds[Math.floor(Math.random()*8)]);
        });

        // setting up raycaster and finding intersections (where mouse vector intersects with box)
        raycaster.setFromCamera( mouse, camera );
        const intersects = raycaster.intersectObjects(scene.children, true);
        // const intersects = raycaster.intersectObjects(cubes, recursiveFlag);

        //console.log(intersects);

        if (intersects.length > 0) {
            // when mouse is over the box, it lights up and is removed from scene
            if (intersectedBox != intersects[0].object ) {
                intersectedBox = intersects[0].object;
                // box lights up
                intersectedBox.material.emissive.setHex(0xff0000);
                intersectedBox.currentHex = intersectedBox.material.emissive.getHex();
                intersectedBox.material.color.setHex(0xFFFFFF);
                // after 15ms, box is removed from scene
                setTimeout(() => { scene.remove(intersectedBox); }, 12);
                // increase points by 10
                points += 10;
                document.getElementById("points").innerHTML = "Points: " + points;
                //console.log(points);
            }

        } else {
            if ( intersectedBox ) intersectedBox.material.emissive.setHex( intersectedBox.currentHex );
            // set intersected box to null
            intersectedBox = null;
        }
        

        // this actually draws the scene
        renderer.render(scene, camera);
        
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}

main();