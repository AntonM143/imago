import React, { useEffect, useState, useContext} from 'react'
import CartContext from 'store/cart-context';
/*
import { formatPrice } from '../../components/handlers/currency';
 */
import testImg from '../../testbild.jpg'
import styles from './Cart.module.css'
import CartItem from './CartItem';

// line_items: [ { price: {{PRICE_ID}}, adjustable_quantity: { enabled: true, minimum: 1, maximum: 10 } quantity: 1, }, ],

const Cart = () => {
	const { cart } = useContext(CartContext);

	return (
		<div className={styles.container}>
			<header className={styles.header}>Kundvagn</header>
{/* 			{cart.items.map((item) => (
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
))} */}
			
			{/* <span className="w-full divide-y-2 divide-fuchsia-300 py-2">
				<div></div>
				<div></div>
			</span>
 */}	
				{cart && cart.items[0]?.title}
				{cart && cart.items[1]?.title}
			<div className={styles.totalNCheckout}>
				<div className={styles.total}>Totalt pris {cart.totalAmount}</div>
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