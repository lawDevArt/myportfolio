import './App.css';
import * as THREE from 'three'
import { Physics } from '@react-three/cannon';
import { Canvas } from '@react-three/fiber'
import {  OrbitControls } from '@react-three/drei';
import { Suspense, useMemo } from "react"
import image from './materials/world1/textures/estrada.jfif'
import { House } from './object3d/House';
import { Skyline } from './object3d/Skyline';
import { Grid, useMediaQuery } from '@material-ui/core';
import { Redesociais } from './components/redesociais';
import perfil from './assets/images/perfil.jpg';

function App() {
  const isMobileDevice = useMediaQuery('(min-width:400px)');
  const texture = useMemo(() => new THREE.TextureLoader().load(image))

  return (
    <div style={{ backgroundColor: "#215a6d", height: "100%" }}>
      <Grid style={{height: "50%", textAlign: "center"}}>
        <img src={perfil} style={{ borderRadius: "50%", padding: '2%'}}></img>
        <h1 style={{ color: "white", fontSize: "30px"}}>Your nick</h1>
        <p style={{ color: "white", fontSize: "10px"}}>Min Description</p>
        <Redesociais />
      </Grid>
      <Grid style={{ height: "60%" }}>
        <Canvas>
          <ambientLight intensity={0.5}></ambientLight>
          <OrbitControls />
          <spotLight position={[10, 15, 10]} angle={0.3} />
          <directionalLight args={['#ffffff', 1]} position={[9, 0, 0]}></directionalLight>
          <Physics>
            <mesh position={[0, -9.60, 0]} scale={15} rotation={[-Math.PI / 1.80, 0, 1.28]}>
              <boxBufferGeometry attach="geometry" />
              <meshBasicMaterial attach="material" map={texture} />
            </mesh>
          </Physics>
          <Suspense>
            <House position={[5, -3.2, -9]} />
            <Skyline position={[0, -2, 0]} />
          </Suspense>
        </Canvas>
      </Grid>

    </div>
  );
}

export default App;
