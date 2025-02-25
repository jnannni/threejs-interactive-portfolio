import { Canvas } from '@react-three/fiber';
import './style.css';
import { PerspectiveCamera, Stars, Sparkles, OrbitControls } from '@react-three/drei';
import Globe from '@3d_components/Globe';
import Sonic from '@3d_components/Sonic';
import { Suspense } from 'react';
import CanvasLoader from '@loader/CanvasLoader';
import { Leva, useControls } from 'leva';
import { useMediaQuery } from 'react-responsive';
import { CalculateSizes } from '@constants/index';
const GreetingScene = () => {
    // const x = useControls('Globe', {
    //     rotate: { value: 0.1, min: 0, max: 1},
    //     rotationX: { value: 0, min: -10, max: 10, step: 0.1},
    //     rotationY: { value: 0, min: -10, max: 10, step: 0.1},
    //     rotationZ: { value: 0, min: -10, max: 10, step: 0.1},
    //     positionX: { value: 0, min: -10, max: 10, step: 0.1},
    //     positionY: { value: 0, min: -10, max: 10, step: 0.1},
    //     positionZ: { value: 0, min: -10, max: 10, step: 0.1},
    //     scale: { value: 0.8, min: 0.1, max: 10, step: 0.1},
    // })
    const isMobile = useMediaQuery({maxWidth: 640});
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});

    const sizes = CalculateSizes(isMobile, isTablet);

  return (
    <div className='container'>
        <div className='scene-container'>
            <div className='greeting'>Hello, I am Katja🖖<br/><span>Or am I?</span></div>
            <div className='scene'>                
                <Canvas>
                    <Suspense fallback={<CanvasLoader />}>                        
                        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                        <Globe scale={sizes.globeSize} position={sizes.globePosition} rotation={sizes.globeRotation}/>                        
                        <Sonic scale={sizes.sonicSize} position={sizes.sonicPosition} rotation={sizes.sonicRotation}/>                        
                        <ambientLight intensity={1} />                                                
                        <directionalLight position={[-10, 20, 20]} intensity={1.5} />                        
                        <OrbitControls />
                        <Stars radius={200} depth={0} count={1000} factor={2} saturation={1} fade speed={1} />
                        <Sparkles count={50} size={10} position={[0, 0.5, 0]} scale={[4, 1.5, 4]} speed={0.3} />
                    </Suspense>                    
                </Canvas>
            </div>
        </div>
    </div>
  )
}

export default GreetingScene;