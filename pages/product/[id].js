import React from 'react';
import ProductDetailPage from '../../components/ProductDetailPage/ProductDetailPage';
import { connectToDatabase } from '@/utils/mongodb';

let product_data = {
	title: "PRODUKTTITEL",
	description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centur",
	images: ['https://images.unsplash.com/photo-1584448062042-bf847d8ae0ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4128&q=80', 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80'],
	price: 20,
	sizes: ['30x40', '40,60', '60x80'],
	stock: 5,
	id: 1,
	quantity: 10,
	type: ''
}
const Product = ({data}) => {

	return (
		<>
			<ProductDetailPage
				id={data._id}
				title={data.title}
				description={data.description}
				images={data.images}
				stock={data.stock}
				price={data.price}
				sizes={data.sizes}
			/>
		</>
	)
}

export async function getStaticProps(context) {
	let path = context.params.id

	const res = await fetch(`http://localhost:3000/api/product/${path}`);
	const data = await res.json();
	return {
	  props: {
		data,
	  },
	}
  }

export async function getStaticPaths() {
	const { db } = await connectToDatabase();
	const result = await db
		.collection('products')
		.find( {}, { _id: 1 })
		.toArray();

	return {
		fallback: false,
		paths: result.map((product)=> ({
			params: { id: product._id.toString()},
		})),
	};
}
export default Product
