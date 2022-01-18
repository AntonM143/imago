import React, { useContext } from 'react'
import CartContext from 'store/cart-context';
import styles from './Cart.module.css'
import CartItem from '../CartItem/CartItem';


const Cart = () => {
	const { cart, addProductToCart } = useContext(CartContext);


	return (
		<div className={styles.container}>
			<header className={styles.header}>Kundvagn</header>
				{cart.items.map((item) => (
					<div key={item.name}>
						<CartItem
							onUpdatedCart={addProductToCart}
							id={item.id}
							img={item.img[0]}
							title={item.title}
							size={item.size}
							quantity={item.quantity}
							price={item.price}
						/>
					</div>
				))}
			<div className={styles.total}>Totalt pris {cart.totalAmount}</div>
		</div>
	  );
}

export default Cart;