import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#000' }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <OrbitControls />
        <ambientLight intensity={1} />
        
        {/* This is where your Neural Net will go */}
        <mesh>
          <sphereGeometry args={[1, 32, 40]} />
          <meshStandardMaterial color="hotpink" wireframe />
        </mesh>
        
      </Canvas>
    </div>
  )
}

export default App