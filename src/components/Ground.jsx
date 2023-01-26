import {usePlane} from '@react-three/cannon';
import { useEffect, useRef } from 'react';
import { MeshReflectorMaterial } from '@react-three/drei';

export default function Ground() {
    let [ref] = usePlane(
        () => ({
            type: 'Static',
            position:[450, -20, 0],
            rotation:[-Math.PI/2, 0, 0],
        }), useRef())
    return(
        <mesh ref={ref} receiveShadow>
            <planeGeometry attach='geometry' args={[1000, 100]} />
            
            {/* This material might be the reason of a sRGB warning */}
            <MeshReflectorMaterial 
                attach='material' 
                color='lightblue'
                metalness={1} 
                roughness={0.5} 
                transparent={true} 
                opacity={0.5}
            />
        </mesh>
    )
};