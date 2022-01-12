import React, { useEffect, useState } from 'react'
import { calcTotalAmount, cartQuantity, updateProductQuantity } from '../../components/handlers/cart';
/*
import { formatPrice } from '../../components/handlers/currency';
 */
import testImg from '../../testbild.jpg'
import styles from './Cart.module.css'
import CartItem from './CartItem';


const Cart = () => {
	const [cart, setCart] = useState({items: {id: 3, price: 200, quantity: 1, imgUrl: testImg, name: "testProdukt"
}, totalAmount: 0})

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
	/* useEffect(() => {
		if(localStorage) {
			setCart(localStorage.getItem('cart'))
		}

	}, [cart])
 */

	let testProd = [
		{
			name: "PRODUKTTITEL",
			imgUrl: testImg,
			description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centur",
			price: 200,
			stock: 5,
			id: 1,
			quantity: 1,
			type: ''
		},
		{
			name: "PRODUKTTITEL2",
			imgUrl: testImg,
			description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centur",
			price: 199,
			stock: 5,
			id: 1,
			quantity: 1,
			type: ''
		}
	]
	//let totalAmount = calcTotalAmount(cart)
	/*
	cartQuantity(cart) */
	console.log(cart.items, "cart");
	return (
		<div className={styles.container}>
			<header className={styles.header}>Kundvagn</header>
			{testProd.map((item) => (
				<div key={item.name}>
				<CartItem
					onUpdatedCart={addProductToCart}
					id={item.id}
					img={item.imgUrl}
					name={item.name}
					quantity={item.quantity}
					price={item.price}
				/>
				</div>
			))}
			{/* <span className="w-full divide-y-2 divide-fuchsia-300 py-2">
				<div></div>
				<div></div>
			</span>
 */}
			<div className={styles.totalNCheckout}>
				<div className={styles.total}>Totalt pris 2000kr</div>
				{/* <div className="">{formatPrice(totalAmount)}</div> */}
				<div className={styles.buttonContainer}>
					<button /* onClick={sendReq}  */ className={styles.button
						}>
						Check out
					</button>
				</div>
			</div>
		</div>
	  );
}

export default Cart;