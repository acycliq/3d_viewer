
function my_particles(positions, gene) {

    var glyph = getGlyph(gene),
        hexCode = getColor(gene);

    var fShader = getShader(glyph),
        color = hexToRgb(hexCode);

    const particleGeometry = new THREE.BufferGeometry();
     new THREE.PlaneBufferGeometry(1, 1, 32, 32);
    var scales = new Float32Array(positions.length);
    for (let i = 0; i < positions.length; i++) {
        scales[i] = 1
    }

    // const mypositions = new Float32Array([0,0,1.5]) ;
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const alpha = 0.8;
    const particlesMaterial = new THREE.ShaderMaterial({
        depthWrite: false,
        // blending: THREE.AdditiveBlending,
        vertexColors: true,
        vertexShader: vShader_glyphs,
        fragmentShader: fShader,
        uniforms: {
            uSize: {value: 110.0},
            u_resolution: {value: new THREE.Vector2(window.innerWidth, window.innerHeight)},
            r: {value: color.r},
            g: {value: color.g},
            b: {value: color.b},
            a: {value: alpha}
        }
    });

    // Points
    const particles = new THREE.Points(particleGeometry, particlesMaterial);

    return particles

}