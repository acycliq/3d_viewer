
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
    const particlesMaterial = new THREE.ShaderMaterial({
        // depthWrite: false,
        blending: THREE.AdditiveBlending,
        // vertexColors: true,
        vertexShader: vShader_glyphs,
        fragmentShader: fShader,
        uniforms: {
            uSize: {value: 110.0},
            u_resolution: {value: new THREE.Vector2(window.innerWidth, window.innerHeight)},
            zThres: {value: 0.01},
            r: {value: color.r / 255.0},
            g: {value: color.g / 255.0},
            b: {value: color.b / 255.0},
            a: {value: alpha}
        }
    });

    // Points
    const particles = new THREE.Points(particleGeometry, particlesMaterial);
    particles.name = gene;

    return particles

}

function get_zThres(z_eye){
    // https://stackoverflow.com/questions/46829113/transpose-z-position-from-perspective-to-orthographic-camera-in-three-js
    var f = camera.far,
        n = camera.near;
    z_ndc = ( -z_eye * (f+n)/(f-n) - 2*f*n/(f-n) ) / -z_eye;
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
    //setup
    options = {
        dynamic: false,
        uniformScale: false,
        material: 'phong',
        instanceNumber: 2000,
        geometry: 'sphere'
    };

    var geometries = {
        sphere: new THREE.SphereBufferGeometry(1, 12, 8),
    };

    var instanceNumbers = 2000;
    var phong_material = new THREE.MeshPhongMaterial({
            color: 0xff0000,
            shininess: 150,
            specular: 0x222222,
            shading: THREE.SmoothShading,
        });


    //mesh wrapper
    objectWrapper = new THREE.Object3D();
    objectWrapper.position.y = 3;

    trsCache = [];
    console.log('Initializing object cache for 100k objects...');
    console.time('Object cache initialized.');

    for (var i = 0; i < instanceNumbers; i++) {
        trsCache.push({
            position: new THREE.Vector3(Math.random() * 20 - 10, Math.random() * 2 - 1, 0).multiplyScalar(14),
            scale: new THREE.Vector3(Math.random() + .5, Math.random() + .5, Math.random() + .5)
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
        instanceNumbers,

        //is the scale known to be uniform, will do less shader work, improperly applying this will result in wrong shading
        !!uScale
    );

    var ss = new THREE.Vector3(1, 1, 1);
    var dummy = new THREE.Object3D();
    for (var i = 0; i < instanceNumbers; i++) {
        var coords = trsCache[i].position;
        dummy.position.set(coords.x, coords.y, coords.z);
        dummy.updateMatrix();
        instancedMesh.setMatrixAt(i, dummy.matrix);

        // instancedMesh.geometry.setPositionAt(i, trsCache[i].position);
        // instancedMesh.geometry.setScaleAt(i, uScale ? ss : trsCache[i].scale);
    }
    instancedMesh.visible = true;
    instancedMesh.castShadow = true;
    instancedMesh.receiveShadow = true;
    objectWrapper.add(instancedMesh);
    return objectWrapper

}


