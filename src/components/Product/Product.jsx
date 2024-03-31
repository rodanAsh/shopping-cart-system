import React from 'react'
import './Product.css'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Product = ({product}) => {
  const name = product.name.length > 21 ? product.name.substring(0,20)+".." : product.name;

  const {cart,setCart} = useContext(CartContext)

  const addCart = () => {
    setCart([...cart,product])
  }

  const removeCart = () => {
    setCart(cart.filter((c) => c.id !== product.id))
  }

  return (
    <div className='product'>
      <div className='img'>
        <img src={product.pic} alt="" />
      </div>
      <div className='details'>
        <h3>{name}</h3>
        <p>Price Rs. {product.amt}</p>
        {
          cart.includes(product) ? (
            <button onClick={removeCart} className='btn-remove'>Remove From Cart</button>
          ) : (
            <button onClick={addCart}>Add To Cart</button>
          )
        }
      </div>
    </div>
  )
}

export default Product