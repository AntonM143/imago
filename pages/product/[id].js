import React from 'react';
import ProductDetailPage from '../../components/ProductDetailPage/ProductDetailPage';
import { connectToDatabase } from '@/utils/mongodb';
import { useRouter } from 'next/router';
import { url_path } from '../../config/index';
import { ObjectId } from 'mongodb';
import Head from 'next/head';


const Product = ({ data }) => {

const router = useRouter()
	return (
		<>
		<Head>
			<title>{data.title}</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>
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

	const { db } = await connectToDatabase();
	const data = await db.collection('products').findOne({ "_id": ObjectId(path) });
	return {
	  props: {
			data: {
				_id: data._id.toString(),
				title: data.title,
				description: data.description,
				images: data.images,
				variants: data.variants,
			},
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
