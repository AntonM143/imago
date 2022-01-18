import { updateProductQuantity } from "handlers/cart";
import Image from "next/image";
import React from "react";
import styles from './CartItem.module.scss'
import { GrSubtractCircle, GrAddCircle } from 'react-icons/gr';

export default function CartItem(props) {

  	return (
		<div className={styles.container}>
			<div className={styles.leftSide}>
				<div className={styles.test}>
					<div className={styles.leftSideImage}>
						<Image
							src={props.img}
							alt={props.title}
							width={2}
							height={2}
							layout="responsive"
							objectFit='cover'
							priority
						/>
					</div>
				</div>
				<div className={styles.leftSideName}>
					{props.title}, {props.size}
				</div>
			</div>
			<div className={styles.rightSide}>
				<div className={styles.rightSideBox}>
					<div className={styles.rightSideAdd}>
						<GrSubtractCircle
							onClick={() => {
								props.onUpdatedCart( { id:props.id, type: 'subtract' } )
							}}
						/>
					</div>
					<div className={styles.rightSideQuantity}>
						<span>antal:</span>{props.quantity}
					</div>
					<div className={styles.rightSideSubstract}>
						<GrAddCircle
							onClick={() => {
								props.onUpdatedCart( { id:props.id, type: 'add' })
							}}
						/>
					</div>
					<div className={styles.rightSidePrice}>
						<div>
							{props.price} kr
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
