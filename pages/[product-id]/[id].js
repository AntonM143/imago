import styles from './Product.module.css'
import Image from 'next/image'
import testImg from '../../testbild.jpg'
import { FaCartPlus } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { getLocalstorage, setLocalstorage } from '../../components/localstorage/localstorage'
import { useEffect } from 'react/cjs/react.development'



export default function Product() {
	// const [cart, setCart] = useState(savedCart);
	// //const savedCart = getLocalstorage();
	const router = useRouter()
	// useEffect(() => {
	// 	localStorage.setItem('cart', JSON.stringify(cart))
	// }, [cart])

	let props = [
		{
			name: "PRODUKTTITEL",
			imgUrl: testImg,
			description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centur",
			price: 20,
			stock: 5,
			id: 1,
			quantity: 10,
			type: ''
		}
	]

	const addProductToCart = (item) => {
		/* const existingIndex = cart.items.findIndex(product => item.id === product.id);
		if(existingIndex !== -1) {
		  const products = updateProductQuantity(cart, existingIndex, item.type);
		  const totalAmount = calcTotalAmount(products);
		  setCart({ ...cart, items: products, totalAmount });
		  setLocalstorage({ ...cart, items: products, totalAmount });
		} else { */
/* 		  const updatedCart = cart.items.concat(item);
 */		  console.log(cart);
/* 		  const totalAmount = calcTotalAmount(updatedCart);
		  setCart({ ...cart, items: updatedCart, totalAmount});
		  setLocalstorage({ ...cart, items: updatedCart, totalAmount });
 */		/* } */
	  }
	const handleClick = (e) => {
		e.preventDefault
		let id = e.target.id
		addProductToCart({id: props.id, name: props.name, price: props.price, img: props.imgUrl, quantity: 1, type: 'add'})

	}
	return (
		<div className={styles.productContainer}>
			<div className={styles.productDiv}>
				<div className={styles.productImg}>
					<Image
						src={props[0].imgUrl}
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