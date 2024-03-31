import React, { useEffect, useState } from 'react'
import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {
  const [total,setTotal] = useState(0)

  const {cart,setCart} = useContext(CartContext)

  useEffect(() => {
    setTotal(cart.reduce((acc,curr) => {
      acc += parseInt(curr.amt)
      return acc
    },0))
  },[cart])
  return (
    <div className='cart-container'>

      <h2>Cart Products</h2>

      <div className='cart-items'>
       {
        cart.map((product) => (
          <div className='cart-item'>
            <div className="cart-img">
              <img src={product.pic} alt="" />
            </div>
            <div className='cart-details'>
              <h3>{product.name}</h3>
              <p>{product.amt}</p>
            </div>
          </div>
        ))
       }
        <h1>Total Amount Rs: {total}</h1>
      </div>
    </div>
  )
}

export default Cart