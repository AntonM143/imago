import Button from '@/components/Button/Button';
import Cart from '@/components/Cart/Cart';
import React, { useContext } from 'react'
import Head from 'next/head';
import { useRouter } from 'next/router';
import CartContext from 'store/cart-context';
import styles from './index.module.scss';



const Checkout = () => {
	const { cart } = useContext(CartContext);
	const router = useRouter();

	return (
		<>
		<Head>
			<title>Checkout</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>

			{cart.items.length > 0 ? <><Cart /><Button onClick={() => router.push('/checkout/shipping')}>Till Beställning</Button></>
			: 
			<div className={styles.emptyCart}>
				<h1>Varukorgen är tom!</h1>
				<Button onClick={() => router.push('/')}>Tillbaka Till Startsidan</Button>
			</div>
			}
	</>
	  );
}

export default Checkout;
