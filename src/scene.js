function iniScene() {
    container = document.createElement('div');
    document.body.appendChild(container);

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

    axes = createAxes( 1000, scene );

    // Animate
    const clock = new THREE.Clock();

    stats = new Stats();
    container.appendChild(stats.dom);

    // Three different ways to update a parameter using the GUI
    var gui_properties = gui.__controllers.map(d => d.property)
    if (!gui_properties.includes('envMap')){
        gui.add(paramsGUI, 'mouseEvents', true).name("glyph mouse hover");
        gui.add(paramsGUI, 'envMap', true); // 1. Add the paramasGUI object to the gui but the you have to update it inside the animate loop
        // gui.add(paramsGUI, 'metalness', 0, 1, 0.01);
        // gui.add(paramsGUI, 'transmission', 0, 1, 0.01);
        // gui.add(camera, 'near', 1, 100);   // 2. directly adding it to the gui. No need to anything more in the the animate loop
        // gui.add(paramsGUI, 'near', 1, 100).name('min visible plane').onChange(d => {camera.near = d})
        gui.add(paramsGUI, "intensity", 0, 10).name('light intensity, top-right').onChange(d => {light.intensity = d}); // 3. chaining a function
        gui.add(paramsGUI, 'glyphSize', 1, 100).onChange(d => {scene.children.filter(v => v.type === 'Points').map(v => v.material.uniforms.glyphSize.value = d)});
        gui.add(paramsGUI, 'dotSize', 1, 100).onChange(d => {scene.children.filter(v => v.type === 'Points').map(v => v.material.uniforms.dotSize.value = d)});
        gui.add(paramsGUI, 'glyphSwitch', paramsGUI.near, 0.5*paramsGUI.far).onChange(d => {scene.children.filter(v => v.type === 'Points').map(v => v.material.uniforms.zThres.value = d)});
        gui.add(paramsGUI, 'addAxes', false).onChange(d => {scene.children.filter(d => d.name === "xyz_axes").length? axes.visible = d: scene.add(axes)})

        gui.add(paramsGUI, 'smoothness', 1, 64).onChange(regenerateSphereGeometry);
        // gui.add(paramsGUI, 'heightSegments', 1, 32).onChange(d => {scene.children.filter(v => v.type === 'Mesh').map(v => v.geometry.parameters.heightSegments  = d)});

        // gui.open();
    }

    function regenerateSphereGeometry() {
        var meshes = scene.children.filter(v => v.type === 'Mesh');
        meshes.forEach(d => {
            var w = paramsGUI.smoothness,
                h = 0.5 * w; // set the height  to be the half of width
            const clonedGeometry = new THREE.SphereBufferGeometry(1, w, h);
            // clonedGeometry.parameters.widthSegments = paramsGUI.widthSegments;
            d.geometry.dispose();
            d.geometry = clonedGeometry;

            count_triangles(d)
        })
    }


    animate();

    // adjust the scene if the browser's window is resized
    window.addEventListener('resize', onWindowResize);

    // finally remove the preloader
    removePreloader()

    // and show the gene panel button
    legendControl();

    window.addEventListener('mousemove', onMouseMove, false);

}

function animate() {
    // var timer = Date.now() * 0.0002;
    // camera.position.x = Math.cos(timer) * 10000;
    // camera.position.z = Math.sin(timer) * 10000;
    if (paramsGUI.mouseEvents){
        hoverPieces();
    }
    requestAnimationFrame(animate);
    render();
    stats.update();
}

function scale_helper(points){
    var scales = points.geometry.attributes.scale;
    var count = scales.count;

    for (var i = 0; i < count; i++) {
        // dynamically change alphas
        scales.array[i] *= 0.95;
        if (scales.array[i] < 0.10) {
            console.log('dynamically change alphas')
            scales.array[i] = 1.0;
        }
    }
    scales.needsUpdate = true; // important!
}


function render() {
    // adjust wth width of the gui
    document.getElementsByClassName('dg main a')[0].style.width = "305px"

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


    // if (particlesGeometry) {
    //
    //     var scales = particlesGeometry.attributes.scale;
    //     var count = scales.count;
    //
    //     for (var i = 0; i < count; i++) {
    //         // dynamically change alphas
    //         scales.array[i] *= 0.95;
    //         if (scales.array[i] < 0.10) {
    //             console.log('dynamically change alphas')
    //             scales.array[i] = 1.0;
    //         }
    //     }
    //     scales.needsUpdate = true; // important!
    // }

    // camera.lookAt(scene.position);
    renderer.render(scene, camera);
}


function hoverPieces() {
    raycaster.setFromCamera(mouse, camera);
    raycaster.far = configSettings.zThres;
    raycaster.params.Points.threshold = 0.5;
    const intersects = raycaster.intersectObjects(scene.children);
    if (intersects.length) {
        console.log('Intersects')
        if (intersected != intersects[0].object) {
            var index = intersects[0].index;
            intersected = intersects[0].object;
            var name = intersected.name,
                uid = name + "_" + index;
            reset_scale(intersected)
            highlight(intersected, name, index);
            console.log('mouseover Gene: ' + name + ' index: ' + index);
            console.log(uid)
            $('html,body').css('cursor', 'pointer');
        }
    }
    else{
        console.log('does not intersect')
        if (intersected){
            $('html,body').css('cursor', 'default');
            reset_scale(intersected)
            intersected = null
        }
    }

    // for (let i = 0; i < intersects.length; i++) {
    //     intersects[i].object.material.transparent = true;
    //     intersects[i].object.material.opacity = 0.5;
    // }
}

function highlight(intersected, name, index){
    if (intersected.type === 'Points') {
        var scales = intersected.geometry.attributes.scale;
        scales.array[index] = 2.0;
        scales.needsUpdate = true;
        console.log('scale ' + name + '_' + index + ' is: ' + intersected.geometry.attributes.scale.array[index])
    }
}

function reset_scale(intersected) {
    if (intersected && intersected.type === 'Points'){
        var scales = intersected.geometry.attributes.scale;
        console.log('gene is: ' + intersected.name)
        for (var i = 0; i < scales.count; i++) {
            if (scales.array[i] != 1.0) {
                console.log('resetting at position: ' + i)
                scales.array[i] = 1.0;
            }
        }
        scales.needsUpdate = true;
    }
}

function onMouseMove(event) {

    // calculate mouse position in normalized device coordinates
    // (-1 to +1) for both components

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

}


function onWindowResize() {
    // Update camera
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
}

function hideAxes(){
    for (var i=0; i<scene.children.length; i++){
        if (scene.children[i].name === 'xyz_axes'){
            scene.children[i].visible = false;
            console.log('Axes are switched off.')
        }
    }
}


function showAxes(){
    for (var i=0; i<scene.children.length; i++){
        if (scene.children[i].name === 'xyz_axes'){
            scene.children[i].visible = true;
            console.log('Axes are switched on.')
        }
    }
}


function createAxes( axisLength, target )
{
    function v( x, y, z )
    {
        return new THREE.Vector3(x,y,z);
    }
    function axis( p1, p2, color, target )
    {
        var line;
        var points = [];
        points.push(p1);
        points.push(p2);
        var lineGeometry = new THREE.BufferGeometry().setFromPoints( points );
            // lineGeometry = new THREE.Geometry(),
        lineMat = new THREE.LineBasicMaterial( { color: color, lineWidth: 1 } );
        // lineGeometry.vertices.push( p1, p2 );
        line = new THREE.Line( lineGeometry, lineMat );
        return line
        // target.add( line );
    }
    var group = new THREE.Group();
    group.name = 'xyz_axes'
    var axis_x = axis( v( -axisLength, 0, 0 ), v( axisLength, 0, 0 ), 0xFF0000, target );
    var axis_y = axis( v( 0, -axisLength, 0 ), v( 0, axisLength, 0 ), 0x00FF00, target );
    var axis_z = axis( v( 0, 0, -axisLength ), v( 0, 0, axisLength ), 0x0000FF, target );
    group.add(axis_x);
    group.add(axis_y);
    group.add(axis_z);

    return group
}