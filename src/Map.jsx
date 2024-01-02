import React from "react";
import Image from 'react-bootstrap/Image';


import WorldMapImg from "./assets/WORLD MAP.png"

function FluidExample() {
  return (
    <>
  <Image src={WorldMapImg} fluid />;
  <h2>MAP SHOWING WHERE GENDER INEQUALITY IS LESS ALLOWED</h2>
  </>
  )
}

export default FluidExample;    