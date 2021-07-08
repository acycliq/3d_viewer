function render_scene(points) {
    // Canvas
    const canvas = document.querySelector('canvas.webgl')

    // Scene
    scene = new THREE.Scene();

    // add the points to the scene
    points.map(d => scene.add(d));


    // Base camera
    camera = new THREE.PerspectiveCamera(125,
        window.innerWidth / window.innerHeight,
        1, 120000);
    camera.position.z = 500;
    scene.add(camera);


    // Controls
    controls = new THREE.OrbitControls(camera, canvas);
    controls.enableDamping = true;


    // Renderer
    renderer = new THREE.WebGLRenderer({
        canvas: canvas
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
}


function onWindowResize() {
    // Update camera
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
}
