import { useRef } from 'react'
import { Canvas, useThree } from '@react-three/fiber'

function ProductAtelier() {
  const group = useRef()
  const { invalidate } = useThree()

  const move = (event) => {
    if (!group.current) return
    const x = event.pointer.x
    const y = event.pointer.y
    group.current.rotation.y = x * .22
    group.current.rotation.x = -y * .07
    invalidate()
  }

  const reset = () => {
    if (!group.current) return
    group.current.rotation.set(0,0,0)
    invalidate()
  }

  return (
    <group ref={group} position={[0,.05,0]} onPointerMove={move} onPointerOut={reset}>
      <mesh position={[0,-1.45,0]} scale={[1.65,.16,1.65]}>
        <cylinderGeometry args={[1,1,1,40]}/>
        <meshStandardMaterial color="#17120e" metalness={.65} roughness={.26}/>
      </mesh>

      <group position={[-.38,-.12,.05]} rotation={[0,-.16,0]}>
        <mesh scale={[.72,1.45,.55]}>
          <boxGeometry args={[1,1,1]}/>
          <meshPhysicalMaterial color="#7e5d45" metalness={.12} roughness={.18} clearcoat={.85} clearcoatRoughness={.12}/>
        </mesh>
        <mesh position={[0,.93,0]} scale={[.4,.38,.38]}>
          <cylinderGeometry args={[.55,.62,1,24]}/>
          <meshStandardMaterial color="#d6b78d" metalness={.9} roughness={.16}/>
        </mesh>
        <mesh position={[0,1.26,0]} scale={[.26,.22,.26]}>
          <cylinderGeometry args={[.54,.54,1,24]}/>
          <meshStandardMaterial color="#eee4d7" metalness={.72} roughness={.18}/>
        </mesh>
      </group>

      <group position={[.78,-.48,.16]} rotation={[0,.28,0]}>
        <mesh scale={[.5,.9,.5]}>
          <cylinderGeometry args={[.72,.8,1.8,28]}/>
          <meshPhysicalMaterial color="#d9c4aa" metalness={.08} roughness={.24} clearcoat={.75}/>
        </mesh>
        <mesh position={[0,.9,0]} scale={[.34,.26,.34]}>
          <cylinderGeometry args={[.7,.7,1,24]}/>
          <meshStandardMaterial color="#8f6a4d" metalness={.72} roughness={.18}/>
        </mesh>
      </group>

      <mesh rotation={[1.22,.15,.42]} scale={2.25}>
        <torusGeometry args={[.78,.012,8,72]}/>
        <meshBasicMaterial color="#d6b78d" transparent opacity={.65}/>
      </mesh>

      <mesh position={[1.55,.78,-.5]} scale={.22}>
        <sphereGeometry args={[1,20,20]}/>
        <meshStandardMaterial color="#f4efe8" metalness={.88} roughness={.12}/>
      </mesh>
    </group>
  )
}

export default function SalonScene() {
  return (
    <div className="salon-scene-wrap">
      <Canvas
        dpr={1}
        frameloop="demand"
        camera={{position:[0,0,5.5],fov:38}}
        gl={{antialias:true,alpha:true,powerPreference:'high-performance'}}
      >
        <ambientLight intensity={.68}/>
        <directionalLight position={[3,5,5]} intensity={3} color="#fff2df"/>
        <directionalLight position={[-4,1,2]} intensity={1.2} color="#9c6e47"/>
        <ProductAtelier/>
      </Canvas>
    </div>
  )
}