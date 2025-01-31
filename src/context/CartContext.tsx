import React, { createContext, useEffect, useState, ReactNode } from 'react'

interface Product {
  id: number;
  name: string;
  price: number;
  quantity?: number;
  stockquantity: number;
  desc: string;
  brand: string;
  releaseDate: Date;
  category: string;
  available: boolean;
}

interface CartContextType {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  clearCart: () => void;
  totalCartAmount: () => number
  removeFromCart: (product: Product) => void
}

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextType>({cartItems: [],
  addToCart: () => {},
  clearCart: () => {},
  totalCartAmount: () => 0,
  removeFromCart: () => {},
  });

export const CartProvider:React.FC<CartProviderProps> = ({children}) => {
  const [cartItems, setCartItems] = useState<Product[]>(()=>{
    const savedCartItems = localStorage.getItem('cartItems')
    return savedCartItems? JSON.parse(savedCartItems):[];
  });

  const addToCart = (product:Product) => {
    const isInCart = cartItems.find((cartItem) => cartItem.id===product.id);
    if(isInCart) {
      setCartItems(cartItems.map((cartItem) => cartItem.id===product.id?{...cartItem, quantity: (cartItem.quantity??=0)+1}:cartItem))
    }
    else {
      setCartItems((prevItems) => [...prevItems, {...product, quantity:1}]);
    }
  }

  const removeFromCart = (product:Product) => {
    if(product.quantity===1) {
      setCartItems(cartItems.filter((cartItem)=>cartItem.id!==product.id))
    }
    else {
      setCartItems(cartItems.map((cartItem)=> cartItem.id===product.id?{...cartItem, quantity:(cartItem.quantity??=1)-1}:cartItem))
    }
  }

  const clearCart = () => {
    setCartItems([]);
  };

  const totalCartAmount = () => {
    const amount=cartItems.reduce((acc,item)=>{
      return acc+item.price*(item.quantity??0);
    },0)
    return amount;
  }

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    console.log("UseEffect: "+ JSON.stringify(cartItems))
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  return <CartContext.Provider value={{cartItems,addToCart,clearCart,totalCartAmount, removeFromCart}}>
    {children}
  </CartContext.Provider>
}

export default CartContext