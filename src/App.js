import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { softShadows, MeshWobbleMaterial, OrbitControls } from 'drei';
import { useSpring, a } from 'react-spring/three';

import './App.scss';

softShadows();

const SpinningBox = ({ position, args, color }) => {
  const mesh = useRef(null);

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  const [expand, setExpand] = useState(false);

  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4]: [1, 1, 1]
  })

  return (
    <a.mesh onClick={() => setExpand(!expand)} castShadow position={position} ref={mesh} scale={props.scale}>
      <boxBufferGeometry attach='geometry' args={args} />
      {/* <circleBufferGeometry attach='geometry' args={[1, 1]} /> */}
      {/* <meshStandardMaterial attach='material' color={color} /> */}
      <MeshWobbleMaterial attach='material' color={color} speed={3} factor={0.6}/>
    </a.mesh>
  )
}

const SpinningSphere = ({ position, args, color }) => {
  const mesh = useRef(null);

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  const [expand, setExpand] = useState(false);

  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4]: [1, 1, 1]
  })

  return (
    <a.mesh onClick={() => setExpand(!expand)} castShadow position={position} ref={mesh} scale={props.scale}>
      <sphereBufferGeometry attach='geometry' args={args} />
      {/* <circleBufferGeometry attach='geometry' args={[1, 1]} /> */}
      {/* <meshStandardMaterial attach='material' color={color} /> */}
      <MeshWobbleMaterial attach='material' color={color} speed={3} factor={0.6}/>
    </a.mesh>
  )
}

const SpinningCylinder = ({ position, args, color }) => {
  const mesh = useRef(null);

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  const [expand, setExpand] = useState(false);

  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4]: [1, 1, 1]
  })

  return (
    <a.mesh onClick={() => setExpand(!expand)} castShadow position={position} ref={mesh} scale={props.scale}>
      <cylinderBufferGeometry attach='geometry' args={args} />
      {/* <circleBufferGeometry attach='geometry' args={[1, 1]} /> */}
      {/* <meshStandardMaterial attach='material' color={color} /> */}
      <MeshWobbleMaterial attach='material' color={color} speed={3} factor={0.6}/>
    </a.mesh>
  )
}

function App() {
  return (
    <>
      <Canvas
        shadowMap
        colorManagement
        camera={{ position: [-5, 2, 10], fov: 60}}
      >
        <ambientLight intensity={0.3}/>
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, -20]} intensity={0.5}/>
        <pointLight position={[0, -10, 0]} />

        <group>
          <mesh receiveShadow rotation={[-Math.PI/2, 0, 0]} position={[0, -3, 0]}>
            <planeBufferGeometry attach='geometry' args={[100, 100]}/>
            <shadowMaterial attach='material' opacity={.3}/>
          </mesh>
        </group>

        <SpinningBox position={[0, 1, 0]} args={[1, 1, 5]}/>
        <SpinningCylinder position={[-2, 1, -5]} args={[0.5, 1, 2, 1000]}  color='pink'/>
        <SpinningSphere position={[5, 1, -2]} args={[1, 30, 30]} color='lightblue'/>

        <OrbitControls />
      </Canvas>
    </>
  )
}

export default App;
