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
        <button onClick={()=>clearCart()} className='bg-slate-300 box-content rounded-md shadow-sm py-1 px-2 m-3'>Clear Cart</button>
        <table className='table-fixed mx-auto box-border border-collapse border border-gray-200'>
          <thead>
          <tr className='border border-gray-300 h-10'>
            <th className='px-4 border-collapse border-spacing-2'>Product</th>
            <th className='px-4 border-collapse border-spacing-2'>Quantity</th>
            <th className='px-4 border-collapse border-spacing-2'>Price</th>
          </tr>
          </thead>
          <tbody>
          {cartItems.map((item)=>(
            <tr className='border border-gray-300 h-10'>
              <td className='px-4'>{item.name} ({item.brand})</td>
              <td className='px-4'>{item.quantity}</td>
              <td className='px-4'>{(item.quantity??0)*item.price}</td>
              <td className='flex justify-between'>
                <Link to={`/products/${item.id}`} className='p-1 m-2 hover:underline'>View</Link>
                <button onClick={()=>addToCart(item)} className='p-1 m-2 hover:underline'>Add</button>
                <button onClick={()=>removeFromCart(item)} className='p-1 m-2 hover:underline'>Remove</button>
              </td>
            </tr>
          ))}
          <tr className='font-bold'>
            <td></td>
            <td>Total:</td>
            <td>{totalCartAmount()}</td>
          </tr>
          </tbody>
        </table>
        </div>
    </div>
  )
}

export default Cart