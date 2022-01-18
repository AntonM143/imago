import { getLocalstorage, clearLocalStorage  } from '@/utils/localstorage';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react'
import { useState } from 'react/cjs/react.development';
import CartContext from 'store/cart-context';

const Success = () => {
	const { cart, clearCart } = useContext(CartContext);
	const router = useRouter()
	const [isLoading, SetIsLoading] = useState(false)

	useEffect(() => {
		SetIsLoading(true)
		// Create PaymentIntent as soon as the page loads
		const params = new URLSearchParams(window.location.search)
		let payment_intent = params.get('payment_intent')
		const cartInLocal = getLocalstorage('cart')
		const orderDetails = getLocalstorage('checkoutSession')

		if(!payment_intent) {
			router.push({
				pathname: '/404'
			})
		}

		if (localStorage.getItem("cart") !== null) {
			SetIsLoading(false)
			let wholeCart = Object.assign(cartInLocal, orderDetails)
			async function fetchMyAPI() {
				/* check if payment_intent exists already */
				let res = await fetch(`api/success/${payment_intent}`)
				res = await res.json()
				/* add to DB */
				if(res.query !== payment_intent) {
					let res = await fetch(`api/success/${payment_intent}`, {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(wholeCart),
					})
					res = await res.json()
					clearCart()
					clearLocalStorage()
				}
			}
			fetchMyAPI()
		  }

	  }, []);

  return (
    <div>
     {  !isLoading ? <h1>DET GICK BRA</h1> : "laddar..."}
    </div>
  )
}

export default Success
