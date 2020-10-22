import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './StyledComponents/GlobalStyles'
import { CartContextProvider } from './Context/CartContext'
import { Navbar } from './Containers/NavbarContainer'
import { Footer } from './Components/Footer'
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
        <Footer />
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
