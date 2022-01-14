import Image from "next/image";
import React from "react";
import styles from './CartItem.module.css'

export default function CartItem(props) {
  	return (
		<div className={styles.container}>
			<div className={styles.containerImage}>
				<div className={styles.boxImage}>
					<Image
						src={props.img}
						height={150}
						width={150}
					/>
				</div>
				<div className={styles.name}>
					{props.title}, {props.size}
				</div>
			</div>
			<div className={styles.rightSide}>
				<div className={styles.rightSideBox}>
					<button
						className={styles.button}
						onClick={() => {
							props.onUpdatedCart({ id:props.id, type: 'subtract' })
						}}
					>
						<p className={styles.increaseDecrease}>-</p>
					</button>
					<div className={styles.quantity}>
						antal: {props.quantity}
					</div>
					<button
						className={styles.button}
						onClick={() => {props.onUpdatedCart({ id:props.id, type: 'add' })
						}}
					>
						<p className={styles.increaseDecrease}>+</p>
					</button>
				</div>
				<div className={styles.containerPrice}>
					<div>
						{props.price} kr
					</div>
				</div>
			</div>
		</div>
	);
}
