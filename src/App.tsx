import { Suspense, useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { useControls } from 'leva'

function MyModel({ neonColor }: { neonColor: string }) {
    const meshRef = useRef<THREE.Group>(null)
    const gltf = useGLTF('/model.glb')

    useEffect(() => {
        if (gltf.scene) {
            gltf.scene.traverse((child) => {
                if ((child as THREE.Mesh).isMesh) {
                    const mesh = child as THREE.Mesh;
                    mesh.material = new THREE.MeshStandardMaterial({
                        color: '#111827',
                        emissive: neonColor,
                        emissiveIntensity: 1,
                        wireframe: true,
                        transparent: true,
                        opacity: 0.5,
                    });
                }
            });
        }
    }, [gltf.scene, neonColor]);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.5
        }
    })

    return <primitive ref={meshRef} object={gltf.scene} scale={2.5} />
}

export default function App() {
    const { neonColor } = useControls({
        neonColor: { value: '#22d3ee', label: 'Neon Color' }
    })

    return (
        <div style={{ width: '100vw', height: '100vh', backgroundColor: '#111827', position: 'relative' }}>

            {/* --- FIXED OVERLAY LAYOUT --- */}
            <div style={{
                position: 'absolute',
                top: '40px',
                left: '40px',
                zIndex: 10,
                pointerEvents: 'none',
                color: 'white',
                fontFamily: 'sans-serif',
                display: 'flex',         // Uses Flexbox to stack cleanly
                flexDirection: 'column', // Stacks items top-to-bottom
                gap: '8px'               // Adds a guaranteed gap between title and subtitle
            }}>
                <h1 style={{ margin: 0, fontSize: '3rem', textTransform: 'uppercase', letterSpacing: '2px', lineHeight: 1 }}>
                    Mission 3D
                </h1>
                <p style={{ margin: 0, color: neonColor, fontSize: '1.2rem', letterSpacing: '1px' }}>
                    Interactive Asset Studio // 01
                </p>
            </div>
            {/* ------------------------ */}

            <Canvas camera={{ position: [4, 3, 5], fov: 50 }}>
                <color attach="background" args={['#111827']} />

                <ambientLight intensity={1.5} />
                <directionalLight position={[5, 10, 5]} intensity={2.5} color={neonColor} />
                <directionalLight position={[-5, -10, -5]} intensity={1.5} color='#db2777'/>

                <Suspense fallback={null}>
                    <MyModel neonColor={neonColor} />
                </Suspense>

                <OrbitControls />
            </Canvas>
        </div>
    )
}