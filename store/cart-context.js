import { createContext, useState, useEffect } from "react";
import { updateProductQuantity, calcTotalAmount } from "handlers/cart";
import { setLocalstorage, getLocalstorage } from "@/utils/localstorage";
const CartContext = createContext({
  cart: [ { items:[], quantity:0 } ],
  addProductToCart: () => { },
  removeProduct: () => { },
});

export const CartContextProvider = ({children}) => {
  const [cart, setCart] = useState({ items:[], totalAmount: 0})
    useEffect(() => {
      if (localStorage.getItem("cart") !== null) {
        const storedCart = getLocalstorage('cart')
        setCart(storedCart);
      }
    },[])

  const addProductToCart = (item) => {
    const existingIndex = cart.items.findIndex(product => item.id === product.id);
    console.log(existingIndex)
    if(existingIndex !== -1) {
      const products = updateProductQuantity(cart, existingIndex);
      const totalAmount = calcTotalAmount(products);
      setCart({ ...cart, items: products, totalAmount });
      setLocalstorage({ ...cart, items: products, totalAmount }, 'cart');
    } else {
      const updatedCart = cart.items.concat(item);
      const totalAmount = calcTotalAmount(updatedCart);
      setCart({ ...cart, items: updatedCart, totalAmount});
      setLocalstorage({ ...cart, items: updatedCart, totalAmount }, 'cart');
    }
  }

  const removeProduct = (productItem) => {
    console.log(productItem, 'TILLAGD PRODUCT')
  }

  return (
    <CartContext.Provider value={{
      cart,
      addProductToCart,
      removeProduct
      }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext;