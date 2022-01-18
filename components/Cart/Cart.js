import React, { useContext } from 'react'
import CartContext from 'store/cart-context';
import styles from './Cart.module.css'
import CartItem from '../CartItem/CartItem';


const Cart = () => {
	const { cart } = useContext(CartContext);


	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<h1>VARUKORG</h1>
			</header>
				{cart.items.map((item, index) => (
					<div key={index}>
						<CartItem /* cart state true  */
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