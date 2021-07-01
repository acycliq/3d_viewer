function app(geneData) {

    // group by gene name
    var data = groupBy(geneData, 'Gene');

    // get all the gene names
    var geneNames = Object.keys(data).sort();

    var my_gene = 'Cck'
    var xyz_coords = new Float32Array(data[my_gene].map(d => [Math.random()*10, Math.random()*10, 1]).flat())

    const textureLoader = new THREE.TextureLoader()
    const diamonds = my_particles_coords(textureLoader, xyz_coords, 'diamond')
    setup(diamonds)
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
