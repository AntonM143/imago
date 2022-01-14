import React from 'react';
import ProductDetailPage from '../../components/ProductDetailPage/ProductDetailPage';
import { connectToDatabase } from '@/utils/mongodb';
import { useRouter } from 'next/router';
let product_data = {
  "title": "Båt",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centur",
  "images": [
    "https://images.unsplash.com/photo-1531012278403-e5db3b774373?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
  ],
  "categoryId": "hav",
  "variants": [
    {
      "id": "61dd8d5537ef2dc82d57e3b1-21",
      "size": "21x30",
      "price":  99,
      "stock":  100
    },
    {
      "id": "61dd8d5537ef2dc82d57e3b1-30",
      "size": "30x40",
      "price":  149,
      "stock":  100 
    },
    {
      "id": "61dd8d5537ef2dc82d57e3b1-21",
      "size": "21x30",
      "price":  200 ,
      "stock":  100
    }
  ]
}
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
