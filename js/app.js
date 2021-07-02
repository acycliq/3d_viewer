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

    // get the svg markers (glyphs)
    var glyphs = glyphSettings();
    var getColor = glyphColor;
    var glyphMap = d3.map(glyphs, function (d) {
        return d.gene;
    });

    var my_gene = 'Cck'
    // var xyz_coords = new Float32Array(data[my_gene].map(d => [Math.random()*5000-2500, Math.random()*5000-2500, 1]).flat())
    var xyz_coords = new Float32Array(data[my_gene].map(d => [d.x - 2500, d.y - 2500, 1]).flat())

    // loop over the genes and collect in one array the coords for each spot
    var coords_arr = [];
    for (var i = 0; i < geneNames.length; i++) {
        var g = geneNames[i]
        var temp = new Float32Array(data[g].map(d => [d.x - 2500, d.y - 2500, 1]).flat())
        coords_arr.push(temp)
    }

    const textureLoader = new THREE.TextureLoader()
    // const gName = getGlyphName('Cck')
    var points = geneNames.map((d, i) => my_particles(textureLoader, coords_arr[i], getGlyphName(d)))
    // const diamonds = my_particles(textureLoader, xyz_coords, 'diamond')
    setup(points)
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
