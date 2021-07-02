function setup(points) {
    // Canvas
    const canvas = document.querySelector('canvas.webgl')

    // Scene
    const scene = new THREE.Scene()
    // const textureLoader = new THREE.TextureLoader()
    //
    // const my_dots = my_particles(textureLoader, 'assets/static/textures/particles/3.png')
    // const particles = my_particles(textureLoader, 'assets/static/textures/particles/9.png')

    // scene.add(particles)
    // scene.add(my_dots)
    points.map(d => scene.add(d));
    // scene.add(particles_2)

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
    const camera = new THREE.PerspectiveCamera(125, sizes.width / sizes.height, 1, 20000)
    camera.position.z = 5000

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
