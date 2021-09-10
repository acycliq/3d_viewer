function app(geneData) {
    geneData = geneData .sort((a, b) => (a.z > b.z) ? 1 : -1)

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
        // for vizgen
        // var temp = new Float32Array(data[g].map(d => [d.x - img_width/2, img_height - d.y - img_height/2, (1.5 * (1 + d.z_stack)) - img_depth/2]).flat());

        //for ucl
        var temp = new Float32Array(data[g].map(d => [d.x - img_width / 2,  d.z - img_depth / 2, img_height - d.y - img_height / 2]).flat());
        coords_arr.push(temp)

        // rgb_arr.push(hexToRgb(getColor(g)))
    }

    render_scene_2().initScene()
    render_scene_2().initMisc()
    render_scene_2().initExample(null)
    render_scene_2().animate();
    document.body.appendChild( renderer.domElement );

    // var points = geneNames.map((d, i) => my_particles(coords_arr[i], d));
    // var cells = my_cells(0, 0, 0)
    // var s = make_sphere({r:0.0, g:0.0, b:1.0}, 2, 0)
    // render_scene(points, cells, s);
    console.log(geneNames)
}

function make_sphere(color, radius) {
    var sphereGeometry = new THREE.SphereGeometry(radius, 50, 50);
    var material = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        // alphatest: 0.001,
        side: THREE.DoubleSide,
        uniforms: {
            r: {value: color.r},
            g: {value: color.g},
            b: {value: color.b},
        },
        vertexShader: `
                varying vec3 p;
                void main() {
                  p = position;
                  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }`,
        fragmentShader: `
                uniform float r;
                uniform float g;
                uniform float b;
                varying vec3 p;  // position of current pixel relative to sphere center
                void main() {
                   vec3 a = abs(p)*3.0;
                   float opacity = a.x<1. || a.y<1. || a.z<1. ? 0.6 : 0.3;
                   gl_FragColor = vec4(vec3(r, g, b), opacity);
                }`
    });
    var sphere = new THREE.Mesh(sphereGeometry, material);
    return sphere
}
