const fShader = `
            uniform vec2 u_resolution;
            varying vec2 vUv;
            uniform vec2 u_mouse;

            void main() {
                vec3 color = vec3(0.0);
                vec3 shape = vec3(0.0);

                // Each result will return 1.0 (white) or 0.0 (black).
                float left = step(0.1, gl_PointCoord.x);   // 1 if x greater than 0.1
                float top = step(0.1, gl_PointCoord.y);    // 1 if y greater than 0.1
                float bottom = 1.0 - step(0.9, gl_PointCoord.y); // 1 if y less than 0.9
                float right = 1.0 - step(0.9, gl_PointCoord.x); // 1 if x less than 0.9

                // The multiplication of left*bottom will be similar to the logical AND.
                shape = vec3(1.0 - top * left * bottom * right);
                color = vec3(1.0, 0.0, 0.5);

                gl_FragColor = vec4(shape * color, 1.0);
            }
`