import React, { useEffect, useState, useContext} from 'react'
import CartContext from 'store/cart-context';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const stripePromise = loadStripe("pk_test_51Jc3YTL7WEpn3e73oCXBMlM0vm3JlZAxzafuAXjnk2lmp8EvXL7ee8k6iucQlBeLE2CyUzdokmc0vvKOGWXZgAy600AxOre3VM");

// line_items: [ { price: {{PRICE_ID}}, adjustable_quantity: { enabled: true, minimum: 1, maximum: 10 } quantity: 1, }, ],

const Payment = () => {
	const { cart } = useContext(CartContext);
	const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cart),
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
		<div>
			{clientSecret && (
				<Elements options={options} stripe={stripePromise}>
					<CheckoutForm/>
				</Elements>
			)}
		</div>
	  );
}

export default Payment;