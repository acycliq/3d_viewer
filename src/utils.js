//
// Some useful common functions
//

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

function getTaxonomy(gene) {
    return glyphSettings().filter(d => d.gene === gene)[0].taxonomy
}

function getGlyph(gene) {
    return glyphSettings().filter(d => d.gene === gene)[0].glyphName
}

function getColor(gene) {
    const t = getTaxonomy(gene);
    return glyphColor(t)
}

function getShader(glyph){
    return glyph === 'star6'? fShader_star6:
        glyph==='star5'? fShader_star5:
            glyph === 'diamond'? fShader_diamond:
                glyph === 'square'? fShader_square:
                    glyph === 'triangleUp'? fShader_triangleUp:
                        glyph === 'triangleDown'? fShader_triangleDown:
                            glyph === 'triangleRight'? fShader_triangleRight:
                                glyph === 'triangleLeft'? fShader_triangleLeft:
                                    glyph === 'cross'? fShader_cross:
                                        glyph === 'plus'? fShader_plus:
                                            glyph === 'asterisk'? fShader_asterisk:
                                                glyph === 'circle'? fShader_circle:
                                                    glyph === 'point'? fShader_point:
                                                        console.log('Shader for ' + glyph + ' is missing.')
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
