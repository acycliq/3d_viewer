function app(geneData) {

    geneData = geneData.sort((a, b) => (a.z > b.z) ? 1 : -1)

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
    coords_arr = [];
    var rgb_arr = [];
    for (var i = 0; i < geneNames.length; i++) {
        var g = geneNames[i];

        var temp = new Float32Array(data[g].map(d => [d.x - img_width / 2, img_height - d.y - img_height / 2, d.z - img_depth / 2]).flat());
        coords_arr.push(temp)
    }

    cells_arr = get_cell_xyz();


    paramsGUI = {
        near: 20.0,
        far: 10000.0,
        envMap: true,
        metalness: 0.5,
        transmission: 0.5,
        intensity: 0.1,
        glyphSize: 12,
        dotSize: 2,
        glyphSwitch: 100,
        numSpots: 0,
        numCells: 0,
        mouseEvents: false,
        addAxes: false,
    };
    var numSpots = [0, 100000, 1000000, 5000000, 10000000, 20000000],
        numCells = [0, 100, 1000, 100000, 150000];


    if (!gui){
        gui = new dat.GUI();
        gui.add(paramsGUI, 'numSpots', numSpots).name('Num simulated spots').onChange(onSelectCounts);
        gui.add(paramsGUI, 'numCells', numCells).name('Num simulated cells').onChange(onSelectCounts);
    }

    function onSelectCounts() {
        console.log('Selected: ' + paramsGUI.numSpots + ' number of spots');
        var spots_xyz,
            cells_xyz;
        if (+paramsGUI.numSpots || +paramsGUI.numCells) {
            paramsGUI.numSpots? spots_xyz = simulate_spots(paramsGUI.numSpots) : spots_xyz = coords_arr;
            paramsGUI.numCells? cells_xyz = get_sim_cell_xyz(paramsGUI.numCells) : cells_xyz = cells_arr;
            // console.log(spots_xyz);
        }
        else{
            spots_xyz = coords_arr;
            cells_xyz = cells_arr;
        }

        iniScene();
        iniLights();
        iniContent(spots_xyz, cells_xyz);

        if (!gui) {
            gui.open();
        }
    }

    // if the page loads for the very first time, load the actual dataset
    (function (){
        console.log('Immediately-Invoked Function Expression');
        iniScene();
        iniLights();
        iniContent(coords_arr, cells_arr);
    })();


    function simulate_spots(counts) {
        var nG = geneNames.length;
        var N = Math.ceil(counts / nG);
        var _sim_data = [];
        for (var i = 0; i < geneNames.length; i++) {
            var temp = new Float32Array(N * 3);
            for (var j = 0; j < 3 * N; j++) {
                var cur = 3 * j;
                temp[3*j] = img_width * Math.random() - img_width / 2;
                temp[3*j + 1] = img_height * Math.random() - img_height / 2;
                temp[3*j + 2] = img_depth * Math.random() - img_depth / 2;
            }
            _sim_data[i] = temp
        }
        return _sim_data
    }
}



// /// DEPRECATED CODE
// function make_sphere(color, radius) {
//     var sphereGeometry = new THREE.SphereGeometry(radius, 50, 50);
//     var material = new THREE.ShaderMaterial({
//         transparent: true,
//         depthWrite: false,
//         // alphatest: 0.001,
//         side: THREE.DoubleSide,
//         uniforms: {
//             r: {value: color.r},
//             g: {value: color.g},
//             b: {value: color.b},
//         },
//         vertexShader: `
//                 varying vec3 p;
//                 void main() {
//                   p = position;
//                   gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//                 }`,
//         fragmentShader: `
//                 uniform float r;
//                 uniform float g;
//                 uniform float b;
//                 varying vec3 p;  // position of current pixel relative to sphere center
//                 void main() {
//                    vec3 a = abs(p)*3.0;
//                    float opacity = a.x<1. || a.y<1. || a.z<1. ? 0.6 : 0.3;
//                    gl_FragColor = vec4(vec3(r, g, b), opacity);
//                 }`
//     });
//     var sphere = new THREE.Mesh(sphereGeometry, material);
//     return sphere
// }
