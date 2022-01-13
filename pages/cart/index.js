import React, { useEffect, useState, useContext} from 'react'
import CartContext from 'store/cart-context';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from '@/components/checkoutform';
const stripePromise = loadStripe("pk_test_51Jc3YTL7WEpn3e73oCXBMlM0vm3JlZAxzafuAXjnk2lmp8EvXL7ee8k6iucQlBeLE2CyUzdokmc0vvKOGWXZgAy600AxOre3VM");

import styles from './Cart.module.css'

// line_items: [ { price: {{PRICE_ID}}, adjustable_quantity: { enabled: true, minimum: 1, maximum: 10 } quantity: 1, }, ],

const Cart = () => {
	const [clientSecret, setClientSecret] = useState("");
	const { cart } = useContext(CartContext);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

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
				{clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
			</div>
		</div>
	  );
}

export default Cart;