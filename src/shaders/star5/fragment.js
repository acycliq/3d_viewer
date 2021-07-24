const fShader = `
// NEEDS TO BE DONE> HAS NOT EVEN STARTED

float lineSegment(vec2 p, vec2 a, vec2 b) {
    float thickness = 1.0/100.0;
    vec2 pa = p - a, ba = b - a;
    float h = clamp( dot(pa,ba)/dot(ba,ba), 0.0, 1.0 );
    return step(0.05, length(pa - ba*h));
}


void main() 
{

    float side = 1.0;  // fragment has side length = 1.0
    float r = side/2.0;
    vec2 p = vec2(r);  // center of the fragment
    
        float line_1  = 1.0 - lineSegment(gl_PointCoord, vec2(p.x, p.y + 0.658351875 * r), vec2(p.x + 0.618027443 * r, p.y + 1.0 * r));
        float line_2  = 1.0 - lineSegment(gl_PointCoord, vec2(p.x + 0.618027443 * r, p.y + 1.0 * r), vec2(p.x + 0.5 * r, p.y + 0.27637816 * r));
        float line_3  = 1.0 - lineSegment(gl_PointCoord, vec2(p.x + 0.5 * r, p.y + 0.27637816 * r), vec2(p.x + 1.0 * r, p.y - 0.236080209 * r));
        float line_4  = 1.0 - lineSegment(gl_PointCoord, vec2(p.x + 1.0 * r, p.y - 0.236080209 * r),  vec2(p.x + 0.309026865 * r, p.y - 0.341634306 * r));
        float line_5  = 1.0 - lineSegment(gl_PointCoord, vec2(p.x + 0.309026865 * r, p.y - 0.341634306 * r), vec2(p.x + 0.0 * r, p.y - 1.0 * r));
        float line_6  = 1.0 - lineSegment(gl_PointCoord, vec2(p.x + 0.0 * r, p.y - 1.0 * r), vec2(p.x - 0.309026865 * r, p.y - 0.341634306 * r));
        float line_7  = 1.0 - lineSegment(gl_PointCoord, vec2(p.x - 0.309026865 * r, p.y - 0.341634306 * r), vec2(p.x - 1.0 * r, p.y - 0.236080209 * r));
        float line_8  = 1.0 - lineSegment(gl_PointCoord, vec2(p.x - 1.0 * r, p.y - 0.236080209 * r),  vec2(p.x - 0.5 * r, p.y + 0.27637816 * r));
        float line_9  = 1.0 - lineSegment(gl_PointCoord, vec2(p.x - 0.5 * r, p.y + 0.27637816 * r), vec2(p.x - 0.618027443 * r, p.y + 1.0 * r));
        float line_10 = 1.0 - lineSegment(gl_PointCoord, vec2(p.x - 0.618027443 * r, p.y + 1.0 * r),  vec2(p.x, p.y + 0.658351875 * r));
        float line_11 = 1.0 - lineSegment(gl_PointCoord, vec2(p.x, p.y + 0.658351875 * r), vec2(p.x, p.y + 0.658351875 * r));
    
    float shaper = line_1 + line_2 + line_3 + line_4 + line_5 + line_6 + line_7 + line_8 + line_9 + line_10 + line_11;

    gl_FragColor = vec4(vec3(shaper), 1.0);
}
`


    //
    // else if (glyphName === 'star5') {
    //     ctx.beginPath();
    //     ctx.moveTo(p.x, p.y + 0.658351875 * r);
    //     ctx.lineTo(p.x + 0.618027443 * r, p.y + 1 * r);
    //     ctx.lineTo(p.x + 0.5 * r, p.y + 0.27637816 * r);
    //     ctx.lineTo(p.x + 1 * r, p.y - 0.236080209 * r);
    //     ctx.lineTo(p.x + 0.309026865 * r, p.y - 0.341634306 * r);
    //     ctx.lineTo(p.x + 0 * r, p.y - 1 * r);
    //     ctx.lineTo(p.x - 0.309026865 * r, p.y - 0.341634306 * r);
    //     ctx.lineTo(p.x - 1 * r, p.y - 0.236080209 * r);
    //     ctx.lineTo(p.x - 0.5 * r, p.y + 0.27637816 * r);
    //     ctx.lineTo(p.x - 0.618027443 * r, p.y + 1 * r);
    //     ctx.lineTo(p.x, p.y + 0.658351875 * r);
    //     ctx.closePath();
    // }

    //
    // else if (glyphName === 'star5') {

        // float line_1 = 1.0 - lineSegment(vec2(0.5, 0.5 + 0.658351875 * 0.5), vec2(0.5 + 0.618027443 * 0.5, 0.5 + 1.0 * 0.5));
        // float line_2 = 1.0 - lineSegment(vec2(0.5 + 0.618027443 * 0.5, 0.5 + 1.0 * 0.5), vec2(0.5 + 0.5 * 0.5, 0.5 + 0.27637816 * 0.5));
        // float line_3 = 1.0 - lineSegment(vec2(0.5 + 0.5 * 0.5, 0.5 + 0.27637816 * 0.5), vec2(0.5 + 1.0 * 0.5, 0.5 - 0.236080209 * 0.5));
        // float line_4 = 1.0 - lineSegment(vec2(0.5 + 1.0 * 0.5, 0.5 - 0.236080209 * 0.5), vec2(0.5 + 0.309026865 * 0.5, 0.5 - 0.341634306 * 0.5));
        // float line_5 = 1.0 - lineSegment(vec2(0.5 + 0.309026865 * 0.5, 0.5 - 0.341634306 * 0.5), vec2(0.5 + 0.0 * 0.5, 0.5 - 1.0 * 0.5));
        // float line_6 = 1.0 - lineSegment(vec2(0.5 + 0.0 * 0.5, 0.5 - 1.0 * 0.5), vec2(0.5 - 0.309026865 * 0.5, 0.5 - 0.341634306 * 0.5));
        // float line_7 = 1.0 - lineSegment(vec2(0.5 - 0.309026865 * 0.5, 0.5 - 0.341634306 * 0.5), vec2(0.5 - 1.0 * 0.5, 0.5 - 0.236080209 * 0.5));
        // float line_8 = 1.0 - lineSegment(vec2(0.5 - 1.0 * 0.5, 0.5 - 0.236080209 * 0.5), vec2(0.5 - 0.5 * r, 0.5 + 0.27637816 * 0.5));
        // float line_9 = 1.0 - lineSegment(vec2(0.5 - 0.5 * r, 0.5 + 0.27637816 * 0.5), vec2(0.5 - 0.618027443 * 0.5, 0.5 + 1.0 * 0.5));
        // float line_10 = 1.0 - lineSegment(vec2(0.5 - 0.618027443 * 0.5, 0.5 + 1.0 * 0.5), vec2(0.5, 0.5 + 0.658351875 * 0.5));
        // float line_11 = 1.0 - lineSegment(vec2(0.5, 0.5 + 0.658351875 * 0.5), vec2(0.5, 0.5 + 0.658351875 * 0.5));
        //


        // float line_1  = 1.0 - lineSegment(vec2(p.x, p.y + 0.658351875 * r), vec2(p.x + 0.618027443 * r, p.y + 1.0 * r));
        // float line_2  = 1.0 - lineSegment(vec2(p.x + 0.618027443 * r, p.y + 1.0 * r), vec2(p.x + 0.5 * r, p.y + 0.27637816 * r));
        // float line_3  = 1.0 - lineSegment(vec2(p.x + 0.5 * r, p.y + 0.27637816 * r), vec2(p.x + 1.0 * r, p.y - 0.236080209 * r));
        // float line_4  = 1.0 - lineSegment(vec2(p.x + 1.0 * r, p.y - 0.236080209 * r),  vec2(p.x + 0.309026865 * r, p.y - 0.341634306 * r));
        // float line_5  = 1.0 - lineSegment(vec2(p.x + 0.309026865 * r, p.y - 0.341634306 * r), vec2(p.x + 0.0 * r, p.y - 1.0 * r));
        // float line_6  = 1.0 - lineSegment(vec2(p.x + 0.0 * r, p.y - 1.0 * r), vec2(p.x - 0.309026865 * r, p.y - 0.341634306 * r));
        // float line_7  = 1.0 - lineSegment(vec2(p.x - 0.309026865 * r, p.y - 0.341634306 * r), vec2(p.x - 1.0 * r, p.y - 0.236080209 * r));
        // float line_8  = 1.0 - lineSegment(vec2(p.x - 1.0 * r, p.y - 0.236080209 * r),  vec2(p.x - 0.5 * r, p.y + 0.27637816 * r));
        // float line_9  = 1.0 - lineSegment(vec2(p.x - 0.5 * r, p.y + 0.27637816 * r), vec2(p.x - 0.618027443 * r, p.y + 1.0 * r));
        // float line_10 = 1.0 - lineSegment(vec2(p.x - 0.618027443 * r, p.y + 1.0 * r),  vec2(p.x, p.y + 0.658351875 * r));
        // float line_11 = 1.0 - lineSegment(vec2(p.x, p.y + 0.658351875 * r), vec2(p.x, p.y + 0.658351875 * r));