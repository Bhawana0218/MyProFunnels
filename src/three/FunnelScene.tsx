import { Canvas, useFrame } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { GlassFunnel } from './GlassFunnel'
import { ParticleFlow } from './ParticleFlow'
import { useRef } from 'react'
import * as THREE from 'three'

function CameraRig() {
  const group = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!group.current) return
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, (state.pointer.x * Math.PI) / 14, 0.04)
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, (state.pointer.y * Math.PI) / 14, 0.04)
  })

  return (
    <group ref={group} position={[1.2, 0, 0]}>
      <GlassFunnel />
      <ParticleFlow />
    </group>
  )
}

export function FunnelScene() {
  return (
    <div className="w-full h-[480px] lg:h-[600px] pointer-events-none hidden md:flex items-center justify-end pr-[32px] opacity-90">
      <Canvas frameloop="always" camera={{ position: [1.5, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.35} />
        <spotLight position={[5, 5, 5]} intensity={2} color="#00E28A" />
        <spotLight position={[-5, -5, -5]} intensity={1.2} color="#8B7CF6" />
        <spotLight position={[0, -3, 3]} intensity={0.8} color="#00B8D9" />
        <Environment preset="city" />
        <CameraRig />
      </Canvas>
    </div>
  )
}
