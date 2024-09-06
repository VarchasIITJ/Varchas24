precision mediump float;

varying vec2 vUv; // Pass the uv to the fragment shader


void main() {
    vUv = uv; // Assign the uv attribute to vUv
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
