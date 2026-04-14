import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";

// Vertex shader for brain-like displacement
const brainVertexShader = `
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying vec2 vUv;
  uniform float uTime;
  
  // Simplex-like noise
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
  
  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute(permute(permute(
      i.z + vec4(0.0, i1.z, i2.z, 1.0))
      + i.y + vec4(0.0, i1.y, i2.y, 1.0))
      + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }
  
  void main() {
    vUv = uv;
    vNormal = normal;
    
    // Create brain-like sulci and gyri with layered noise
    vec3 pos = position;
    float n1 = snoise(pos * 2.8) * 0.12;
    float n2 = snoise(pos * 5.5) * 0.06;
    float n3 = snoise(pos * 11.0) * 0.025;
    
    // Flatten bottom for brain stem area
    float bottomFlatten = smoothstep(-1.0, -0.5, pos.y) * 0.3 + 0.7;
    
    // Elongate slightly on x-axis for brain shape
    float displacement = (n1 + n2 + n3) * bottomFlatten;
    
    // Central fissure
    float fissure = exp(-pow(pos.x * 8.0, 2.0)) * 0.06;
    displacement -= fissure;
    
    // Subtle pulse
    displacement += sin(uTime * 0.5) * 0.005;
    
    pos += normal * displacement;
    
    vPosition = pos;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const brainFragmentShader = `
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying vec2 vUv;
  uniform float uTime;
  
  void main() {
    // Base brain color - translucent blue/pink
    vec3 baseColor = vec3(0.45, 0.55, 0.85);
    vec3 pinkTint = vec3(0.75, 0.45, 0.55);
    vec3 blueGlow = vec3(0.3, 0.6, 1.0);
    
    // Fresnel for edge glow
    vec3 viewDir = normalize(cameraPosition - vPosition);
    float fresnel = pow(1.0 - max(dot(viewDir, vNormal), 0.0), 3.0);
    
    // Mix colors based on position and fresnel
    float yFactor = smoothstep(-1.0, 1.0, vPosition.y);
    vec3 color = mix(pinkTint, baseColor, yFactor);
    
    // Add internal glow
    color = mix(color, blueGlow, fresnel * 0.7);
    
    // Subsurface scattering approximation
    float sss = pow(max(dot(viewDir, -vNormal), 0.0), 2.0) * 0.3;
    color += pinkTint * sss;
    
    // Pulsing glow on neural pathways
    float pulse = sin(vPosition.y * 10.0 + uTime * 2.0) * 0.5 + 0.5;
    color += blueGlow * pulse * 0.08;
    
    // Transparency - more transparent at edges
    float alpha = mix(0.85, 0.4, fresnel);
    
    gl_FragColor = vec4(color, alpha);
  }
`;

function BrainMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
  }), []);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Smooth Y-axis rotation like the reference video
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      // Subtle breathing
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05 - 0.1;
      uniforms.uTime.value = state.clock.elapsedTime;
    }
  });
  
  return (
    <group>
      {/* Main brain mesh */}
      <mesh ref={meshRef} scale={[1.15, 1.0, 1.05]}>
        <sphereGeometry args={[1.4, 128, 128]} />
        <shaderMaterial
          vertexShader={brainVertexShader}
          fragmentShader={brainFragmentShader}
          uniforms={uniforms}
          transparent
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>
      
      {/* Inner glow core */}
      <mesh scale={[1.0, 0.88, 0.92]}>
        <sphereGeometry args={[1.2, 64, 64]} />
        <meshStandardMaterial
          color="#8B4570"
          emissive="#5a2040"
          emissiveIntensity={0.4}
          transparent
          opacity={0.35}
          roughness={1}
        />
      </mesh>
      
      {/* Brain stem */}
      <mesh position={[0, -1.55, 0]} rotation={[0.1, 0, 0]}>
        <cylinderGeometry args={[0.15, 0.1, 0.5, 16]} />
        <meshStandardMaterial
          color="#6a8cba"
          emissive="#3a5a8a"
          emissiveIntensity={0.3}
          transparent
          opacity={0.7}
          roughness={0.6}
        />
      </mesh>
    </group>
  );
}

function GlowRing() {
  const ringRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.1;
      const s = 1 + Math.sin(state.clock.elapsedTime * 0.8) * 0.03;
      ringRef.current.scale.set(s, s, s);
    }
  });
  
  return (
    <mesh ref={ringRef} position={[0, 0, -0.5]}>
      <ringGeometry args={[2.2, 2.8, 64]} />
      <meshBasicMaterial
        color="#4a6fa5"
        transparent
        opacity={0.06}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

const Brain3D = () => {
  return (
    <div className="w-full aspect-square max-w-[500px] mx-auto">
      <Canvas
        camera={{ position: [0, 0.3, 4.5], fov: 40 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#a0c0ff" />
        <directionalLight position={[-3, 2, -2]} intensity={0.5} color="#ff80aa" />
        <pointLight position={[0, 0, 3]} intensity={0.8} color="#6090d0" distance={8} />
        <pointLight position={[0, -2, 0]} intensity={0.4} color="#9060c0" distance={6} />
        
        <BrainMesh />
        <GlowRing />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default Brain3D;