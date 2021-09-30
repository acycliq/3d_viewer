function iniScene() {
    container = document.createElement('div');
    document.body.appendChild(container);

    paramsGUI = {
        near: 20.0,
        far: 10000.0,
        envMap: true,
        metalness: 0.5,
        transmission: 0.5,
        intensity: 0.1,
        glyphSize: 12,
    };

    // Canvas
    const canvas = document.querySelector('canvas.webgl')

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, paramsGUI.near, paramsGUI.far);
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

    stats = new Stats();
    container.appendChild(stats.dom);

    const gui = new dat.GUI();

    // Three different ways to update a parameter using the GUI
    gui.add(paramsGUI, 'envMap', true); // 1. Add the paramasGUI object to the gui but the you have to update it inside the animate loop
    gui.add(paramsGUI, 'metalness', 0, 1, 0.01);
    gui.add(paramsGUI, 'transmission', 0, 1, 0.01);
    gui.add(camera, 'near', 1, 100);   // 2. directly adding it to the gui. No need to anything more in the the animate loop
    gui.add(paramsGUI, "intensity", 0, 10).onChange(d => {light.intensity = d}); // 3. chaining a function
    gui.add(paramsGUI, 'glyphSize', 1, 100).onChange(d => {scene.children.filter(v => v.type === 'Points').map(v => v.material.uniforms.glyphSize.value = d)});

    gui.open();


    animate();

    // adjust the scene if the browser's window is resized
    window.addEventListener('resize', onWindowResize);

    // finally remove the preloader
    removePreloader()

    // and show the gene panel button
    legendControl();

}

function animate() {
    // var timer = Date.now() * 0.0002;
    // camera.position.x = Math.cos(timer) * 10000;
    // camera.position.z = Math.sin(timer) * 10000;
    requestAnimationFrame(animate);
    render();
}

function render() {
    camera.updateProjectionMatrix();
    scene.children.filter(d => d.type === 'Mesh').map(d => d.material.metalness = paramsGUI.metalness);
    // particlesMaterial.size = paramsGUI.particleSize;
    // camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, params.near, params.far);
    // camera.near = paramsGUI.near;
    if (paramsGUI.envMap) {
        scene.environment = envMap
    } else {
        scene.environment = null
    }

    // camera.lookAt(scene.position);
    renderer.render(scene, camera);
}


function onWindowResize() {
    // Update camera
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    particlesMaterial.uniforms

    // Update renderer
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
}