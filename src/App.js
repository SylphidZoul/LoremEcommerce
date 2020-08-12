import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './StyledComponents/GlobalStyles'
import './App.css'
import { CartContextProvider } from './Context/CartContext'
import { Navbar } from './Containers/NavbarContainer'
import { Routes } from './Routes/Routes'
import { CartToastContainer } from './Containers/CartToastContainer'
import { WelcomeToastContainer } from './Containers/WelcomeToastContainer'

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <CartContextProvider>
        <Navbar />
        <Routes />
        <CartToastContainer />
        <WelcomeToastContainer />
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
