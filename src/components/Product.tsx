import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../axios'

function Product() {
  const {id} = useParams()
  const [product, setProduct] = useState('')

  useEffect(() => {
    const getAllProducts = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/products/${id}`);
            setProduct(response.data);
            console.log('fetched product details...')
        }
        catch(error) {
            console.log(error);
        }
    };
    getAllProducts();
},[])

  return (
    <div className='mx-auto w-3/5 py-2 px-3'>
      <div className=''>
        <div className='text-3xl font-bold text-blue-950 flex justify-between'>
          {product.name}
          <div className='text-3xl font-light box-content'>Rs. {product.price}</div>
        </div>
        <div className='flex justify-between content-center'>
        <span className='text-md'>{product.brand}</span>
        <span className='box-border border-2 py-1 px-2'>{product.available?'in stock':'out of stock'}</span>
        </div>
        <div className='text-sm'>Category: {product.category}</div>
        <div className='text-sm'>Date released: {product.releaseDate}</div>
        <div className='box-content shadow-md m-2 p-2'>
          <h3 className='text-md font-bold text-slate-700'>Product description:</h3>
          <p className='text-slate-700 my-2'>{product.desc}</p>
        </div>
      </div>
    </div>
  )
}

export default Product