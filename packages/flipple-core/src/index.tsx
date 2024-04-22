import React, { ReactNode } from "react";
import { motion } from "framer-motion-3d"
import { Object3D } from "three";

export type FlippleProps = {
  items?: {
    id: string;
    content: React.ReactNode;
  }[]
}

export const Flipple: React.FC<FlippleProps> = ({
  items
}) => {
  return (
    <>{items?.map(i => i.content)}</>
  )
}

export default Flipple;