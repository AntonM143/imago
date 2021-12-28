import styles from '../../styles/Home.module.css'
import Product from './categories/[product-id}'

export default function Layout({ props}) {
	return (
		<div className={styles.layoutMain}>
			<Product/>
		</div>
	)
}
