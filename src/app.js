function app(geneData) {

    var res = localise(geneData);
    SPOTS_ARR = res[0];
    GENEPANEL = res[1];


    // Get the cell data
    CELLS_ARR = get_cell_xyz();

    iniScene();
    iniLights();
    iniContent(SPOTS_ARR, CELLS_ARR);
    animate();
    postScene();

}


function localise(geneData) {
    // moves the spots at the center of the scene

    geneData = geneData.sort((a, b) => (a.z > b.z) ? 1 : -1);

    // group by gene name
    var data = groupBy(geneData, 'Gene');

    // get all the gene names
    // geneNames = Object.keys(data).sort();

    // get the gene panel (this is assigned to a global variable)
    var genePanel = getGenePanel(geneData);

    // loop over the genes and collect in one array the coords for each spot
    var img_width = CONFIGSETTINGS.img_width,
        img_height = CONFIGSETTINGS.img_height,
        img_depth = CONFIGSETTINGS.img_depth;

    var res = []
    for (var i = 0; i < genePanel.length; i++) {
        var g = genePanel[i];

        var temp = new Float32Array(data[g].map(d => [d.x - img_width / 2, img_height / 2 - d.y, d.z - img_depth / 2]).flat());
        res.push(temp)
    }

    return [res, genePanel]
}