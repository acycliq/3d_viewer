function iniContent(data) {
    console.log('Init Viewer')

    var points = geneNames.map((d, i) => my_particles(data[i], d));
    points.map(d => scene.add(d));

    // add_spheres();
    var instancedMesh = make_cells();
    scene.add(instancedMesh.back); // needs to be rendered first
    scene.add(instancedMesh.front);

}
