import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function ParticleFlow() {
  const count = 60
  const mesh = useRef<THREE.InstancedMesh>(null)

  const dummy = useMemo(() => new THREE.Object3D(), [])
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2
      const radiusOffset = Math.random() * 0.8
      const y = Math.random() * 5.5 - 3.5
      const speed = 0.8 + Math.random() * 0.5
      temp.push({ angle, radiusOffset, y, speed })
    }
    return temp
  }, [count])

  // Signal green for leads, warm glow for output nodes
  const color1 = new THREE.Color('#00E28A') // Signal green (leads entering)
  const color2 = new THREE.Color('#00B8D9') // Teal (mid-funnel)
  const color3 = new THREE.Color('#8B7CF6') // Frost violet (output nodes)
  const colorObj = new THREE.Color()

  useFrame((_, delta) => {
    if (!mesh.current) return

    particles.forEach((particle, i) => {
      particle.y -= delta * particle.speed
      particle.angle += delta * particle.speed * 1.5

      let currentRadius = 0.4
      if (particle.y > -0.8) {
        const normalizedY = (particle.y + 0.8) / 2.8
        currentRadius = 0.4 + normalizedY * 1.6
      }
      currentRadius *= (0.5 + particle.radiusOffset)

      if (particle.y < -3.6) {
        particle.y = 2.5
      }

      dummy.position.set(
        Math.cos(particle.angle) * currentRadius,
        particle.y,
        Math.sin(particle.angle) * currentRadius
      )

      // Output nodes at bottom — abstract glowing revenue nodes
      const isOutputNode = particle.y < -2
      const scale = isOutputNode ? 1.4 : 0.6
      dummy.scale.set(scale, scale, isOutputNode ? 0.15 : scale)

      if (isOutputNode) {
        dummy.rotation.x += delta * 4
        dummy.rotation.y += delta * 2
      } else {
        dummy.rotation.set(0, 0, 0)
      }

      dummy.updateMatrix()
      mesh.current!.setMatrixAt(i, dummy.matrix)

      // Color: green at top → teal in middle → violet at bottom output nodes
      const t = Math.max(0, Math.min(1, (-particle.y) / 2))
      if (t < 0.5) {
        colorObj.lerpColors(color1, color2, t * 2)
      } else {
        colorObj.lerpColors(color2, color3, (t - 0.5) * 2)
      }

      colorObj.multiplyScalar(isOutputNode ? 1.4 : 1)
      mesh.current!.setColorAt(i, colorObj)
    })
    mesh.current.instanceMatrix.needsUpdate = true
    if (mesh.current.instanceColor) mesh.current.instanceColor.needsUpdate = true
  })

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshStandardMaterial toneMapped={false} emissive="#ffffff" emissiveIntensity={0.2} roughness={0.2} metalness={0.8} />
    </instancedMesh>
  )
}
