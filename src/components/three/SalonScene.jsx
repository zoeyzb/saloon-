import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import useReducedMotion from '../../hooks/useReducedMotion'

function ProductAtelier({ reduced }) {
  const group = useRef()
  const halo = useRef()

  useFrame((state, delta) => {
    if (reduced) return
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, state.pointer.x * .22 + state.clock.elapsedTime * .06, .035)
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -state.pointer.y * .08, .03)
    }
    if (halo.current) halo.current.rotation.z += delta * .08
  })

  return (
    <group ref={group} position={[0,.05,0]}>
      <mesh position={[0,-1.45,0]} scale={[1.65,.16,1.65]}>
        <cylinderGeometry args={[1,1,1,64]}/>
        <meshStandardMaterial color="#17120e" metalness={.65} roughness={.26}/>
      </mesh>

      <group position={[-.38,-.12,.05]} rotation={[0,-.16,0]}>
        <mesh scale={[.72,1.45,.55]}>
          <boxGeometry args={[1,1,1]}/>
          <meshPhysicalMaterial color="#7e5d45" metalness={.12} roughness={.18} clearcoat={1} clearcoatRoughness={.08}/>
        </mesh>
        <mesh position={[0,.93,0]} scale={[.4,.38,.38]}>
          <cylinderGeometry args={[.55,.62,1,40]}/>
          <meshStandardMaterial color="#d6b78d" metalness={.9} roughness={.16}/>
        </mesh>
        <mesh position={[0,1.26,0]} scale={[.26,.22,.26]}>
          <cylinderGeometry args={[.54,.54,1,40]}/>
          <meshStandardMaterial color="#eee4d7" metalness={.72} roughness={.18}/>
        </mesh>
      </group>

      <group position={[.78,-.48,.16]} rotation={[0,.28,0]}>
        <mesh scale={[.5,.9,.5]}>
          <cylinderGeometry args={[.72,.8,1.8,48]}/>
          <meshPhysicalMaterial color="#d9c4aa" metalness={.08} roughness={.24} clearcoat={.85}/>
        </mesh>
        <mesh position={[0,.9,0]} scale={[.34,.26,.34]}>
          <cylinderGeometry args={[.7,.7,1,36]}/>
          <meshStandardMaterial color="#8f6a4d" metalness={.72} roughness={.18}/>
        </mesh>
      </group>

      <mesh ref={halo} rotation={[1.22,.15,.42]} scale={2.25}>
        <torusGeometry args={[.78,.012,10,120]}/>
        <meshBasicMaterial color="#d6b78d" transparent opacity={.65}/>
      </mesh>

      <mesh position={[1.55,.78,-.5]} scale={.22}>
        <sphereGeometry args={[1,32,32]}/>
        <meshStandardMaterial color="#f4efe8" metalness={.88} roughness={.12}/>
      </mesh>
    </group>
  )
}

export default function SalonScene() {
  const reduced = useReducedMotion()
  return (
    <Canvas
      dpr={[1,1.25]}
      camera={{position:[0,0,5.5],fov:38}}
      gl={{antialias:true,alpha:true,powerPreference:'high-performance'}}
    >
      <ambientLight intensity={.62}/>
      <directionalLight position={[3,5,5]} intensity={3.2} color="#fff2df"/>
      <directionalLight position={[-4,1,2]} intensity={1.4} color="#9c6e47"/>
      <pointLight position={[0,-2,3]} intensity={1.1} color="#d6b78d"/>
      <ProductAtelier reduced={reduced}/>
    </Canvas>
  )
}
