import { clearLocalStorage } from '@/components/localstorage/localstorage';
import { getLocalstorage } from '@/utils/localstorage';
import React, { useContext, useEffect } from 'react'
import CartContext from 'store/cart-context';

const success = () => {
	const { cart, clearCart } = useContext(CartContext);

	useEffect(() => {
		// Create PaymentIntent as soon as the page loads
		console.log("i useEffect");
		const params = new URLSearchParams(window.location.search)
		let payment_intent = params.get('payment_intent')
		const cartInLocal = getLocalstorage()

		if (localStorage.getItem("cart") !== null) {
			async function fetchMyAPI() {
				/* check if payment_intent exists already */
				let res = await fetch(`api/success/${payment_intent}`)
				res = await res.json()
				/* add to DB */
				if(res.query !== payment_intent) {
					let res = await fetch(`api/success/${payment_intent}`, {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(cartInLocal),
					})
					res = await res.json()
					// clearLocalStorage()
					// clearCart()
				}
			}
			fetchMyAPI()
		  }

	  }, []);

  return (
    <div>
      <h1>DET GICK BRA</h1>
    </div>
  )
}

export default success
