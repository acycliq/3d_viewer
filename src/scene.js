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
    // controls.enableDamping = true;

    // Renderer
    renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.BasicShadowMap;

    axes = createAxes(1000, scene);

    // Animate
    const clock = new THREE.Clock();

    stats = new Stats();
    container.appendChild(stats.dom);

    // Three different ways to update a parameter using the GUI
    var gui_properties = gui.__controllers.map(d => d.property)
    if (!gui_properties.includes('envMap')) {
        gui.add(paramsGUI, 'smoothness', 1, 32).name("cell smoothness").onChange(regenerateSphereGeometry);
        gui.add(paramsGUI, 'mouseEvents', true).name("glyph mouse hover");
        gui.add(paramsGUI, 'envMap', true); // 1. Add the paramasGUI object to the gui but the you have to update it inside the animate loop
        // gui.add(paramsGUI, 'metalness', 0, 1, 0.01);
        // gui.add(paramsGUI, 'transmission', 0, 1, 0.01);
        // gui.add(camera, 'near', 1, 100);   // 2. directly adding it to the gui. No need to anything more in the the animate loop
        // gui.add(paramsGUI, 'near', 1, 100).name('min visible plane').onChange(d => {camera.near = d})
        gui.add(paramsGUI, "intensity", 0, 10).name('light intensity, top-right').onChange(d => {
            light.intensity = d
        }); // 3. chaining a function
        gui.add(paramsGUI, 'glyphSize', 1, 100).onChange(d => {
            scene.children.filter(v => v.type === 'Points').map(v => v.material.uniforms.glyphSize.value = d)
        });
        gui.add(paramsGUI, 'dotSize', 1, 100).onChange(d => {
            scene.children.filter(v => v.type === 'Points').map(v => v.material.uniforms.dotSize.value = d)
        });
        gui.add(paramsGUI, 'glyphSwitch', paramsGUI.near, 0.5 * paramsGUI.far).onChange(d => {
            scene.children.filter(v => v.type === 'Points').map(v => v.material.uniforms.zThres.value = d)
        });
        gui.add(paramsGUI, 'addAxes', false).onChange(d => {
            scene.children.filter(d => d.name === "xyz_axes").length ? axes.visible = d : scene.add(axes)
        });
        gui.add(paramsGUI, 'attenuation', false).name("glyph attenuation").onChange(d => {
            scene.children.filter(v => v.type === 'Points').map(v => v.material.uniforms.attenuate.value = d)
        });


        // gui.add(paramsGUI, 'heightSegments', 1, 32).onChange(d => {scene.children.filter(v => v.type === 'Mesh').map(v => v.geometry.parameters.heightSegments  = d)});

        // gui.open();

        // look also here to add memory usage:
        // https://github.com/mrdoob/three.js/blob/master/examples/webgl_instancing_performance.html
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


    controls.rotateSpeed = 1.0;
    controls.zoomSpeed = 1.2;
    controls.panSpeed = 0.8;
    $('.clicks').click(function () {
    		var from = camera.position.clone();
				var to = camera.position.clone().subScalar(100);
        // initially, camera looks at the center of the scene
        // next line makes it to look at the top of the torus
        controls.target = new THREE.Vector3(0, 120, 0); // set target once, not in .onUpdate
        var tween = new TWEEN.Tween(from)
            .to(to, 600)
            .easing(TWEEN.Easing.Linear.None)
            .onUpdate( function(){
            	camera.position.copy(this);
              controls.update();
            })
            .start();
    });


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
    if (paramsGUI.mouseEvents) {
        hoverPieces();
    }
    requestAnimationFrame(animate);
    render();
    stats.update();
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

    // LOD_ramp()
    scene.children.forEach(d => {
        c2s = camera.position.distanceTo(scene.position);
        var lod = LOD_ramp(c2s);
        if ((d.type === 'Mesh') & (d.name === 'front_mesh')) {
            if (lod.level !== _c2s) {
                console.log('Switching to ' + lod.level)
                mesh_LOD(lod.w, lod.h)
                _c2s = lod.level;
            }
        } else if ((d.type === 'Mesh') & (d.name === 'back_mesh')) {
            if (lod.level !== _c2s) {
                console.log('Switching to ' + lod.level)
                mesh_LOD( 4, 4)
                _c2s = lod.level;
            }

        }
    });

     TWEEN.update();


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


