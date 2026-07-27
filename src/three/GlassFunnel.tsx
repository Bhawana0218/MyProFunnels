import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshTransmissionMaterial } from '@react-three/drei'
import * as THREE from 'three'

export function GlassFunnel() {
  const meshRef = useRef<THREE.Mesh>(null)
  const innerGlowRef = useRef<THREE.PointLight>(null)

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.08
    }
    if (innerGlowRef.current) {
      innerGlowRef.current.intensity = 1.5 + Math.sin(Date.now() * 0.001) * 0.3
    }
  })

  const points = []
  for (let i = 0; i < 15; i++) {
    const progress = i / 14
    let x, y
    if (progress < 0.7) {
      x = 2 - progress * 2.2
      y = 2 - progress * 4
    } else {
      x = 0.46
      y = 2 - progress * 4
    }
    points.push(new THREE.Vector2(Math.max(x, 0.4), y))
  }

  return (
    <group>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <latheGeometry args={[points, 64]} />
        <MeshTransmissionMaterial
          backside={true}
          samples={6}
          thickness={0.8}
          chromaticAberration={0.3}
          ior={1.45}
          color="#c4b5fd"
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Violet internal glow */}
      <pointLight ref={innerGlowRef} position={[0, -1, 0]} color="#8B7CF6" intensity={1.5} distance={6} />

      {/* Top rim — signal green */}
      <mesh position={[0, 2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2, 0.05, 16, 100]} />
        <meshStandardMaterial color="#00E28A" metalness={0.8} roughness={0.2} emissive="#00E28A" emissiveIntensity={0.15} />
      </mesh>

      {/* Bottom rim — signal green */}
      <mesh position={[0, -3.6, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.4, 0.05, 16, 100]} />
        <meshStandardMaterial color="#00E28A" metalness={0.8} roughness={0.2} emissive="#00E28A" emissiveIntensity={0.15} />
      </mesh>
    </group>
  )
}
