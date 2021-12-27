import styles from '../../../styles/Product.module.css'

export default function Product({props}) {


	return (
		<div className={styles.productContainer}>
			<div className={styles.productDiv}>
					<p>
						{props.title}
					</p>
				<div className={styles.productImg}>
					<img src={props.img}/>
				</div>
				<div className={styles.productInfo}>
					<p>
						{props.description}
					</p>
					<p>
						{props.price}
					</p>
					<p>
						{props.stock}
					</p>
				</div>
			</div>
		</div>
	)
}