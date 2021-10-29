// The animation loop. Code in the animate() function is getting executed on every tick

function animate() {
    requestAnimationFrame(animate);
    render();
    stats.update();
}

function setInstanceColor(instanceId, isHighlighting) {
    if (instanceId == -1) return;
    var _color;
    var original_color = CELLS_ARR[instanceId].color;
    var tc = {r: original_color.r * 255, g: original_color.g * 255, b: original_color.b * 255};
    var highlight_color = tinycolor(tc).desaturate(80).toRgb();
    highlight_color = new THREE.Color(highlight_color.r / 255, highlight_color.g / 255, highlight_color.b / 255)
    isHighlighting ? _color = highlight_color : _color = new THREE.Color(original_color.r, original_color.g, original_color.b);

    INSTANCEDMESH.front_face.instancedMesh.setColorAt(instanceId, _color);
    INSTANCEDMESH.front_face.instancedMesh.instanceColor.needsUpdate = true;
}

function setHightlightSphere(instanceId, isHighlighting) {
    if (instanceId == -1) return;
    var dummy = new THREE.Object3D();
    var loader = new THREE.TextureLoader();
    var props =  {
        clearcoat: 1.0,
        clearcoatRoughness: 0,
        metalness: 0.065,
        roughness: 0.3,
        normalMap: loader.load('./src/flakes.png'),
        normalScale: new THREE.Vector2(0.1, 0.1),
        transmission: 0.0,
        transparent: true,
        side: THREE.BackSide,
    };
    var material = new THREE.MeshPhysicalMaterial(props);
    material.opacity = 0.5;
    material.normalMap.wrapS = material.normalMap.wrapT = THREE.RepeatWrapping;
    material.normalMap.repeat = new THREE.Vector2(30, 30);

    var highlighter = new THREE.InstancedMesh(
        //provide geometry
        new THREE.SphereBufferGeometry(1, 36, 18),

        //provide material
         material,

        //how many instances to allocate
        1
    );

    var coords = CELLS_ARR[instanceId].position,
        scales = CELLS_ARR[instanceId].scale,
        rot = CELLS_ARR[instanceId].rotation,
        color = CELLS_ARR[instanceId].color;
    dummy.position.set(coords.x, coords.y, coords.z);
    dummy.scale.set(scales.x, scales.y, scales.z);
    dummy.rotation.set(rot.x, rot.y, rot.z);
    dummy.updateMatrix();
    highlighter.name = 'cell_highlight';
    highlighter.setMatrixAt(0, dummy.matrix);
    highlighter.setColorAt(0, new THREE.Color( color.r, color.g, color.b ));
    highlighter.receiveShadow = false;
    highlighter.castShadow = true;

    if (isHighlighting) {
        SCENE.add(highlighter)
    }
    // else {
    //     SCENE.remove(highlighter)
    // }
    // // instancedMesh.geometry.setPositionAt(i, trsCache[i].position);
    // // instancedMesh.geometry.setScaleAt(i, uScale ? ss : trsCache[i].scale);
}

function remove_highlight_sphere(){
    SCENE
        .children
        .filter(d => d.name === 'cell_highlight')
        .forEach(d => SCENE.remove(d))
}

//oscillate between zero and max
function osc(input, max) {
    const capped = input % (max*2)
    return (capped <= max) ? capped : max-(input%max)
}

const clock = new THREE.Clock();

function render() {
    var c2s,
        _c2s;

    RAYCASTER.setFromCamera(MOUSE, CAMERA);
    const intersection = RAYCASTER.intersectObject(INSTANCEDMESH.front_face.instancedMesh);
    if (intersection.length > 0) {
        var instanceId = intersection[0].instanceId;
         if (instanceId != PREV_INSTANCE_ID) {
             remove_highlight_sphere();
             setHightlightSphere(instanceId, true)
             PREV_INSTANCE_ID = instanceId;
             $('html,body').css('cursor', 'pointer');
         }
    } else {
        remove_highlight_sphere();
        PREV_INSTANCE_ID = -1;
        $('html,body').css('cursor', 'default');
    }
    // if (intersection.length > 0) {
    //     var instanceId = intersection[0].instanceId;
    //     if (instanceId != PREV_INSTANCE_ID) {
    //         // Highlight the cell
    //         // setHightlightSphere(instanceId, true)
    //         setInstanceColor(instanceId, true);
    //
    //         // restore the color on the last visited cell
    //         setInstanceColor(PREV_INSTANCE_ID, false);
    //         PREV_INSTANCE_ID = instanceId;
    //         $('html,body').css('cursor', 'pointer');
    //     }
    // } else {
    //     // setHightlightSphere(PREV_INSTANCE_ID, false)
    //     setInstanceColor(PREV_INSTANCE_ID, false);
    //     PREV_INSTANCE_ID = -1;
    //     $('html,body').css('cursor', 'default');
    // }


    // LOD_ramp()
    SCENE.children.forEach(d => {
        c2s = CAMERA.position.distanceTo(SCENE.position);
        var lod = LOD_ramp(c2s);
        if ((d.type === 'Mesh') && (d.name === 'front_mesh')) {
            if (lod.level !== _c2s) {
                console.log('Switching to ' + lod.level);
                mesh_LOD(lod.w, lod.h);
                _c2s = lod.level;
            }
        } else if ((d.type === 'Mesh') && (d.name === 'back_mesh')) {
            if (lod.level !== _c2s) {
                console.log('Switching to ' + lod.level);
                mesh_LOD(4, 4);
                _c2s = lod.level;
            }
        }
    });

    var gs = 4 + osc(6*clock.getElapsedTime(), 1.5);
    SCENE.children.filter(v => v.type === 'Points').map(v => v.material.uniforms.glyphSize.value = 5*gs)
    RENDERER.render(SCENE, CAMERA);

    // adjust wth width of the gui
    var gui_w = document.getElementsByClassName('dg main a');
    for (var i = 0; i < gui_w.length; i++) {
        gui_w[0].style.width = "305px"
    }
}
