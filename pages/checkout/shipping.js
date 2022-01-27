import Button from '@/components/Button/Button';
import CheckoutAddressForm from '@/components/CheckoutAddressForm/CheckoutAddressForm';
import React, { useContext } from 'react'
import Head from 'next/head';
import CartContext from 'store/cart-context';
import styles from './index.module.scss';
import { useRouter } from 'next/router';
	


const Shipping = () => {
  const router = useRouter();
  const { cart } = useContext(CartContext);
	return (
		<>
		<Head>
			<title>Shipping</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>
		<div style={{ width: '100%' }}>
			{cart.items.length > 0 ? <CheckoutAddressForm />
			: 
			<div className={styles.emptyCart}>
				<h1>Varukorgen är tom!</h1>
				<Button onClick={() => router.push('/')}>Tillbaka Till Startsidan</Button>
			</div>
			}
		</div>
	</>
	  );
}

export default Shipping;
