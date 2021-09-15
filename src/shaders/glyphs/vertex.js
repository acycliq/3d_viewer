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
    if (ndc.z < zThres) {
        gl_PointSize = 2000.0;
    }
    else {
        gl_PointSize = 500.0;
    }
    
    // Controls the attenuation
     gl_PointSize *= (1.0 / - viewPosition.z);
}
`;
