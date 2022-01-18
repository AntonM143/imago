import { createContext, useState, useEffect } from "react";
import { updateProductQuantity, calcTotalAmount } from "handlers/cart";
import { setLocalstorage, getLocalstorage } from "@/components/localstorage/localstorage";
const CartContext = createContext({
  cart: [ { items:[], quantity:0 } ],
  addProductToCart: () => { },
  removeProduct: () => { },
  clearCart: () => { },
});

export const CartContextProvider = ({children}) => {
  const [cart, setCart] = useState({ items:[], totalAmount: 0})
    useEffect(() => {
      if (localStorage.getItem("cart") !== null) {
        const storedCart = getLocalstorage()
        setCart(storedCart);
      }
    },[])

  const addProductToCart = (item) => {
    const existingIndex = cart.items.findIndex(product => item.id === product.id);
    if(existingIndex !== -1) {
      const products = updateProductQuantity(cart, existingIndex, item.type);
      const totalAmount = calcTotalAmount(products);
      setCart({ ...cart, items: products, totalAmount });
      setLocalstorage({ ...cart, items: products, totalAmount });
    } else {
      const updatedCart = cart.items.concat(item);
      const totalAmount = calcTotalAmount(updatedCart);
      setCart({ ...cart, items: updatedCart, totalAmount});
      setLocalstorage({ ...cart, items: updatedCart, totalAmount });
    }
  }

  const removeProduct = (productItem) => {
    console.log(productItem, 'TILLAGD PRODUCT')
  }

  const clearCart = () => {
	setCart([])
	console.log("clear cart😊😊😊");
  }

  return (
    <CartContext.Provider value={{
      cart,
      addProductToCart,
      removeProduct,
	  clearCart,
      }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext;