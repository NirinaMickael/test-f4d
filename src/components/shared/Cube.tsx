
import { motion } from 'framer-motion-3d';
// CubeComponent.tsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import { AnimationControls, TargetAndTransition, VariantLabels } from 'framer-motion';
import * as THREE from 'three';
// Vertex shader
const vertexShader = `
    varying vec3 vUv;
    void main() {
        vUv = position; // Pass the position to the fragment shader
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

// Fragment shader
const fragmentShader = `
    varying vec3 vUv;
    uniform vec3 color1;
    uniform vec3 color2;

    void main() {
        // Interpolate between color1 and color2 based on the UV coordinates
        vec3 color = mix(color1, color2, vUv.y * 0.5 + 0.5);
        gl_FragColor = vec4(color, 1.0);
    }
`;

interface CubeProps {
    position: [number, number, number]; 
    rotation: [number, number, number];
    scale?: [number, number, number];
    animate?: boolean | AnimationControls | TargetAndTransition | VariantLabels;
}

const Cube: React.FC<CubeProps> = ({ position, rotation, scale = [1, 1, 1], animate = true }) => {
    return (
        <motion.mesh
            position={position}
            rotation={rotation}
            animate={animate}
            transition={{ repeat: Infinity, duration: 5 }}
        
        >
            <Box args={[1, 1, 1]} scale={scale}  >
                <shaderMaterial 
                    vertexShader={vertexShader} 
                    fragmentShader={fragmentShader}
                    uniforms={{
                        color1: { value: new THREE.Color('#2C3A99') },
                        color2: { value: new THREE.Color('#4960FF') }
                    }} 
                />
            </Box>
        </motion.mesh>
    );
};

const CubeComponent: React.FC = () => {
    return (
        <>
            <div className='absolute md:right-0 z-[2] bg-blur md:top-0 -top-4 -right-2 '  >
                <Canvas style={{ width: '100%', height: '400px' }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[2, 2, 2]} intensity={1.5} />
                    <Cube position={[0, 0, -1.2]} rotation={[Math.PI / 4, 0, 0]}
                    animate={{x:[1,0,1] , y:[-1,0,-1] }}
                    />
                    <Cube position={[1.5, 0, 0]} 
                    scale={[1.5, 1.5, 1.5]} 
                    rotation={[0, Math.PI / 6, Math.PI / 3]} 
                    animate={{x:[-1,1,-1] , y:[1,0,1] }}
                    />
                </Canvas>
            </div>
            <div className='absolute  hidden md:block left-0 w-[500px] z-[2] '>
                <Canvas style={{ width: '100%', height: '400px' }}>
                    <ambientLight intensity={0.5} />
                    <Cube position={[-1, 0, 0]} 
                     rotation={[0, Math.PI / 4, Math.PI / 6]}
                        scale={[2.5,2.5,2.5]}
                        animate={{x:[-1,1,-1] , rotateY:[0,Math.PI,0] }}
                    />
                </Canvas>
            </div>
        </>
    );
};

export default CubeComponent;
