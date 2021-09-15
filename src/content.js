function addContent(data) {
    console.log('Init Viewer')

    var points = geneNames.map((d, i) => my_particles(data[i], d));
    points.map(d => scene.add(d));

    var sphere = add_spheres()
    scene.add(sphere)
}
