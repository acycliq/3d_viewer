function iniContent(spots, cells) {
    console.log('Init Viewer');

    var points = geneNames.map((d, i) => my_particles(spots[i], d));
    points.map(d => scene.add(d));

    // add_spheres();
    instancedMesh = make_cells(cells);
    scene.add(instancedMesh.back); // needs to be rendered first
    scene.add(instancedMesh.front);

}
