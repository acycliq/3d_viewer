
function iniScene() {
    // Canvas
    const canvas = document.querySelector('canvas.webgl')
    var z_near = 20,
        z_far = 10000;

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, z_near, z_far);
    camera.position.set(0, 0, 3000);

    scene = new THREE.Scene();
    // scene.background = new THREE.Color(0xdddddd);

    // ground
    var geometry = new THREE.BoxGeometry(10, 0.15, 10);
    var material = new THREE.MeshPhongMaterial({
        color: 0xa0adaf,
        shininess: 150,
        specular: 0xffffff,
        shading: THREE.SmoothShading
    });

    var ground = new THREE.Mesh(geometry, material);
    ground.scale.multiplyScalar(3);
    ground.castShadow = false;
    ground.receiveShadow = true;
    // scene.add(ground);

    // Controls
    controls = new THREE.OrbitControls(camera, canvas);
    controls.enableDamping = true;

    // Renderer
    renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.BasicShadowMap;

    // Animate
    const clock = new THREE.Clock();

    const tick = () => {
        // Update controls
        controls.update();

        // Render
        renderer.render(scene, camera);

        // Call tick again on the next frame
        window.requestAnimationFrame(tick)
    };

    tick();

    // adjust the scene if the browser's window is resized
    window.addEventListener('resize', onWindowResize);

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