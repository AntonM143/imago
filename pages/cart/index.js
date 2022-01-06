import React, { useEffect, useState } from 'react'
import { calcTotalAmount, cartQuantity, updateProductQuantity } from '../../components/handlers/cart';
import { formatPrice } from '../../components/handlers/currency';
import testImg from '../../testbild.jpg'
import styles from './Cart.module.css'
import CartItem from './CartItem';


export default function Cart() {
	const [cart, setCart] = useState({items: {id: 3, price: 200, quantity: 1}, totalAmount: 0})

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
	console.log(cart, "cart");
	return (
		<div className={styles.container}>
			<header className={styles.header}>Cart</header>
			{testProd.map((item) => (
				<div key={item.name}>
				<CartItem
					onUpdatedCart={updateProductQuantity}
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
			<div >
				<div className={styles.total}>Totalt pris</div>
				{/* <div className="">{formatPrice(totalAmount)}</div> */}
			</div>
			<button /* onClick={sendReq}  */ className="self-center">
				Check out
			</button>
		</div>
	  );
}
