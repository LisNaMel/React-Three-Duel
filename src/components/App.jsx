import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";

import Scene from "./Scene";
import Player from "./Player";
import Ground from "./Ground";

export default function App() {
    return (
        <Canvas >
            <Physics broadphase="SAP">
                <Scene />
                <Ground />
                <Player />
            </Physics>    
        </Canvas>    
    )
};