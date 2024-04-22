"use client";

import { useRef, useState } from "react";
import styles from "./styles.module.css";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  PerspectiveCamera,
  PresentationControls,
  RoundedBox,
} from "@react-three/drei";

function Card(props: any) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<any>();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => {
  //   if (ref?.current != null) {
  //     ref.current.rotation.x += delta;
  //   }
  // });
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <RoundedBox
        args={[5, 7, 0.05]} // Width, height, depth. Default is [1, 1, 1]
        radius={0.05} // Radius of the rounded corners. Default is 0.05
        smoothness={2} // The number of curve segments. Default is 4
        bevelSegments={2} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
        creaseAngle={0.4}
      >
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      </RoundedBox>
    </mesh>
  );
}

export const Page = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 30]} />
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[30, 30, 30]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <PresentationControls speed={5} global>
          <Card position={[-3, 0, 0]} />
          <Card position={[3, 0, 0]} />
        </PresentationControls>
      </Canvas>
    </div>
  );
};

export default Page;
