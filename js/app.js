function init() {


    const textureLoader = new THREE.TextureLoader()

    const my_dots = my_particles(textureLoader, 'assets/static/textures/particles/3.png')
    const particles = my_particles(textureLoader, 'assets/static/textures/particles/9.png')
    const heart = my_sprites()

    setup(particles)

}