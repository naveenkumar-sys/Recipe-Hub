import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MathUtils, Vector3, Color } from "three";
import { Environment } from "@react-three/drei";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { useNavigate } from "react-router-dom";

const vertexShader = `
uniform float u_intensity;
uniform float u_time;
varying float vDisplacement;
void main(){
  vDisplacement = sin(position.y * 4.0 + u_time) * 0.3;
  vec3 newPosition = position + normal * (u_intensity * vDisplacement);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition,1.0);
}
`;

const fragmentShader = `
uniform vec3 u_color;
varying float vDisplacement;
void main(){
  vec3 color = mix(u_color, vec3(1.0), abs(vDisplacement));
  gl_FragColor = vec4(color,1.0);
}
`;

const Blob = () => {
  const mesh = useRef();
  const uniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_intensity: { value: 0.4 },
      u_color: { value: new Color("#ff7b00") },
    }),
    []
  );

  useFrame(({ clock }) => {
    mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
  });

  return (
    <mesh ref={mesh} scale={2}>
      <icosahedronGeometry args={[2, 20]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-screen flex items-center justify-center bg-black">
      <div className="absolute z-10 text-center">
        <h1 className="text-6xl font-bold text-white mb-8">Recipe Universe</h1>
        <button
          onClick={() => navigate("/home")}
          className="px-8 py-4 bg-orange-500 text-white rounded-full text-lg font-semibold hover:scale-105 transition"
        >
          Explore Recipes 🚀
        </button>
      </div>

      <Canvas camera={{ position: [0, 0, 8], fov: 10 }}>
        <Environment preset="studio" />
        <Blob />
        <EffectComposer>
          <Noise blendFunction={BlendFunction.ADD} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default Landing;
