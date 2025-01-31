import React, { useContext } from 'react'
import CartContext from '../context/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
    const {cartItems, clearCart, totalCartAmount, removeFromCart, addToCart} = useContext(CartContext);
  return (
    <div>
        <h1 className='text-3xl font-semibold mx-auto my-2'>Cart</h1>
        <hr className='mx-3'/>
        <div>
        <button onClick={()=>clearCart()} className='bg-slate-300 box-content rounded-lg shadow-sm py-1 px-2 m-3'>Clear Cart</button>
        <table className='mx-auto box-border border-collapse border border-gray-200'>
          <thead>
          <tr className='border border-gray-300 h-10'>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          </thead>
          <tbody>
          {cartItems.map((item)=>(
            <tr className='border border-gray-300 h-10'>
              <td>{item.name} ({item.brand})</td>
              <td>{item.quantity}</td>
              <td>{(item.quantity??0)*item.price}</td>
              <td className='flex justify-between'>
                <Link to={`/products/${item.id}`} className='mx-2'>View</Link>
                <button onClick={()=>addToCart(item)} className='bg-green-400 rounded-lg text-white p-1 m-2'>Add</button>
                <button onClick={()=>removeFromCart(item)} className='bg-red-400 rounded-lg text-white p-1 m-2'>Remove</button>
              </td>
            </tr>
          ))}
          <tr>
            <td>Total</td>
            <td>{totalCartAmount()}</td>
          </tr>
          </tbody>
        </table>
        </div>
    </div>
  )
}

export default Cart