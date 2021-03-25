import React from 'react'
import Home from "./Components/Home"
import About from "./Components/About"
import ProductServices from "./Components/ProductServices"
import Client from "./Components/Client"
import CopyRight from "./Components/CopyRight"
import NavBar from "./Components/NavBar"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <ProductServices/>
      <Client/>
      <CopyRight/>
    </div>
  )
}

export default App
