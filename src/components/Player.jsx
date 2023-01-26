import {useBox} from '@react-three/cannon';
import { meshBounds } from '@react-three/drei';
import {useFrame, useLoader} from '@react-three/fiber';
import { useEffect, useRef } from 'react';

export default function Player(){
    let pos = [0, 10, 0];
    let width = 10;
    let long = 10;
    let height = 10;

    let playerBodyArgs = [width, height, long];
    
    let [playerBody, playerApi] = useBox(
        () => ({
            args: playerBodyArgs,
            mass: 150,
            pos,
        }), 
        useRef(null)
    );

    return (
        <mesh ref={playerBody}>
            <boxGeometry args={playerBodyArgs} />
            <meshStandardMaterial attach='material' color='red'/>
            
        </mesh>
        // <mesh position={pos}>
        //     <boxGeometry args={playerBodyArgs}/>
        //     <meshBasicMaterial color='red'/>
        // </mesh>
    )
}