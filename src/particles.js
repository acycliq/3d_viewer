function my_particles(positions, gene) {
    console.log('Doing particles for ' + gene)

    var glyph = getGlyph(gene),
        hexCode = getColor(gene);

    var fShader = getShader(glyph),
        color = hexToRgb(hexCode);

    var particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.name = gene
    // var scales = new Float32Array(positions.length);
    var colors = new Float32Array(positions.length);
    for (let i = 0; i < positions.length; i++) {
        // scales[i] = 10;
        colors[i] = color.r;
        colors[i + 1] = color.g;
        colors[i + 2] = color.b;
    }

    // const mypositions = new Float32Array([0,0,1.5]) ;
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    // particleGeometry.setAttribute( 'color', new THREE.BufferAttribute( colors, 3 ) );
    // particleGeometry.setAttribute('scale', new THREE.BufferAttribute(scales, 3));

    var numVertices = particlesGeometry.attributes.position.count;
    var scales = new Float32Array(numVertices * 1);
    for (var i = 0; i < numVertices; i++) {
        // set alpha randomly
        scales[i] = 1.0;
    }
    particlesGeometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));
    // particlesGeometry.attributes.alpha.needsUpdate = true; // important!

    const opacity = 0.8;
    var particlesMaterial = new THREE.ShaderMaterial({
        // depthWrite: false,
        blending: THREE.NormalBlending,
        // vertexColors: true,
        vertexShader: vShader_glyphs,
        fragmentShader: fShader,
        // uniformsNeedUpdate: true,
        uniforms: {
            glyphSize: {value: 12},
            dotSize: {value: 2},
            u_resolution: {value: new THREE.Vector2(window.innerWidth, window.innerHeight)},
            zThres: {value: 100},
            attenuate: {value: true},
            r: {value: color.r / 255.0},
            g: {value: color.g / 255.0},
            b: {value: color.b / 255.0},
            a: {value: opacity}
        }
    });

    // Points
    PARTICLES = new THREE.Points(particlesGeometry, particlesMaterial);
    PARTICLES.name = gene;

    return PARTICLES
}

function get_zThres(z_eye) {
    // https://stackoverflow.com/questions/46829113/transpose-z-position-from-perspective-to-orthographic-camera-in-three-js
    var f = camera.far,
        n = camera.near;
    z_ndc = (-z_eye * (f + n) / (f - n) - 2 * f * n / (f - n)) / -z_eye;
    return z_ndc
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
