function app(geneData, cellData) {

    geneData = geneData.sort((a, b) => (a.z > b.z) ? 1 : -1);

    var cellColorRamp = classColorsCodes();
    var cellColorMap = d3.map(cellColorRamp, function (d) {
        return d.className;
    });

    cellData.forEach((d, i) => {
        d.topClass = d.ClassName[maxIndex(d.Prob)]; // Keeps the class with the highest probability
        d.color = hexToRgb(cellColorMap.get(d.topClass).color)
    });

    // convert scale, rotation, position to a Vector3
    cellData.forEach((d, i) =>  {
        d['sphere_scale'] = new THREE.Vector3(...d.sphere_scale);
        d['sphere_rotation'] = new THREE.Vector3(...d.sphere_rotation);
        d['sphere_position'] = new THREE.Vector3(...centralise_coords([d.X, d.Y, d.Z], CONFIGSETTINGS));
        d['color'] =  {r: d.color.r/255, g: d.color.g/255, b: d.color.b/255};
    });


    // group by gene name
    var data = groupBy(geneData, 'Gene');

    // get the gene panel (this is assigned to a global variable)
    GENEPANEL = getGenePanel(geneData);

    // loop over the genes and collect in one array the coords for each spot
    for (var i = 0; i < GENEPANEL.length; i++) {
        var g = GENEPANEL[i];

        // CAREFULL HERE. Division by 3 and multiplying by 6 is only for this particular dataset!!!
        // var temp = new Float32Array(data[g].map(d => [d.x/6 - img_width / 2, img_height - d.y/6 - img_height / 2, d.z/6 - img_depth / 2]).flat());

        var temp = new Float32Array(data[g].map(d => centralise_coords([d.x, d.y, d.z], CONFIGSETTINGS)).flat());
        SPOTS_ARR.push(temp)
    }

    iniScene();
    iniLights();
    iniContent(SPOTS_ARR, cellData);

    // RAYCASTER.params.Points.threshold = 3;
    // window.addEventListener('mousemove', onMouseMove, false);

    animate();
    postScene();

}

function maxIndex(data){
    //returns the index of the max of the input array.
    return data.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
}

function centralise_coords(xyz_coords, cfg) {
    var img_width = cfg.img_width,
        img_height = cfg.img_height,
        img_depth = cfg.img_depth;

    var x = xyz_coords[0],
        y = xyz_coords[1],
        z = xyz_coords[2];

    var x_local = x - img_width / 2,
        y_local = img_height - y - img_height / 2,
        z_local = z - img_depth / 2;

    return [x_local, y_local, z_local]
}