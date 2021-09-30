function my_particles(positions, gene) {

    var glyph = getGlyph(gene),
        hexCode = getColor(gene);

    var fShader = getShader(glyph),
        color = hexToRgb(hexCode);

    const particleGeometry = new THREE.BufferGeometry();
    var scales = new Float32Array(positions.length);
    for (let i = 0; i < positions.length; i++) {
        scales[i] = 1
    }

    // const mypositions = new Float32Array([0,0,1.5]) ;
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const alpha = 0.8;
    particlesMaterial = new THREE.ShaderMaterial({
        // depthWrite: false,
        blending: THREE.NormalBlending,
        // vertexColors: true,
        vertexShader: vShader_glyphs,
        fragmentShader: fShader,
        uniformsNeedUpdate: true,
        uniforms: {
            glyphSize: {value: paramsGUI.glyphSize},
            dotSize: {value: paramsGUI.dotSize},
            u_resolution: {value: new THREE.Vector2(window.innerWidth, window.innerHeight)},
            zThres: {value: 100.0},
            r: {value: color.r / 255.0},
            g: {value: color.g / 255.0},
            b: {value: color.b / 255.0},
            a: {value: alpha}
        }
    });

    // Points
    particles = new THREE.Points(particleGeometry, particlesMaterial);
    particles.name = gene;

    return particles

}

function get_zThres(z_eye) {
    // https://stackoverflow.com/questions/46829113/transpose-z-position-from-perspective-to-orthographic-camera-in-three-js
    var f = camera.far,
        n = camera.near;
    z_ndc = (-z_eye * (f + n) / (f - n) - 2 * f * n / (f - n)) / -z_eye;
    return z_ndc
}


function my_cells(x, y, z) {

    // function addLight(x, y, z) {
    //     const color = 0xFFFFFF;
    //     const intensity = 1;
    //     const light = new THREE.DirectionalLight(color, intensity);
    //     light.position.set(x, y, z);
    //     scene.add(light);
    // }
    //
    // addLight(-1, 2, 4);
    // addLight(1, -1, -2);

    const boxWidth = 100;
    const boxHeight = 100;
    const boxDepth = 100;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

    function makeInstance(geometry, color, x, y, z) {
        var cube;
        [THREE.BackSide, THREE.FrontSide].forEach((side) => {
            const material = new THREE.MeshPhongMaterial({
                color,
                opacity: 0.5,
                transparent: true,
                side,
            });

            cube = new THREE.Mesh(geometry, material);
            cube.position.set(x, y, z);
        });
        return cube
    }

    function hsl(h, s, l) {
        return (new THREE.Color()).setHSL(h, s, l);
    }

    // const d = 0.8;
    var out = makeInstance(geometry, hsl(0 / 8, 1, .5), x, y, z);
    return out

    // {
    //     const d = 0.8;
    //     makeInstance(geometry, hsl(0 / 8, 1, .5), -d, -d, -d);
    //     makeInstance(geometry, hsl(1 / 8, 1, .5), d, -d, -d);
    //     makeInstance(geometry, hsl(2 / 8, 1, .5), -d, d, -d);
    //     makeInstance(geometry, hsl(3 / 8, 1, .5), d, d, -d);
    //     makeInstance(geometry, hsl(4 / 8, 1, .5), -d, -d, d);
    //     makeInstance(geometry, hsl(5 / 8, 1, .5), d, -d, d);
    //     makeInstance(geometry, hsl(6 / 8, 1, .5), -d, d, d);
    //     makeInstance(geometry, hsl(7 / 8, 1, .5), d, d, d);
    // }
}


function my_sphere(radius, position, color) {
    color = color.toFixed(1)
    var geometry = new THREE.SphereGeometry(radius, 50, 50);
    var material = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
        uniforms: {c: {type: "3f"}, o: {type: "3f"}},
        vertexShader: `
            varying vec3 p;
            void main() {
              // transfer vertex position to fragment shader,
              // this value is interpolated by gpu hardware between pixels of triangle,
              // containing this vertex
              p = position;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }`,
        fragmentShader: `
            varying vec3 p;  // position of current pixel relative to sphere center
            uniform vec3 c;  // center of current sphere
            uniform vec3 o;  // center of opposite sphere
            void main() {
               vec3 a = abs(p)*50.0;
               float opacity = a.x<1. || a.y<1. || a.z<1. ? 0.8 : 0.3;
               // here is test of shpere overlapping
               opacity = distance(o, p + c) < 3.0 ? 0.0 : opacity;
               gl_FragColor = vec4(vec3(${color}, 0.0, 1.0 - ${color}), opacity);
            }`
    });
    let mesh = new THREE.Mesh(geometry, material);
    return mesh;
}


function add_spheres() {
    var my_spheres = [
            {x: 35, y: 15, z: 17.5},
            {x: -44, y: 23, z: -2.5},
            {x: 43, y: 100, z: -3.5},
            {x: 43, y: 88, z: -15.5},
            {x: 43, y: 126.5, z: 15},
            {x: -5, y: 115.5, z: 7},
            {x: -73, y: -121.5, z: 5.5},
            {x: -66, y: -150.5, z: 17.5},
            {x: -53, y: -27, z: -7.5},
            {x: 10, y: -95, z: -3},
            {x: -20, y: -90, z: -12},
            {x: -13, y: -175, z: -3},
            {x: -125, y: -15, z: 20},
        ],
        sphere_scale = [
            {x: 7.5, y: 10, z: 3.0},
            {x: 15, y: 25, z: 10},
            {x: 13, y: 8, z: 4},
            {x: 12, y: 8, z: 2},
            {x: 8, y: 8, z: 8},
            {x: 12, y: 12, z: 8},
            {x: 17, y: 12, z: 6},
            {x: 12, y: 10, z: 8},
            {x: 14, y: 13, z: 10},
            {x: 13, y: 8, z: 8},
            {x: 8, y: 8, z: 8},
            {x: 12, y: 8, z: 8},
            {x: 8, y: 35, z: 8},
        ],
        sphere_rotation = [
            {x: 0.0, y: 0.0, z: 0.0},
            {x: -Math.PI / 8, y: 0, z: -Math.PI / 4},
            {x: 0, y: 0, z: 0},
            {x: 0, y: 0, z: 0},
            {x: 0, y: 0, z: 0},
            {x: -Math.PI / 8, y: Math.PI / 8, z: 0},
            {x: 0, y: Math.PI / 8, z: Math.PI / 6},
            {x: 0, y: 0, z: 0},
            {x: 0, y: 0, z: 0},
            {x: 0, y: 0, z: 0},
            {x: 0, y: 0, z: 0},
            {x: -Math.PI / 8, y: 0, z: Math.PI / 4},
            {x: 0, y: -Math.PI, z: Math.PI / 10},
        ],
        sphere_color = [
            {r: 0, g: 0, b: 1},
            {r: 0, g: 0, b: 1},
            {r: 0, g: 0.701960, b: 1},
            {r:1, g:0, b:230/255},
            {r:1, g:0, b:230/255},
            {r: 0, g: 0.701960, b: 1},
            {r: 0, g: 0.701960, b: 1},
            {r:1, g:0, b:230/255},
            {r: 0, g: 0.701960, b: 1},
            {r: 0, g: 1, b: 0},
            {r: 100/255, g: 0, b: 90/255},
            {r: 100/255, g: 0, b: 90/255},
            {r: 1, g: 1, b: 1},
        ];


    //setup
    options = {
        dynamic: false,
        uniformScale: false,
        material: 'phong',
        instanceNumber: my_spheres.length,
        geometry: 'sphere',
    };

    var geometries = {
        sphere: new THREE.SphereBufferGeometry(1, 12, 8),
    };

    // var instanceNumbers = options.instanceNumber;
    var phong_material = new THREE.MeshPhongMaterial({
        // color: 0x0000ff,
        shininess: 150,
        specular: 0x222222,
        shading: THREE.SmoothShading,
        // wireframe: true,
        transparent: true,
        opacity: 0.3,
    });


    //mesh wrapper
    objectWrapper = new THREE.Object3D();
    objectWrapper.position.y = 16;
    scene.add(objectWrapper);

    trsCache = [];
    console.log('Initializing object cache for 100k objects...');
    console.time('Object cache initialized.');


    // for (var i = 0; i < options.instanceNumber; i++) {
    //     trsCache.push({
    //         // position: new THREE.Vector3(Math.random() * 90 - 90/2, Math.random() * 20 - 10, Math.random()).multiplyScalar(14),
    //         // scale: new THREE.Vector3(10*(Math.random() + .5), 10*(Math.random() + .5), 10*(Math.random() + .5)),
    //         position: new THREE.Vector3(35, 15, 17.5, -35, -15, -17.5),
    //         scale: new THREE.Vector3(7.5, 10, 3, 7.5, 10, 3)
    //     });
    // }
    for (var i = 0; i < options.instanceNumber; i++) {
        var d = my_spheres[i],
            ds = sphere_scale[i],
            dr = sphere_rotation[i];
        trsCache.push({
            position: new THREE.Vector3(d.x, d.y, d.z),
            scale: new THREE.Vector3(ds.x, ds.y, ds.z),
            rotation: new THREE.Vector3(dr.x, dr.y, dr.z),
        });

    }
    console.timeEnd('Object cache initialized.');
    console.log('Initializing instanced mesh permutations...');
    console.time('Instanced mesh permutations initialized.');


    var uScale = 0;
    var instancedMesh = new THREE.InstancedMesh(
        //provide geometry
        geometries['sphere'],

        //provide material
        phong_material,

        //how many instances to allocate
        options.instanceNumber,

        //is the scale known to be uniform, will do less shader work, improperly applying this will result in wrong shading
        !!uScale
    );

    var ss = new THREE.Vector3(1, 1, 1);
    var dummy = new THREE.Object3D();
    for (var i = 0; i < options.instanceNumber; i++) {
        var coords = trsCache[i].position,
            scales = trsCache[i].scale,
            rot = trsCache[i].rotation;
        dummy.position.set(coords.x, coords.y, coords.z);
        dummy.scale.set(scales.x, scales.y, scales.z);
        dummy.rotation.set(rot.x, rot.y, rot.z);
        dummy.updateMatrix();
        instancedMesh.setMatrixAt(i, dummy.matrix);
        instancedMesh.setColorAt(i, new THREE.Color( sphere_color[i].r, sphere_color[i].g, sphere_color[i].b ))

        // instancedMesh.geometry.setPositionAt(i, trsCache[i].position);
        // instancedMesh.geometry.setScaleAt(i, uScale ? ss : trsCache[i].scale);
    }
    instancedMesh.instanceColor.needsUpdate = true;
    instancedMesh.visible = true;
    instancedMesh.castShadow = true;
    instancedMesh.receiveShadow = true;
    objectWrapper.add(instancedMesh);

}


