import Payment from '@/components/Payment/Payment';
import React, { useContext, useState } from 'react';
import Head from 'next/head';
import Button from '@/components/Button/Button';
import CartContext from 'store/cart-context';
import styles from './index.module.scss';
import { useRouter } from 'next/router';

const Checkout = () => {
  const router = useRouter();
  const { cart } = useContext(CartContext);
	return (
		<>
		<Head>
			<title>Payment</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>
			{cart.items.length > 0 ? <Payment />
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
