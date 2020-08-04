import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './StyledComponents/GlobalStyles'
import './App.css'
import { Navbar } from './Containers/NavbarContainer'
import { Routes } from './Routes/Routes'

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Routes />
    </BrowserRouter>
  )
}

export default App
