import axios from 'axios';
import React, { ReactEventHandler, useEffect, useState } from 'react'

interface Product {
    // id: number;
    name: string;
    price: number;
    quantity?: number;
    stockquantity: number;
    desc: string;
    brand: string;
    category: string;
    releaseDate: string;
    available: boolean;
  }

function AddProduct() {
    const [product, setProduct] = useState<Product>({
        name: '',
        price: 0,
        quantity: 0,
        stockquantity: 0,
        desc: '',
        brand: '',
        category: '',
        releaseDate: '',
        available: false,
    })
    const addToProducts = async (product: Product) => {
        try {
            console.log(product)
            const response = await axios.post(`http://localhost:8080/api/products`, product)
        }
        catch(error) {
            console.log(error)
        }
    }

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setProduct({...product,[e.target.name] : e.target.value});
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const today = new Date()
        const newReleaseDate = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate()
        const isAvailable = product.stockquantity>=0?true:false 
        console.log(newReleaseDate, isAvailable)
        setProduct({...product, releaseDate: newReleaseDate, available: isAvailable})
    }

    useEffect(() => {
        if (product.releaseDate!=='') {
            addToProducts(product); 
        }
    }, [product]); 

  return (
    <>
    <div>AddProduct</div>
    <form action='#' onSubmit={(e)=>handleSubmit(e)} className='flex-col'>
        <div className='p-2 my-2'>
        <label className='mx-2'>
            Product name:
        </label>
        <input name='name' type="text" className='border-2 border-gray-300' onChange={(e)=>handleChange(e)}/>
        </div>
        <div className='p-2 my-2'>
        <label className='mx-2'>
            Brand:
        </label>
        <input name='brand' type="text" className='border-2 border-gray-300' onChange={(e)=>handleChange(e)}/>
        </div>
        <div className='p-2 my-2'>
        <label className='mx-2'>
            Quantity:
        </label>
        <input name='stockquantity' type='number' className='border-2 border-gray-300' onChange={(e)=>handleChange(e)}/>
        </div>
        <div className='p-2 my-2'>
        <label className='mx-2'>
            Price:
        </label>
        <input name='price' type="number" className='border-2 border-gray-300' onChange={(e)=>handleChange(e)}/>
        </div>
        <div className='p-2 my-2'>
        <label className='mx-2'>
            Category
        </label>
        <input name='category' type="text" className='border-2 border-gray-300' onChange={(e)=>handleChange(e)}/>
        </div>
        <div className='p-2 my-2'>
        <label className='mx-2'>
            Description:
        </label>
        <input name='desc' type="text" className='border-2 border-gray-300' onChange={(e)=>handleChange(e)}/>
        </div>
        <button type='submit' className='py-1 px-2 bg-green-600 text-white'>Submit</button>
    </form>
    </>
  )
}

export default AddProduct