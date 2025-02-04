import React, { ReactEventHandler, useState } from 'react'

interface Product {
    id: number;
    name: string;
    price: number;
    quantity?: number;
    stockquantity: number;
    desc: string;
    brand: string;
    category: string;
    // releaseDate: Date;
    // available: boolean;
  }

function AddProduct() {
    const [product, setProduct] = useState<Product>({
        id: 0,
        name: '',
        price: 0,
        quantity: 0,
        stockquantity: 0,
        desc: '',
        brand: '',
        category: '',

    })
    const addToProducts = (formData: FormData) => {
        console.log('add product called...')
        const name = formData.get('name')
        const brand = formData.get('brand')
        const quantity = formData.get('stockquantity')
        const price = formData.get('price')
        const category = formData.get('category')
        const description = formData.get('desc')
        //console.log('FORMDATA: '+name+' '+brand+' '+quantity+' '+price+' '+category+' '+description)
    }

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setProduct({...product,[event.target.name] : event.target.value});
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(product)
    }
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