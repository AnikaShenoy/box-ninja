

import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/build/three.module.js';

function main() {
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({canvas, antialias: true});

    // NOTE: if we didn't pass 'canvas' as an argument to WebGLRenderer (above),
    // then we would have to set size and add renderer to HTML document:
    //      renderer.setSize(window.innerWidth, window.InnerHeight);
    //      document.body.appendChild(renderer.domElement);

    // need 3 things to display with three.js --> scene, camera, renderer
    // create a new scene
    var scene = new THREE.Scene();

    {
        // creating a directional light to give box definition
        const color = 0xFFFFFF;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);

        // directional lights have a position and target --> default of both is (0,0,0)
        // setting position to (-1,2,4) --> left, above, and behind our camera
        // leaving target as default (so it will shine to origin)
        light.position.set(-1, 2, 4);
        scene.add(light);
    }

    // PerspectiveCamera mimics the way humans see a scene
    // 75 --> FOV (in degrees)
    // IW/IH --> aspect ratio
    // 0.1 --> near, 1000 --> far; this means that objects closer / farther won't be rendered
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
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

        return cube;

    }

    // creating three cubes with three different colours:
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    const cubes = [
        makeShape(geometry, 0x44aa88, [0, 0]),
        makeShape(geometry, 0x8844aa, [-2, 2]),
        makeShape(geometry, 0xaa8844, [2,0])
    ];

    // this creates a loop that will keep on rendering the app everytime the page refreshes
    function render(time) { // time is given in milliseconds (ms)
        time *= 0.001 // convert time from milliseconds to seconds

        cubes.forEach((cube, index) => {  // => is just a way to shorten the syntax
            // change the speed for each cube
            const speed = 1 + index * 0.1; 
            const rot = time * speed;
            cube.rotation.x = rot;
            cube.rotation.y = rot;
            cube.translateY(0.07);
            //cube.translateZ(0.07);
        });
        
        // this actually draws the scene
        renderer.render(scene, camera);
        
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);

    }

main();
