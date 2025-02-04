import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="flex justify-between bg-slate-700 text-white font-bold">
            <div className="flex justify-around">
                <div className='text-2xl font-semibold m-auto py-2 px-2'>MarketPlace</div>
                <Link to='/' className="m-auto py-2 px-2">Home</Link>
                <Link to='/about' className="m-auto py-2 px-2">About</Link>
            </div>      
            <div className="flex justify-around">
                <Link to='/products/add' className="m-auto py-1 px-2">Add Product</Link>
                <Link to='/cart' className="m-auto py-1 px-2">Go to cart</Link>
            </div>  
        </div>
    )
}

export default NavBar;