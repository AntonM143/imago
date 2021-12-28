import styles from '../../../styles/Product.module.css'

export default function Category({props}) {

	return (
		<div className={styles.productContainer}>
			<div className={styles.productDiv}>
					<p>
						{props.title}
					</p>
				<div className={styles.productImg}>
					<img src={props.img}/>
				</div>
			</div>
		</div>
	)
}