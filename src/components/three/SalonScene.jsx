import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ContactShadows, Environment, Float, Lightformer, MeshTransmissionMaterial } from '@react-three/drei'
import * as THREE from 'three'
import useReducedMotion from '../../hooks/useReducedMotion'

function Sculpture({ reduced }) {
  const group = useRef()
  useFrame((state, delta) => {
    if (reduced || !group.current) return
    group.current.rotation.y += delta * 0.12
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, state.pointer.y * 0.16, 0.03)
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, state.pointer.x * 0.12, 0.03)
  })

  return (
    <Float speed={1.25} rotationIntensity={reduced ? 0 : 0.15} floatIntensity={reduced ? 0 : 0.35}>
      <group ref={group}>
        <mesh scale={1.32}>
          <torusKnotGeometry args={[1, .29, 180, 28, 2, 3]} />
          <MeshTransmissionMaterial
            backside
            transmission={1}
            roughness={0.1}
            thickness={0.8}
            chromaticAberration={0.02}
            anisotropy={0.1}
            distortion={0.08}
            distortionScale={0.15}
            temporalDistortion={reduced ? 0 : 0.02}
            ior={1.3}
            color="#c7ab88"
          />
        </mesh>
        <mesh rotation={[1.2,.2,.55]} scale={2}>
          <torusGeometry args={[.84,.012,10,150]} />
          <meshStandardMaterial color="#d6b78d" metalness={.85} roughness={.2}/>
        </mesh>
      </group>
    </Float>
  )
}

export default function SalonScene() {
  const reduced = useReducedMotion()
  return (
    <Canvas
      dpr={[1,1.5]}
      frameloop={reduced ? 'demand' : 'always'}
      camera={{position:[0,0,5.2],fov:42}}
      gl={{antialias:true,alpha:true,powerPreference:'high-performance'}}
    >
      <ambientLight intensity={.22}/>
      <Suspense fallback={null}>
        <Environment resolution={128}>
          <Lightformer intensity={3} position={[0,4,-2]} scale={[10,1,1]}/>
          <Lightformer intensity={2} position={[-4,0,2]} scale={[1,6,1]}/>
          <Lightformer intensity={1.5} position={[4,-1,2]} scale={[1,5,1]}/>
        </Environment>
        <Sculpture reduced={reduced}/>
        <ContactShadows position={[0,-1.7,0]} opacity={.35} blur={2.8} scale={7}/>
      </Suspense>
    </Canvas>
  )
}
