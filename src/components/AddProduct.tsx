import React, { useState } from 'react'

function AddProduct() {
    const [product, setProduct] = useState()
    const addProduct = (formData) => {
        const name = formData.get('name')
        const brand = formData.get('brand')
        const quantity = formData.get('stockquantity')
        const price = formData.get('price')
        const category = formData.get('category')
        const description = formData.get('desc')
    }
  return (
    <>
    <div>AddProduct</div>
    <form action={addProduct(FormData)} className='flex-col'>
        <div className='p-2 my-2'>
        <label className='mx-2'>
            Product name:
        </label>
        <input name='name' type="text" className='border-2 border-gray-300'/>
        </div>
        <div className='p-2 my-2'>
        <label className='mx-2'>
            Brand:
        </label>
        <input name='brand' type="text" className='border-2 border-gray-300'/>
        </div>
        <div className='p-2 my-2'>
        <label className='mx-2'>
            Quantity:
        </label>
        <input name='stockquantity' type='number' className='border-2 border-gray-300'/>
        </div>
        <div className='p-2 my-2'>
        <label className='mx-2'>
            Price:
        </label>
        <input name='price' type="number" className='border-2 border-gray-300'/>
        </div>
        <div className='p-2 my-2'>
        <label className='mx-2'>
            Category
        </label>
        <input name='category' type="text" className='border-2 border-gray-300'/>
        </div>
        <div className='p-2 my-2'>
        <label className='mx-2'>
            Description:
        </label>
        <input name='desc' type="text" className='border-2 border-gray-300'/>
        </div>
        <button type='submit' className='py-1 px-2 bg-green-600 text-white'>Submit</button>
    </form>
    </>
  )
}

export default AddProduct