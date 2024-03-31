import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Cart from './components/Cart/Cart'
import Home from './components/Home/Home'
import { useState } from 'react'
import { CartContext } from './components/context/CartContext'

function App() {
  const [cart,setCart] = useState([])
  return ( 
      <CartContext.Provider value={{cart,setCart}}>
        <BrowserRouter>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </div>
        </BrowserRouter>
      </CartContext.Provider>
  )
}

export default App
