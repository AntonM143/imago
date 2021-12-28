import styles from '../../../styles/Product.module.css'
import Image from 'next/image'
import testImg from '../../../testbild.jpg'

export default function Product() {
	let props = [
		{
			title: "en titel",
			img: testImg,
			description: "beskrivning",
			price: 20,
			stock: 5
		}
	]
	return (
		<div className={styles.productContainer}>
			<div className={styles.productDiv}>
				<div className={styles.productImg}>
					<Image
						src={props[0].img}
						width={300}
						height={300}
						/* layout='responsive' */
					/>
				</div>
				<div className={styles.productInfo}>
					<p>
						{props[0].title}
					</p>
					<p>
						{props[0].price}
					</p>
					<p>
						{props[0].stock}
					</p>
					<p>
						{props[0].description}
					</p>
				</div>
			</div>
		</div>
	)
}