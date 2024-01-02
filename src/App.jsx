import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MyCarousel from "./Carousel";
import Container  from "./Container";
import FormExample from "./NavBar";
import BasicExample from "./Card";
import  FluidExample from "./Map";
import './App.css'

const App = () => {
  

  return (
    <>
    <FormExample/>
    <h1>UNITED NATIONS ARTICLE ON GENDER DISCRIMATIONS</h1> 
    <MyCarousel/>
    <BasicExample/>
    <Container/>
    < FluidExample/>
    </>
  )

}
export default App
