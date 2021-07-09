function app(geneData) {

    // group by gene name
    var data = groupBy(geneData, 'Gene');

    // get all the gene names
    var geneNames = Object.keys(data).sort();

    function getTaxonomy(gene) {
        if (glyphMap.get(gene)) {
            out = glyphMap.get(gene).taxonomy
        } else {
            out = glyphMap.get('Generic').taxonomy
        }
        return out
    }

    function getGlyphName(gene) {
        if (glyphMap.get(gene)) {
            out = glyphMap.get(gene).glyphName
        } else {
            out = glyphMap.get('Generic').glyphName
        }
        return out
    }

    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    // get the svg markers (glyphs)
    var glyphs = glyphSettings();
    // var getColor = glyphColor();
    var glyphMap = d3.map(glyphs, function (d) {
        return d.gene;
    });


    // loop over the genes and collect in one array the coords for each spot
    var img_width = 1260,
        img_height = 340
        img_depth = 60;
    var coords_arr = [];
    for (var i = 0; i < geneNames.length; i++) {
        var g = geneNames[i]
        var temp = new Float32Array(data[g].map(d => [d.x - img_width/2, img_height - d.y - img_height/2, d.z - img_depth/2]).flat());
        coords_arr.push(temp)
    }

    function getGlyphColor(gene) {
        var _name = getGlyphName(gene)
        var _taxonomy = glyphSettings().filter(d => d.gene === gene)[0].taxonomy
        var _hex = glyphColor(_taxonomy)
        var _rgb = hexToRgb(_hex)

        return _rgb
    }

    const textureLoader = new THREE.TextureLoader()
    // const gName = getGlyphName('Cck')
    // var _taxonomy = glyphSettings().filter(d => d.gene === 'Cck')[0].taxonomy
    // var _hex = glyphColor(_taxonomy)
    // var _rgb = hexToRgb(_hex)

    // var _rgb = getGlyphColor('Cck')

    // var glyphColor = getColor(getTaxonomy('Cck'))
    var points = geneNames.map((d, i) => my_particles(textureLoader, coords_arr[i], getGlyphName(d), getGlyphColor(d)))
    // const diamonds = my_particles(textureLoader, xyz_coords, 'diamond')
    render_scene(points)
    animate()
    console.log(geneNames)


}


function init() {
    const textureLoader = new THREE.TextureLoader()

    // const my_dots = my_particles(textureLoader, 'assets/static/textures/particles/3.png')
    const diamonds = my_particles(textureLoader, 'diamond')
    const squares = my_particles(textureLoader, 'square')
    setup(diamonds, squares)
}


const groupBy = (array, key) => {
    // from https://learnwithparam.com/blog/how-to-group-by-array-of-objects-using-a-key/
    // Return the end result
    return array.reduce((result, currentValue) => {
        // If an array already present for key, push it to the array. Else create an array and push the object
        (result[currentValue[key]] = result[currentValue[key]] || []).push(
            currentValue
        );
        // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
        return result;
    }, {}); // empty object is the initial value for result object
};
