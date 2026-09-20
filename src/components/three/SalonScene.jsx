import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'

function PaintSignal({ onPaint }) {
  const sent = useRef(false)
  const { invalidate } = useThree()

  useEffect(() => {
    invalidate()
  }, [invalidate])

  useFrame(() => {
    if (sent.current) return
    sent.current = true
    requestAnimationFrame(onPaint)
  })

  return null
}

function ProductAtelier() {
  const group = useRef()
  const { invalidate } = useThree()

  const move = (event) => {
    if (!group.current) return
    group.current.rotation.y = event.pointer.x * .24
    group.current.rotation.x = -event.pointer.y * .08
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
        <meshStandardMaterial color="#2a2019" metalness={.55} roughness={.28}/>
      </mesh>

      <group position={[-.42,-.08,.12]} rotation={[0,-.12,0]}>
        <mesh scale={[.78,1.52,.58]}>
          <boxGeometry args={[1,1,1]}/>
          <meshPhysicalMaterial color="#a77756" metalness={.08} roughness={.16} clearcoat={.9}/>
        </mesh>
        <mesh position={[0,.98,0]} scale={[.42,.4,.42]}>
          <cylinderGeometry args={[.55,.62,1,24]}/>
          <meshStandardMaterial color="#e0bf91" metalness={.9} roughness={.14}/>
        </mesh>
      </group>

      <group position={[.82,-.42,.2]} rotation={[0,.25,0]}>
        <mesh scale={[.56,1.02,.56]}>
          <cylinderGeometry args={[.72,.8,1.8,28]}/>
          <meshPhysicalMaterial color="#ead8bf" metalness={.05} roughness={.22} clearcoat={.8}/>
        </mesh>
        <mesh position={[0,1.02,0]} scale={[.36,.28,.36]}>
          <cylinderGeometry args={[.7,.7,1,24]}/>
          <meshStandardMaterial color="#9f7453" metalness={.78} roughness={.16}/>
        </mesh>
      </group>

      <mesh rotation={[1.22,.15,.42]} scale={2.3}>
        <torusGeometry args={[.78,.014,8,72]}/>
        <meshBasicMaterial color="#e0bf91" transparent opacity={.9}/>
      </mesh>

      <mesh position={[1.52,.82,-.42]} scale={.26}>
        <sphereGeometry args={[1,20,20]}/>
        <meshStandardMaterial color="#fff3e5" metalness={.9} roughness={.1}/>
      </mesh>
    </group>
  )
}

export default function SalonScene() {
  const [painted, setPainted] = useState(false)

  return (
    <div className={`salon-scene-wrap ${painted ? 'salon-scene-wrap--painted' : ''}`}>
      <Canvas
        dpr={1}
        frameloop="demand"
        camera={{position:[0,0,5.4],fov:38}}
        gl={{antialias:true,alpha:true,powerPreference:'high-performance'}}
      >
        <ambientLight intensity={.9}/>
        <directionalLight position={[3,5,5]} intensity={4.2} color="#fff0db"/>
        <directionalLight position={[-4,1,2]} intensity={1.8} color="#b47d57"/>
        <pointLight position={[0,-1,3]} intensity={1.2} color="#d6b78d"/>
        <ProductAtelier/>
        <PaintSignal onPaint={() => setPainted(true)}/>
      </Canvas>
    </div>
  )
}