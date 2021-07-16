function app(geneData) {

    // group by gene name
    var data = groupBy(geneData, 'Gene');

    // get all the gene names
    var geneNames = Object.keys(data).sort();

    // loop over the genes and collect in one array the coords for each spot
    var img_width = configSettings.img_width,
        img_height = configSettings.img_height,
        img_depth = configSettings.img_depth;
    var coords_arr = [];
    for (var i = 0; i < geneNames.length; i++) {
        var g = geneNames[i];
        // for vizgen
        // var temp = new Float32Array(data[g].map(d => [d.x - img_width/2, img_height - d.y - img_height/2, (1.5 * (1 + d.z_stack)) - img_depth/2]).flat());

        //for ucl
        var temp = new Float32Array(data[g].map(d => [d.x - img_width/2, img_height - d.y - img_height/2, d.z - img_depth/2]).flat());
        coords_arr.push(temp)
    }

    var points = geneNames.map((d, i) => my_particles(coords_arr[i]));
    render_scene(points);
    console.log(geneNames)
}
