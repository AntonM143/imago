import Button from '@/components/Button/Button';
import Cart from '@/components/Cart/Cart';
import Payment from '@/components/Payment/Payment';
import CheckoutAddressForm from '@/components/CheckoutAddressForm/CheckoutAddressForm';
import React, { useState, useEffect, useContext} from 'react'
import { setLocalstorage, getLocalstorage } from '@/utils/localstorage';
import Head from 'next/head';
import { useRouter } from 'next/router';



const Checkout = () => {
	const router = useRouter();
	const [formData, setFormData] = useState(null);
	useEffect(() => {

    const storedUser = getLocalstorage('checkoutSession');
    setFormData(storedUser)
  },[]);
	/* 3 state */
	const [preview, setPreview] = useState(true)
	const [shipping, setShipping] = useState(false)
	const [payment, setPayment] = useState(false)

	const formDataHandler = (data) => {
		setLocalstorage(data, 'checkoutSession')
		setFormData(data)
		setPreview(false)
		setShipping(false)
		setPayment(true)
	}

	const onCart = () => {
		setPreview(true)
		setShipping(false)
		setPayment(false)
	}
	const onShipping = () => {
		router.push('/checkout?delivery', undefined, { shallow: true })
		setPreview(false)
		setShipping(true)
		setPayment(false)
	}

	return (
		<>
		<Head>
			<title>Checkout</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>

		<div style={{ width: '100%' }}>
			<div>
				<p onClick={onCart}>Varukorg</p>
				<p onClick={onShipping}>Leverans</p>
			</div>
					<div>
					{ preview && <Cart /> }
					{ shipping && <CheckoutAddressForm storedData={formData} onFormData={formDataHandler} /> }
					{ payment && <Payment storedUser={formData} /> }
					</div>
					{ preview && <Button onClick={onShipping}>Till Beställning</Button>}
		</div>
	</>
	  );
}

export default Checkout;
