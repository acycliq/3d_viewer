const vShader_glyphs = `
uniform float glyphSize;
uniform float zThres;
varying vec3 view;
void main()
{
    // Position
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;
    
    view = -1.0 * viewPosition.xyz;  // NDC in [-1, 1] (by perspective divide)
    
    // Size
    if (view.z > zThres) {
        // points at the far back
        gl_PointSize = 2.0;
    }
    else {
        // points close to the camera
        gl_PointSize = glyphSize; //1500.0;
    }
    
    // Controls the attenuation
    //  gl_PointSize *= (1.0 / - viewPosition.z);
}
`;

