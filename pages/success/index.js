import { getLocalstorage, clearLocalStorage  } from '@/utils/localstorage';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react'
import CartContext from 'store/cart-context';
import { url_path } from 'config';
import Head from 'next/head';
import Hero from '@/components/Hero/Hero';

const Success = () => {
	const { clearCart } = useContext(CartContext);
	const router = useRouter();

	useEffect(() => {
		// Create PaymentIntent as soon as the page loads
		const params = new URLSearchParams(window.location.search)
		let payment_intent = params.get('payment_intent')
		const cart = getLocalstorage('cart')
		const orderDetails = getLocalstorage('checkoutSession')
		// console.log(payment_intent, "123123");

		if(!payment_intent) {
			router.push({
				pathname: '/404'
			})
		}
		if (cart !== null) {
			let wholeCart = Object.assign(cart, orderDetails)
			async function fetchMyAPI() {
				/* check if payment_intent exists already */
				let res = await fetch(`${url_path}/api/success/${payment_intent}`)
				res = await res.json()
				/* add to DB */
				if(res.query !== payment_intent) {

					let res = await fetch(`${url_path}/api/success/${payment_intent}`, {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(wholeCart),
					})
					res = await res.json()
				}
				clearCart()
				clearLocalStorage()
			}
			fetchMyAPI()

		} else {
			router.push({
				pathname: '/404'
			})
		}

	  }, []);

  return (
    <>
			<Head>
				<title>Tack för ditt köp!</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Hero
				btnText={'Tillbaka till startsidan'}
				title={'Köpet gick bra, din order är skickad!'}
				buttonHref={'/'}
			/>
    </>
  )
}

export default Success
