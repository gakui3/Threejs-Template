#include <common>
#pragma glslify:snoise=require(glsl-noise/simplex/3d.glsl)
#pragma glslify:HSLToRGB=require("./lib/PhotoshopMath.glsl")

varying vec3 v2f_position;

void main() {
      //gl_FragColor = vec4(vec3(snoise(v2f_position*0.02), 0, 0), 1.0);
      gl_FragColor = vec4(HSLToRGB(vec3(0.5, 0.5, 0.5)), 1.0);
}