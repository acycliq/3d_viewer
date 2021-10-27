// The animation loop. Code in the animate() function is getting executed on every tick

function animate() {
    requestAnimationFrame(animate);
    render();
    stats.update();
}

function render() {
    var c2s,
        _c2s;

    RAYCASTER.setFromCamera(MOUSE, CAMERA);
    const intersection = RAYCASTER.intersectObject(INSTANCEDMESH.front_face.instancedMesh);
    if (intersection.length > 0) {
        const instanceId = intersection[0].instanceId;
        INSTANCEDMESH.front_face.instancedMesh.setColorAt(instanceId, COLOR.setHex(Math.random() * 0xffffff));
        INSTANCEDMESH.front_face.instancedMesh.instanceColor.needsUpdate = true;
    }

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


}
