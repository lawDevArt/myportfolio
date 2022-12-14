/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Klinepeter (https://sketchfab.com/Klinepeter)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/house-shop-6daf5a8aa89d42ff9a02c5fe5e23db16
title: house_shop
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import house from './house.gltf';

export function House(props) {
  const { nodes, materials } = useGLTF(house)
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01} position={[0, 1, 0]} >
          <mesh geometry={nodes.house_lambert40_0.geometry} material={materials.lambert40} />
          <mesh geometry={nodes.house_lambert41_0.geometry} material={materials.lambert41} />
          <mesh geometry={nodes.house_lambert37_0.geometry} material={materials.lambert37} />
          <mesh geometry={nodes.house_lambert36_0.geometry} material={materials.lambert36} />
          <mesh geometry={nodes.house_lambert42_0.geometry} material={materials.lambert42} />
          <mesh geometry={nodes.house_lambert33_0.geometry} material={materials.lambert33} />
          <mesh geometry={nodes.house_lambert30_0.geometry} material={materials.lambert30} />
          <mesh geometry={nodes.house_lambert39_0.geometry} material={materials.lambert39} />
          <mesh geometry={nodes.house_lambert38_0.geometry} material={materials.lambert38} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/house.gltf')
