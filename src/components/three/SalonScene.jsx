import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ContactShadows, Float, MeshTransmissionMaterial } from '@react-three/drei'
import * as THREE from 'three'

function Sculpture() {
  const group = useRef()
  const target = useRef({ x: 0, y: 0 })

  useFrame((state, delta) => {
    if (!group.current) return
    const ease = 1 - Math.pow(.001, delta)
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, target.current.x, ease)
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, target.current.y, ease)
    group.current.position.y = Math.sin(state.clock.elapsedTime * .45) * .03
  })

  const move = (event) => {
    target.current.x = event.pointer.x * .22
    target.current.y = -event.pointer.y * .08
  }

  const reset = () => {
    target.current.x = 0
    target.current.y = 0
  }

  return (
    <group ref={group} onPointerMove={move} onPointerOut={reset}>
      <mesh position={[-.72, -.18, .05]} rotation={[.08, -.18, .18]}>
        <torusGeometry args={[1.05, .14, 32, 120]}/>
        <meshStandardMaterial color="#b78550" metalness={.92} roughness={.15}/>
      </mesh>

      <Float speed={1.1} rotationIntensity={.24} floatIntensity={.22}>
        <mesh position={[.72, .18, -.1]} rotation={[.2, .38, -.1]}>
          <torusKnotGeometry args={[.66, .18, 180, 24, 2, 3]}/>
          <meshStandardMaterial color="#d9d2c9" metalness={.8} roughness={.12}/>
        </mesh>
      </Float>

      <mesh position={[.05, -.12, .68]} rotation={[.35, -.2, .12]}>
        <icosahedronGeometry args={[.6, 5]}/>
        <MeshTransmissionMaterial
          thickness={.6}
          roughness={.08}
          transmission={1}
          ior={1.35}
          chromaticAberration={.02}
          anisotropy={.06}
          color="#efe4d3"
        />
      </mesh>

      <mesh position={[0, -1.48, 0]} scale={[1.65, .1, 1.65]}>
        <cylinderGeometry args={[1, 1, 1, 72]}/>
        <meshStandardMaterial color="#201916" metalness={.45} roughness={.34}/>
      </mesh>
    </group>
  )
}

export default function SalonScene() {
  return (
    <div className="salon-scene-wrap">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, .05, 5.1], fov: 36 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={1.2}/>
        <directionalLight position={[3.5, 5, 4]} intensity={4.6} color="#fff0dd"/>
        <directionalLight position={[-4, 1, 2]} intensity={2.4} color="#8d5a3d"/>
        <pointLight position={[0, -1, 3]} intensity={1.35} color="#d6b78d"/>
        <Sculpture/>
        <ContactShadows position={[0, -1.5, 0]} opacity={.42} scale={5} blur={2.8} far={3} frames={1}/>
      </Canvas>
    </div>
  )
}
