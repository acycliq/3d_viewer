// Put here event listeners and other stuff to be called when everything else on the scene is ready

function postScene() {

    // adjust the scene if the browser's window is resized
    window.addEventListener('resize', onWindowResize);

    // mouse move
    window.addEventListener('mousemove', onMouseMove, false);

    // finally remove the preloader
    removePreloader();

    // and show the gene panel button
    legendControl();

    function onMouseMove(event) {
        // calculate mouse position in normalized device coordinates
        // (-1 to +1) for both components

        MOUSE.x = (event.clientX / window.innerWidth) * 2 - 1;
        MOUSE.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    function onWindowResize() {
        // Update camera
        CAMERA.aspect = window.innerWidth / window.innerHeight;
        CAMERA.updateProjectionMatrix();

        // Update renderer
        RENDERER.setSize(window.innerWidth, window.innerHeight);
        RENDERER.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }

}