
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import * as THREE from 'three'
import React, { useRef, useEffect, useState, useMemo } from 'react'
import { useGLTF, useAnimations, useFBX } from '@react-three/drei'

const Sonic = ({pose = 'walking', ...props}) => {   
    const group = useRef<THREE.Group>(null); 
    const {nodes, materials} = useGLTF('/models/sonic/sonic.glb');
    const {animations: walking} = useFBX('/models/sonic/walking.fbx');
    walking[0].name = 'walking';
    const { actions, names} = useAnimations(walking, group);
    const [curPose, setCurPose] = useState(pose);       

    useEffect(() => {
        if (actions[curPose]) {
            actions[curPose].reset().fadeIn(0.5).play();            
        }                
        return () => {actions[curPose] ? actions[curPose].fadeOut(0.5): null};
    }, [curPose, actions, names]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <primitive object={nodes.mixamorigHips} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <skinnedMesh          
          geometry={nodes.Object_10.geometry}
          material={materials.sonic_gm_shoes_belt}
          skeleton={nodes.Object_10.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_11.geometry}
          material={materials.sonic_gm_cloth}
          skeleton={nodes.Object_11.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_12.geometry}
          material={materials.sonic_gm_shoes_ring}
          skeleton={nodes.Object_12.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_13.geometry}
          material={materials.sonic_gm_mouth_duble}
          skeleton={nodes.Object_13.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_5.geometry}
          material={materials.sonic_gm_eyeL}
          skeleton={nodes.Object_5.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_6.geometry}
          material={materials.sonic_gm_eyeR}
          skeleton={nodes.Object_6.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_7.geometry}
          material={materials.sonic_gm_body}
          skeleton={nodes.Object_7.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_8.geometry}
          material={materials.sonic_gm_nose}
          skeleton={nodes.Object_8.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_9.geometry}
          material={materials.sonic_gm_shoes_red}
          skeleton={nodes.Object_9.skeleton}
        />        
      </group>
    </group>
  )
}

useGLTF.preload('/models/sonic/sonic.glb')
export default Sonic;