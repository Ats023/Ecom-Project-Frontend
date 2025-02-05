import { Link } from 'react-router-dom'
import axios from '../axios'
import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../context/CartContext'

const HomePage=() => {
    const {cartItems, addToCart, clearCart} = useContext(CartContext);
    const [products, setProducts] = useState([])
    useEffect(() => {
        const getAllProducts = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/products`);
                setProducts(response.data);
                console.log('fetched all products...')
            }
            catch(error) {
                console.log(error);
            }
        };
        getAllProducts();
    },[])
  return (
    <div className='flex justify-start flex-wrap'>
        {products.map((product)=>(
            <div className='box-content shadow-lg p-2 m-2'>
                    <Link to={`/products/${product.id}`}>
                        <div className='text-xl font-bold'>{product.name.toUpperCase()}
                        </div>
                    </Link>
                    <div className='text-sm flex justify-between my-2'>
                        <span className='italic'>{product.brand}</span>
                        <span className='font-semibold'>Rs. {product.price}</span></div>
                    <button onClick={(e)=>{
                        if(product.available)
                        addToCart(product);}} className={`text-md text-gray-600 rounded-md px-3 py-2 my-2 hover:shadow-md ${product.available?'bg-green-200':'bg-slate-200'}`}>{product.available?'Add to Cart':'Out of Stock'}</button>
                </div>
        ))}
    </div>
  )
}

export default HomePage;