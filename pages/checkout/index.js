import Button from '@/components/Button/Button';
import Cart from '@/components/Cart/Cart';
import Payment from '@/components/Payment/Payment';
import CheckoutAddressForm from '@/components/CheckoutAddressForm/CheckoutAddressForm';
import React, { useState, useEffect, useContext} from 'react'
import { setLocalstorage, getLocalstorage } from '@/utils/localstorage';


const Checkout = () => {

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
		setPreview(false)
		setShipping(true)
		setPayment(false)
	}
	const onPayment = () => {
		setPreview(false)
		setShipping(false)
		setPayment(true)
	}

	return (
		<div style={{width: '100%'}}>
			<button onClick={onCart}>Varor</button>
			<button onClick={onShipping}>Leverans</button>
					<div>
					{ preview && <Cart /> }
					{ shipping && <CheckoutAddressForm storedData={formData} onFormData={formDataHandler} /> }
					{ payment && <Payment storedUser={formData} /> }
					</div>
		</div>
	  );
}

export default Checkout;
