const fShader = `
uniform float uSize;
uniform float r;
uniform float g;
uniform float b;
void main()
{
    gl_FragColor = vec4(0.5, uSize, 1.0, 0.8);
}
`