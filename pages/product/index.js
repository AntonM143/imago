import Image from 'next/image'
import React from 'react'
import TestBild from '../../testbild.jpg'
import styles from './Product.module.css'
import { useRouter } from 'next/router'


export default function index() {

	const handleClick = (e) => {
		console.log(e);
		e.preventDefault()
		router.push({
			pathname: '/product',
			query: {id: e.target.parentElement.id}
		})
	}

	const router = useRouter()
	console.log(router, "router");

	let unique =  -1
	let props = [
		{
			title: "PRODUKTTITEL LANDSKAP",
			category: "Landskap",
			img: TestBild,
			id: 1
		},
		{
			title: "PRODUKTTITEL LANDSKAP",
			category: "Landskap",
			img: TestBild,
			id: 2
		},
		{
			title: "PRODUKTTITEL DJUR",
			category: "Djur",
			img: TestBild,
			id: 3
		},
		{
			title: "PRODUKTTITEL DJUR",
			category: "Djur",
			img: TestBild,
			id: 4
		},
		{
			title: "PRODUKTTITEL HUS",
			category: "Hus",
			img: TestBild,
			id: 5
		},
		{
			title: "PRODUKTTITEL HUS",
			category: "Hus",
			img: TestBild,
			id: 6
		},
		{
			title: "PRODUKTTITEL PORTRÄTT",
			category: "Porträtt",
			img: TestBild,
			id: 7
		},
		{
			title: "PRODUKTTITEL PORTRÄTT",
			category: "Porträtt",
			img: TestBild,
			id: 8
		},
	]
	let html = []
	console.log(router.query.name);
	props.forEach((item) => {

		html.push(
			<div
				className={styles.box}
				key={unique++}
				onClick={handleClick}
				id={item.id}
			>
				<div className={styles.name}>
					{item.title}
				</div>
				<div className={styles.img}>
				 	<Image
						src={item.img}
						width={200}
						height={200}
					/>
				</div>
			</div>
		)

	})
	return (
		<div className={styles.container}>
			{html}
		</div>
	)
}
