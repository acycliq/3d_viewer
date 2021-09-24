const vShader_glyphs = `
uniform float uSize;
uniform float zThres;
varying vec3 ndc;
void main()
{
    // Position
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;
    
    ndc = gl_Position.xyz / gl_Position.w;  // NDC in [-1, 1] (by perspective divide)
    
    // Size
    if (ndc.z > zThres) {
        // points at the far back
        gl_PointSize = 2.0;
    }
    else {
        // points close to the camera
        gl_PointSize = 13.0; //1500.0;
    }
    
    // Controls the attenuation
    //  gl_PointSize *= (1.0 / - viewPosition.z);
}
`;

