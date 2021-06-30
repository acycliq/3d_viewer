function init() {
    // Canvas
    const canvas = document.querySelector('canvas.webgl')

    // Scene
    const scene = new THREE.Scene()

    const textureLoader = new THREE.TextureLoader()

    my_dots = my_particles(textureLoader)

    /**
     * Textures
     */
        // const textureLoader = new THREE.TextureLoader()
    const particleTexture = textureLoader.load('./assets/static/textures/particles/9.png')

    /**
     * particles
     */
    const particleGeometry = new THREE.BufferGeometry()
    const count = 50000

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


    const particlesMaterial = new THREE.PointsMaterial()
    particlesMaterial.size = 0.1
    particlesMaterial.sizeAttenuation = true
    // particlesMaterial.color = new THREE.Color('#ff88cc')
    particlesMaterial.transparent = true
    particlesMaterial.alphaMap = particleTexture
    // particlesMaterial.alphaTest = 0.01
    // particlesMaterial.depthTest = false
    particlesMaterial.depthWrite = false
    particlesMaterial.blending = THREE.AdditiveBlending
    particlesMaterial.vertexColors = true

    // Points
    const particles = new THREE.Points(particleGeometry, particlesMaterial)
    scene.add(particles)
    scene.add(my_dots)

    /**
     * Sizes
     */
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    window.addEventListener('resize', () => {
        // Update sizes
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight

        // Update camera
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()

        // Update renderer
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })

    /**
     * Camera
     */

        // Base camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
    camera.position.z = 3
    scene.add(camera)

    // Controls
    const controls = new THREE.OrbitControls(camera, canvas)
    controls.enableDamping = true

    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    /**
     * Animate
     */
    const clock = new THREE.Clock()

    const tick = () => {
        const elapsedTime = clock.getElapsedTime()

        // Update controls
        controls.update()

        // Render
        renderer.render(scene, camera)

        // Call tick again on the next frame
        window.requestAnimationFrame(tick)
    }

    tick()


}
