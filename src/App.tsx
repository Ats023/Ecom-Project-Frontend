import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Products from './components/Products'
import About from './components/About'
import Layout from './components/Layout'
import Product from './components/Product'
import CartContext, { CartProvider } from './context/CartContext'
import Cart from './components/Cart'

function App() {
  return (
    <>
    <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage />} />
        <Route path='products/:id' element={<Product/>}></Route>
        <Route path='cart' element={<Cart/>}></Route>
        <Route path='about' element={<About/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App
