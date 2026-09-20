import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ContactShadows, Float, RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

function ProductAtelier() {
  const group = useRef()
  const target = useRef({ x: 0, y: 0 })

  useFrame((state, delta) => {
    if (!group.current) return
    const ease = 1 - Math.pow(0.001, delta)
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, target.current.x, ease)
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, target.current.y, ease)
    group.current.position.y = Math.sin(state.clock.elapsedTime * .45) * .025
  })

  const onMove = (event) => {
    target.current.x = event.pointer.x * .18
    target.current.y = -event.pointer.y * .06
  }

  const reset = () => {
    target.current.x = 0
    target.current.y = 0
  }

  return (
    <group ref={group} onPointerMove={onMove} onPointerOut={reset}>
      <mesh position={[0, -1.42, 0]} scale={[1.62, .13, 1.62]}>
        <cylinderGeometry args={[1, 1, 1, 72]}/>
        <meshStandardMaterial color="#2a211c" metalness={.4} roughness={.36}/>
      </mesh>

      <group position={[-.5, -.22, .12]} rotation={[0, -.16, 0]}>
        <RoundedBox args={[1.12, 2.22, .82]} radius={.14} smoothness={6}>
          <meshPhysicalMaterial
            color="#a86f4c"
            metalness={.06}
            roughness={.2}
            clearcoat={1}
            clearcoatRoughness={.2}
          />
        </RoundedBox>
        <mesh position={[0, 1.34, 0]} scale={[.55, .34, .55]}>
          <cylinderGeometry args={[.56, .62, 1, 48]}/>
          <meshStandardMaterial color="#c89459" metalness={.82} roughness={.2}/>
        </mesh>
        <mesh position={[0, .18, .42]}>
          <planeGeometry args={[.62, .7]}/>
          <meshBasicMaterial color="#1a1410" transparent opacity={.9}/>
        </mesh>
      </group>

      <group position={[.72, -.36, .18]} rotation={[0, .14, 0]}>
        <mesh scale={[.64, 1.18, .64]}>
          <cylinderGeometry args={[.72, .8, 1.8, 64]}/>
          <meshPhysicalMaterial
            color="#e7d6bd"
            metalness={.03}
            roughness={.24}
            clearcoat={.85}
            clearcoatRoughness={.26}
          />
        </mesh>
        <mesh position={[0, 1.28, 0]} scale={[.45, .28, .45]}>
          <cylinderGeometry args={[.7, .7, 1, 48]}/>
          <meshStandardMaterial color="#8f5f3f" metalness={.7} roughness={.2}/>
        </mesh>
      </group>

      <Float speed={1.2} rotationIntensity={.22} floatIntensity={.35}>
        <mesh position={[1.45, .78, -.28]} scale={.28}>
          <sphereGeometry args={[1, 48, 48]}/>
          <meshPhysicalMaterial
            color="#5b3b2b"
            metalness={.65}
            roughness={.15}
            clearcoat={1}
          />
        </mesh>
      </Float>

      <mesh rotation={[1.16, .08, .38]} scale={2.12}>
        <torusGeometry args={[.82, .012, 16, 120]}/>
        <meshBasicMaterial color="#d8b47f" transparent opacity={.78}/>
      </mesh>
    </group>
  )
}

export default function SalonScene() {
  return (
    <div className="salon-scene-wrap">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, .05, 5.25], fov: 35 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={1.25}/>
        <directionalLight position={[3.5, 5, 4]} intensity={4.5} color="#ffe9cf"/>
        <directionalLight position={[-4, .8, 2]} intensity={2.1} color="#9a644a"/>
        <pointLight position={[0, -1, 3]} intensity={1.4} color="#d6b78d"/>
        <ProductAtelier/>
        <ContactShadows
          position={[0, -1.48, 0]}
          opacity={.44}
          scale={5}
          blur={2.8}
          far={3}
          frames={1}
        />
      </Canvas>
    </div>
  )
}
