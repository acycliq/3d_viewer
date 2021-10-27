// The animation loop. Code in the animate() function is getting executed on every tick

function animate() {
    requestAnimationFrame(animate);
    render();
    stats.update();
}

function setInstanceColor(instanceId, isHighlighting){
  if (instanceId == -1) return;
  var _color;
  var original_color = CELLS_ARR[instanceId].color;
  var tc = {r:original_color.r*255, g: original_color.g*255, b: original_color.b*255};
  var highlight_color = tinycolor(tc).desaturate(80).toRgb();
  highlight_color = new THREE.Color(highlight_color.r/255, highlight_color.g/255, highlight_color.b/255)
  isHighlighting? _color = highlight_color: _color = new THREE.Color( original_color.r, original_color.g, original_color.b );

  INSTANCEDMESH.front_face.instancedMesh.setColorAt(instanceId, _color);
  INSTANCEDMESH.front_face.instancedMesh.instanceColor.needsUpdate = true;
}

function render() {
    var c2s,
        _c2s;

    RAYCASTER.setFromCamera(MOUSE, CAMERA);
    const intersection = RAYCASTER.intersectObject(INSTANCEDMESH.front_face.instancedMesh);
    if (intersection.length > 0) {
        var instanceId = intersection[0].instanceId;
        if (instanceId != PREV_INSTANCE_ID) {
            setInstanceColor(instanceId, true);
            setInstanceColor(PREV_INSTANCE_ID, false);
            PREV_INSTANCE_ID = instanceId;
            $('html,body').css('cursor', 'pointer');
        }
    } else {
        setInstanceColor(PREV_INSTANCE_ID, false);
        PREV_INSTANCE_ID = -1;
        $('html,body').css('cursor', 'default');
    }
    //
    // if (intersection.length > 0) {
    //     const instanceId = intersection[0].instanceId;
    //     INSTANCEDMESH.front_face.instancedMesh.setColorAt(instanceId, COLOR.setHex(Math.random() * 0xffffff));
    //     INSTANCEDMESH.front_face.instancedMesh.instanceColor.needsUpdate = true;
    //     $('html,body').css('cursor', 'pointer');
    // } else {
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

    RENDERER.render(SCENE, CAMERA);

    // adjust wth width of the gui
    var gui_w = document.getElementsByClassName('dg main a');
    for (var i = 0; i < gui_w.length; i++) {
        gui_w[0].style.width = "305px"
    }
}
