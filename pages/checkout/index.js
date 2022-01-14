import Button from '@/components/Button/Button';
import Cart from '@/components/Cart/Cart';
import Payment from '@/components/Payment/Payment';
import Shipping from '@/components/Shipping/Shipping';
import React, { useState, useContext} from 'react'
import CartContext from 'store/cart-context';


const Checkout = () => {
	const { cart } = useContext(CartContext);
	/* 3 state */
	const [preview, setPreview] = useState(true)
	const [shipping, setShipping] = useState(false)
	const [payment, setPayment] = useState(false)

	const handleClick = () => {
		if(preview) {
			setShipping(!shipping)
			setPreview(!preview)
		}else if(shipping) {
			setShipping(!shipping)
			setPayment(!payment)
		}else if(payment) {
			setPayment(!payment)
			setShipping(!shipping)
		}

	}


	return (
		<div>
			{preview ? <Cart/> : ""}
			{shipping ? <Shipping/> : ""}
			{payment ? <Payment/> : ""}
			{preview == false && shipping == false ? "" :
				<Button
					color = {"coal"}
					onClick = {handleClick}
				>
					Nästa steg
				</Button>
			}
			{/* {shipping == false && payment == false ? "" :
				<Button
					color = {"coal"}
					onClick = {handleClick}
				>
					Tillbaka
				</Button>
			} */}
		</div>
	  );
}

export default Checkout;