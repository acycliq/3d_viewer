function make_cells(data) {
    var front_props = {
            side: THREE.FrontSide,
            opacity: 0.4,
        },
        back_props = {
            side: THREE.BackSide,
            opacity: 0.9,
        },
    instancedMesh = {};

    instancedMesh.front = _make_cells(data, front_props);
    instancedMesh.back = _make_cells(data, back_props);
    return instancedMesh
}

function _make_cells(data, props) {
    var counts = data.length,
        loader = new THREE.TextureLoader();

    const flakesTexture = loader.load('./src/flakes.png')
    const base_props = {
        clearcoat: 1.0,
        clearcoatRoughness: 0,
        metalness: 0.065,
        roughness: 0.3,
        normalMap: flakesTexture,
        normalScale: new THREE.Vector2(0.3, 0.3),
        transmission: 0.0,
        transparent: true,
        // envMap: true,
    };
    var material = new THREE.MeshPhysicalMaterial(base_props);

    material.side = props.side;
    material.color = props.color;
    material.opacity = props.opacity;
    material.normalMap.wrapS = material.normalMap.wrapT = THREE.RepeatWrapping;
    material.normalMap.repeat = new THREE.Vector2(30, 30)


    var uScale = 0;
    var widthSegments = paramsGUI.smoothness,
        heightSegments = 0.5 * widthSegments;
    var geometry =  new THREE.SphereBufferGeometry(1, widthSegments, heightSegments);
    var _n = geometry.index.count/3;
    console.log('triangles: ' + (_n * counts).toLocaleString());
    var instancedMesh = new THREE.InstancedMesh(
        //provide geometry
        geometry,

        //provide material
        material,

        //how many instances to allocate
        counts,

        //is the scale known to be uniform, will do less shader work, improperly applying this will result in wrong shading
        !!uScale
    );

    var dummy = new THREE.Object3D();
    var bbox_items = [];
    var tree = new RBush3D.RBush3D(16)
    console.log('tic')
    var temp_obj = new THREE.Mesh(new THREE.SphereGeometry(), new THREE.MeshBasicMaterial());
    for (var i = 0; i < counts; i++) {
        var coords = data[i].position,
            scales = data[i].scale,
            rot = data[i].rotation,
            color = data[i].color;
        dummy.position.set(coords.x, coords.y, coords.z);
        dummy.scale.set(scales.x, scales.y, scales.z);
        dummy.rotation.set(rot.x, rot.y, rot.z);
        dummy.updateMatrix();
        instancedMesh.setMatrixAt(i, dummy.matrix);
        instancedMesh.setColorAt(i, new THREE.Color( color.r, color.g, color.b ));
        temp_obj.applyMatrix4(dummy.matrix)
        var bbox = new THREE.Box3().setFromObject(temp_obj);
        bbox_items.push({minX: bbox.min.x, minY: bbox.min.y, minZ: bbox.min.z, maxX: bbox.max.x, maxY: bbox.max.y, maxZ: bbox.max.z, name: 'item_' + i});
        // instancedMesh.geometry.setPositionAt(i, trsCache[i].position);
        // instancedMesh.geometry.setScaleAt(i, uScale ? ss : trsCache[i].scale);
    }
    console.log('toc')
    instancedMesh.instanceColor.needsUpdate = true;
    instancedMesh.visible = true;
    instancedMesh.castShadow = true;
    instancedMesh.receiveShadow = false; // if you turn this on, you may need to tweak the light shadow bias to avoid artifacts
    // objectWrapper.add(instancedMesh);

    tree.load(bbox_items);
    return instancedMesh
}

function count_triangles(m){
    // input m is the mesh
    var _n = m.geometry.index.count/3;
    var count = m.count;
    console.log('triangles: ' + (_n * count).toLocaleString());
}