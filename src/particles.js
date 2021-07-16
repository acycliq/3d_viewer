
function my_particles(positions) {

    const particleGeometry = new THREE.BufferGeometry();
    var scales = new Float32Array(positions.length);
    for (let i = 0; i < positions.length; i++) {
        scales[i] = 1
    }

    // const mypositions = new Float32Array([0,0,1.5]) ;
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    var r = 1.0,
        g = 110.0,
        b = 1.0;
    const particlesMaterial = new THREE.ShaderMaterial({
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexColors: true,
        vertexShader: vShader,
        fragmentShader: fShader,
        uniforms: {
            uSize: {value: 110.0},
            r: {value: r}
        }
    });

    // Points
    const particles = new THREE.Points(particleGeometry, particlesMaterial)

    return particles

}