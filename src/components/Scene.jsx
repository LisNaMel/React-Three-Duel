import { Environment, OrbitControls, PerspectiveCamera} from "@react-three/drei";
import { Suspense, useRef} from "react";

export default function Scene(){
    // Vite have a problem with helper: https://github.com/pmndrs/react-three-fiber/discussions/1149
    // let directionalLightRef = useRef();
    // useHelper(directionalLightRef, DirectionalLightHelper, 1,'red');

    // let directionalLightRef = useRef()
    
    return (
        <Suspense fallback={null}>
            <Environment
                files={'/sky.hdr'}
                background
            />
            <PerspectiveCamera makeDefault position={[-100, 10, 0]} fov={50} />
            <OrbitControls target={[10, 0, 0]} />
            <directionalLight 
                // ref={directionalLightRef}
                position={[100,100,50]} 
                args={['#ffffff', 1]}
            />
        </Suspense>
    );
}
