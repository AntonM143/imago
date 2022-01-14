import React from 'react';
import ProductDetailPage from '../../components/ProductDetailPage/ProductDetailPage';
import { connectToDatabase } from '@/utils/mongodb';
import { useRouter } from 'next/router';

const Product = ({ data }) => {

const router = useRouter()
	return (
		<>
			<ProductDetailPage
				id={data._id}
				title={data.title}
				description={data.description}
				images={data.images}
				variants={data.variants}
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
