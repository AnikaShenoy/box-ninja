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
    var cubes = [
        makeShape(geometry, 0x44aa88, [0,0]),
        makeShape(geometry, 0x8844aa, [-2, 2]),
        makeShape(geometry, 0xaa8844, [2,0]),
        makeShape(geometry, 0x4deeea, [1, 1]),
        makeShape(geometry, 0x74ee15, [5,2])
    ];
    
    
    // this creates a loop that will keep on rendering the app everytime the page refreshes
    function render(time) { // time is given in milliseconds (ms)
        time *= 0.001 // convert time from milliseconds to seconds

        if (Math.floor(time) % 2 == 0) {
            var cube = cubes[Math.floor(Math.random() * 5)];
            console.log(cubes);
            cube.translateZ(0.1);
        }

        if (Math.random() < 0.1) {
            var cube = cubes[Math.floor(Math.random() * 5)];
            cube.translateZ(0.1);
        }
        
        /*
        cubes.forEach((cube, index) => {  // => is just a way to shorten the syntax
            // change the speed for each cube
            
            const speed = 0.1 + index * 0.05; 
            
            const rot = time * 0.5;
            //cube.rotation.x = rot;
            //cube.rotation.y = rot;
            //cube.rotation.z = rot;
            
            //cube.translateY(speed);
            cube.translateZ(speed);
        });
        */
        
        // this actually draws the scene
        renderer.render(scene, camera);
        
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}

main();     
          
          
          
          
          
          /*
            // !!! THE BELOW CODE IS COPY-PASTED (and slightly edited) FROM:
            //      https://threejs.org/docs/index.html#api/en/core/Raycaster
            // currently doesn't work though
            const raycaster = new THREE.Raycaster();
            const mouse = new THREE.Vector2();
        
            function onMouseMove( event ) {
        
                // calculate mouse position in normalized device coordinates
                // (-1 to +1) for both components
        
                mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
                mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
        
            }
        
            function render() {
        
                // update the picking ray with the camera and mouse position
                raycaster.setFromCamera( mouse, camera );
        
                // calculate objects intersecting the picking ray
                const intersects = raycaster.intersectObjects(cubes);
        
                for ( let i = 0; i < intersects.length; i ++ ) {
        
                    intersects[ i ].object.material.color.set( 0xff0000 );
        
                }
        
                renderer.render( scene, camera );
        
            }
        
            window.addEventListener( 'mousemove', onMouseMove, false );
        
            requestAnimationFrame(render)
        
            }
            */
        
            /*
            // !! COPIED FROM:
            //      https://riptutorial.com/three-js/example/17088/object-picking---raycasting
            // but doesn't work 
            
            function raycast ( e ) {
            // Step 1: Detect light helper
                //1. sets the mouse position with a coordinate system where the center
                //   of the screen is the origin
                mouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
                mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
        
                //2. set the picking ray from the camera position and mouse coordinates
                raycaster.setFromCamera( mouse, camera );    
        
                //3. compute intersections (note the 2nd parameter)
                var intersects = raycaster.intersectObjects( scene.children, true );
        
                for ( var i = 0; i < intersects.length; i++ ) {
                    console.log( intersects[ i ] ); 
                    
                        An intersection has the following properties :
                            - object : intersected object (THREE.Mesh)
                            - distance : distance from camera to intersection (number)
                            - face : intersected face (THREE.Face3)
                            - faceIndex : intersected face index (number)
                            - point : intersection point (THREE.Vector3)
                            - uv : intersection point in the object's UV coordinates (THREE.Vector2)
                    
                }
            // Step 2: Detect normal objects
                //1. sets the mouse position with a coordinate system where the center
                //   of the screen is the origin
                mouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
                mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
        
                //2. set the picking ray from the camera position and mouse coordinates
                raycaster.setFromCamera( mouse, camera );    
        
                //3. compute intersections (no 2nd parameter true anymore)
                var intersects = raycaster.intersectObjects( scene.children );
        
                for ( var i = 0; i < intersects.length; i++ ) {
                    console.log( intersects[ i ] ); 
                    intersects[ i ].object.material.color.set( 0xff0000 );
                    
                        An intersection has the following properties :
                            - object : intersected object (THREE.Mesh)
                            - distance : distance from camera to intersection (number)
                            - face : intersected face (THREE.Face3)
                            - faceIndex : intersected face index (number)
                            - point : intersection point (THREE.Vector3)
                            - uv : intersection point in the object's UV coordinates (THREE.Vector2)
                    
                }
        
                raycaster = new THREE.Raycaster();
                renderer.domElement.addEventListener( 'click', raycast, false );
            */