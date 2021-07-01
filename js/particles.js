function my_particles(textureLoader, sprite_png) {

    /**
     * Textures
     */

        // const particleTexture = textureLoader.load('assets/static/textures/particles/3.png')
    const particleTexture = textureLoader.load(sprite_png)

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


    // var getTexture = function () {
    //     var canvas = document.createElement('canvas');
    //     canvas.width = 32;
    //     canvas.height = 32;
    //
    //     var ctx = canvas.getContext('2d');
    //     // the body
    //     // ctx.translate(-81, -84);
    //
    //     ctx.fillStyle = "yellow";
    //     ctx.beginPath();
    //     ctx.moveTo(-16, -16);
    //     ctx.lineTo(16, -16);
    //     ctx.lineTo(16, 16);
    //     ctx.lineTo(-16, 16);
    //     ctx.lineTo(-16, -16);
    //     ctx.fill();
    //
    //
    //     var texture = new THREE.Texture(canvas);
    //     texture.needsUpdate = true;
    //     return texture;
    // };

    var getTexture = function () {
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');

        ctx = ctxPath('star6', ctx);
        ctx.fillStyle = "yellow";
        var texture = new THREE.Texture(canvas);
        texture.needsUpdate = true;
        return texture;
    };


    const particlesMaterial = new THREE.PointsMaterial()
    particlesMaterial.size = 0.1
    particlesMaterial.sizeAttenuation = true
    // particlesMaterial.color = new THREE.Color('#ff88cc')
    particlesMaterial.transparent = true
    particlesMaterial.alphaMap = getTexture()
    // particlesMaterial.alphaTest = 0.01
    // particlesMaterial.depthTest = false
    particlesMaterial.depthWrite = false
    particlesMaterial.blending = THREE.AdditiveBlending
    particlesMaterial.vertexColors = true


    // Points
    const particles = new THREE.Points(particleGeometry, particlesMaterial)

    return particles

}