const fShader = `

#define PI 3.1415926
mat2 rot(float a){
    return mat2( cos(a), -sin(a), sin(a), cos(a));
}

void main() 
{

    vec2 uv = gl_PointCoord.xy - 0.5;

    vec3 col = vec3(0);
    float shape = 0.;
    
    vec2 cUv = abs(uv * rot(PI * 0.25));
    
    shape = 1. - step(0.1, min(cUv.x, cUv.y)) - step(0.45, max(cUv.x, cUv.y));
    col = mix(col, vec3(1), shape);


    gl_FragColor = vec4(col, 1.0);
}
`