import styles from './Product.module.css'
import Image from 'next/image'
import testImg from '../../testbild.jpg'
import { FaCartPlus } from 'react-icons/fa'
import { useRouter } from 'next/router'

export default function Product() {
	const router = useRouter()
	let props = [
		{
			title: "PRODUKTTITEL",
			img: testImg,
			description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centur",
			price: 20,
			stock: 5
		}
	]
	console.log(router);
	const handleClick = (e) => {
		e.preventDefault
		let id = e.target.id
		if(localStorage.getItem(id)) {
			let amount = localStorage.getItem(id)
			localStorage.setItem(id, ++amount)
		}else {
			localStorage.setItem("cart", {id: 1})
		}
	}
	return (
		<div className={styles.productContainer}>
			<div className={styles.productDiv}>
				<div className={styles.productImg}>
					<Image
						src={props[0].img}
						width={400}
						height={500}
						/* layout='responsive' */
					/>
				</div>
				<div className={styles.productInfo}>
					<div className={styles.top}>
						<p>
							{props[0].title}
						</p>
						<p>
							{props[0].price} kr
						</p>
					</div>
					<button
						className={styles.button}
						id={router.query.id}
						onClick={handleClick}
					>
						LÄGG TILL <FaCartPlus/>
					</button>
					<p>Beskrivning</p>
					<p>
						{props[0].description}
					</p>
				</div>
			</div>
		</div>
	)
}