function iniContent(spots, cells) {
    console.log('Init Viewer');

    var points = geneNames.map((d, i) => my_particles(spots[i], d));
    points.map(d => SCENE.add(d));

    // add_spheres();
    instancedMesh = make_cells(cells);
    SCENE.add(instancedMesh.back); // needs to be rendered first
    SCENE.add(instancedMesh.front_face.instancedMesh);

}
