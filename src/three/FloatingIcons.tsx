import { Float } from '@react-three/drei'

export function FloatingIcons() {
  return (
    <>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5} position={[-3, 1, -1]}>
        <mesh>
          <boxGeometry args={[0.6, 0.6, 0.05]} />
          <meshStandardMaterial color="#00E28A" opacity={0.5} transparent roughness={0.1} metalness={0.5} />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1} position={[3, 1.5, -2]}>
        <mesh>
          <cylinderGeometry args={[0.4, 0.4, 0.05, 32]} />
          <meshStandardMaterial color="#8B7CF6" opacity={0.5} transparent roughness={0.1} metalness={0.5} />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={1.2} floatIntensity={2} position={[2.5, -1, 1]}>
        <mesh>
          <boxGeometry args={[0.5, 0.4, 0.05]} />
          <meshStandardMaterial color="#00B8D9" opacity={0.5} transparent roughness={0.1} metalness={0.5} />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={1} floatIntensity={1.5} position={[-2.5, -1.5, 1.5]}>
        <mesh>
          <torusGeometry args={[0.3, 0.1, 16, 32]} />
          <meshStandardMaterial color="#8B7CF6" opacity={0.7} transparent roughness={0.1} metalness={0.8} />
        </mesh>
      </Float>
    </>
  )
}
