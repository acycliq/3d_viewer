function my_particles(textureLoader, glyphName) {

    /**
     * Textures
     */

        // const particleTexture = textureLoader.load('assets/static/textures/particles/3.png')
    // const particleTexture = textureLoader.load(sprite_png)

    const particleGeometry = new THREE.BufferGeometry()
    const count = 5000

    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 4
        colors[i] = Math.random()
    }

    particleGeometry.setAttribute(
        'position', new THREE.BufferAttribute(positions, 3),
    )

    particleGeometry.setAttribute(
        'color', new THREE.BufferAttribute(colors, 3)
    )


    var getTexture = function (glyphName) {
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');

        ctx = ctxPath(glyphName, ctx);
        var texture = new THREE.Texture(canvas);
        texture.needsUpdate = true;
        return texture;
    };


    const particlesMaterial = new THREE.PointsMaterial()
    particlesMaterial.size = 0.1
    particlesMaterial.sizeAttenuation = true
    // particlesMaterial.color = new THREE.Color('#ff88cc')
    particlesMaterial.transparent = true
    particlesMaterial.alphaMap = getTexture(glyphName)
    // particlesMaterial.alphaTest = 0.01
    // particlesMaterial.depthTest = false
    particlesMaterial.depthWrite = false
    particlesMaterial.blending = THREE.AdditiveBlending
    particlesMaterial.vertexColors = true


    // Points
    const particles = new THREE.Points(particleGeometry, particlesMaterial)

    return particles

}


function my_particles_coords(textureLoader, positions, glyphName) {

    /**
     * Textures
     */

        // const particleTexture = textureLoader.load('assets/static/textures/particles/3.png')
    // const particleTexture = textureLoader.load(sprite_png)

    const particleGeometry = new THREE.BufferGeometry()
    // const count = 5000

    // const positions = new Float32Array(count * 3)
    const colors = new Float32Array(positions.length)
    for (let i = 0; i < positions.length; i++) {
        colors[i] = Math.random()
    }

    particleGeometry.setAttribute(
        'position', new THREE.BufferAttribute(positions, 3),
    )

    particleGeometry.setAttribute(
        'color', new THREE.BufferAttribute(colors, 3)
    )


    var getTexture = function (glyphName) {
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');

        ctx = ctxPath(glyphName, ctx);
        var texture = new THREE.Texture(canvas);
        texture.needsUpdate = true;
        return texture;
    };


    const particlesMaterial = new THREE.PointsMaterial()
    particlesMaterial.size = 32
    particlesMaterial.sizeAttenuation = true
    // particlesMaterial.color = new THREE.Color('#ff88cc')
    particlesMaterial.transparent = true
    particlesMaterial.alphaMap = getTexture(glyphName)
    // particlesMaterial.alphaTest = 0.01
    // particlesMaterial.depthTest = false
    particlesMaterial.depthWrite = false
    particlesMaterial.blending = THREE.AdditiveBlending
    particlesMaterial.vertexColors = true


    // Points
    const particles = new THREE.Points(particleGeometry, particlesMaterial)

    return particles

}