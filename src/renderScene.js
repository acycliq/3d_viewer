function render_scene(points, cells, sphere) {
    // Canvas
    const canvas = document.querySelector('canvas.webgl')

    // Scene
    scene = new THREE.Scene();
    // scene.background = new THREE.Color('white');

    // add the points to the scene
    points.map(d => scene.add(d));

    // add the cells too
    // scene.add(cells);

    scene.add(sphere)

    // const cube = new THREE.Mesh(
    //     new THREE.BoxGeometry(),
    //     new THREE.MeshBasicMaterial()
    // )
    // scene.add(cube)

    function addLight(x, y, z) {
        const color = 0xFFFFFF;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(x, y, z);
        scene.add(light);
    }

    addLight(-1, 2, 4);
    addLight(1, -1, -2);


    // Base camera
    camera = new THREE.PerspectiveCamera(125,
        window.innerWidth / window.innerHeight,
        0.0000000001, 10000);
    // camera.position.z = 3000; // vizgen
    camera.position.z = 300;  // ucl
    scene.add(camera);


    // Controls
    controls = new THREE.OrbitControls(camera, canvas);
    controls.enableDamping = true;


    // Renderer
    renderer = new THREE.WebGLRenderer({
        canvas: canvas,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));


    // Animate
    const clock = new THREE.Clock();

    const tick = () => {
        const elapsedTime = clock.getElapsedTime();

        // Update controls
        controls.update();

        // Render
        renderer.render(scene, camera);

        // Call tick again on the next frame
        window.requestAnimationFrame(tick)
    };

    tick();

    // adjust the scene if the browser's window is resized
    window.addEventListener( 'resize', onWindowResize );

    // finally remove the preloader
    removePreloader()

    // and show the gene panel button
    legendControl();
}


function onWindowResize() {
    // Update camera
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
}

function hidePoints(gene){
    var points = scene.children;
    for (var i=0; i<points.length; i++){
        if (points[i].name === gene){
            points[i].visible = false;
            console.log('Gene: ' + gene + ' is switched off.')
        }
    }
//     // points.filter(d => d.name === gene)[0].visible = false;
}

function showPoints(gene){
    if (genePanel.includes(gene)){
        var points = scene.children;
        points.filter(d => d.name === gene)[0].visible = true;
    }
    else{
        console.log('Gene: ' + gene + ' not in the gene panel')
    }

}
