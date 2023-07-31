import React from 'react'
import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'
import Loader from '../Loader'

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black'/>
      <pointLight intensity={1} />
      <spotLight 
        position={[-20, 50, 10]}
      />
      <primitive
        object={computer.scene}
        scale={ isMobile ? 0.5 : 0.65 }
        position={isMobile ? [0, -1.5, -1.4] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // this listens for the size of the screen
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    // sets the initial vale for the ismobile state
    setIsMobile(mediaQuery.matches);

    // handles changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    // adds the change event to the mediaquery
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // removes the event
    return() => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }

  }, [])

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas;