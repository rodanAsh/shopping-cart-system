import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { CartContext } from '../context/CartContext'

const Header = () => {
  const {cart} = useContext(CartContext)
  return (
    <div className='navbar'>
        <div className='logo'>Food court</div>
        <ul>
            <li>
                <Link className='link' to={"/"}>Home</Link>
            </li>
            <li>
                <Link className='link' to={"/cart"}><span className='cart-count'>{cart.length}</span>View Cart</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header