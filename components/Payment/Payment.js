import React, { useEffect, useState, useContext} from 'react'
import CartContext from 'store/cart-context';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import classes from './Payment.module.scss'
import Summary from '../Summary';
import { getLocalstorage } from '@/utils/localstorage';

const stripePromise = loadStripe("pk_test_51Jc3YTL7WEpn3e73oCXBMlM0vm3JlZAxzafuAXjnk2lmp8EvXL7ee8k6iucQlBeLE2CyUzdokmc0vvKOGWXZgAy600AxOre3VM");

const Payment = () => {
	const { cart } = useContext(CartContext);
	const [clientSecret, setClientSecret] = useState("");
  const storedUser = getLocalstorage('checkoutSession');
  
  useEffect(() => {
    let newData = Object.assign(cart, storedUser)
    // Create PaymentIntent as soon as the page loads
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData),
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
		<div className={classes.container}>
			<Summary cart={cart}/>
			<div className={classes.stripeContainer}>

				{clientSecret && (
					<Elements options={options} stripe={stripePromise}>
						<CheckoutForm/>
					</Elements>
				)}
			</div>

		</div>
	  );
}

export default Payment;