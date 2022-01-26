import React, { useEffect, useState, useContext} from 'react'
import CartContext from 'store/cart-context';
import classes from './Summary.module.scss'

const Summary = (props) => {
	if(!props.cart.address) {
		return "loading.."
	}
	let itemHtml = []
	let infoHtml = []
	// console.log(props.cart);
	let cart = props.cart
	let radio = JSON.parse(cart.radio)
	let shipping

	cart.items.forEach(item => {
		itemHtml.push(
			<li key={item.id} className={classes.item}>
				{item.title} {item.size}, {item.price}:- x {item.quantity}
			</li>
		)
	})

	if(radio.type == 'delivery') {
		shipping = "Postnord"
	}else {
		shipping = "Hämta på lagret"
	}

		infoHtml.push(
			<ul className={classes.ul}>
				<li className={classes.item}>
					<h3>Förnamn: </h3>
						<p>{cart.firstname}</p>
				</li>
				<li className={classes.item}>
					<h3>Efternamn: </h3>
					<p>{cart.lastname}</p>
				</li>
				<li className={classes.item}>
					<h3>Mail: </h3>
					<p>{cart.mail}</p>
				</li>
				<li className={classes.item}>
					<h3>Adress: </h3>
					<p>{cart.address}</p>
				</li>
				<li className={classes.item}>
					<h3>Stad: </h3>
					<p>{cart.city}</p>
				</li>
				<li className={classes.item}>
					<h3>Postnummer: </h3>
					<p>{cart.postal}</p>
				</li>
				<li className={classes.item}>
					<h3>Frakt metod: </h3>
					<p>{shipping}</p>
				</li>
			</ul>
		)
		let cartPrice = Number(cart.totalAmount)
		let shippingPrice = Number(radio.price)
		let totalAmount = cartPrice + shippingPrice


	return (
		<>
			<div className={classes.infoContainer}>
				<div className={classes.cartSum}>
					<ul className={classes.ul}>
						{itemHtml}
					</ul>
				</div>
				<div className={classes.infoSum}>
					{infoHtml}
				</div>
			</div>
			<div className={classes.priceSum}>
				Summering av totalpris: {totalAmount} :-
			</div>
		</>

	  );
}

export default Summary;