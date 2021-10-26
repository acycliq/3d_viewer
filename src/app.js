function app(geneData) {

    geneData = geneData.sort((a, b) => (a.z > b.z) ? 1 : -1);

    // group by gene name
    var data = groupBy(geneData, 'Gene');

    // get all the gene names
    geneNames = Object.keys(data).sort();

    // get the gene panel (this is assigned to a global variable)
    genePanel = getGenePanel(geneData);

    // loop over the genes and collect in one array the coords for each spot
    var img_width = configSettings.img_width,
        img_height = configSettings.img_height,
        img_depth = configSettings.img_depth;
    var spots_arr = [];
    for (var i = 0; i < geneNames.length; i++) {
        var g = geneNames[i];

        var temp = new Float32Array(data[g].map(d => [d.x - img_width / 2, img_height - d.y - img_height / 2, d.z - img_depth / 2]).flat());
        spots_arr.push(temp)
    }

    // Get the cell data
    var cells_arr = get_cell_xyz();

    iniScene();
    iniLights();
    iniContent(spots_arr, cells_arr);
    animate();
    post_scene();

}
