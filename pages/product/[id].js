import { MongoClient } from 'mongodb';
import React from 'react';
import ProductDetailPage from '../../components/ProductDetailPage/ProductDetailPage';

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
			<button >GET</button>
		</>
	)
}

export async function getStaticProps(context) {
	// Call an external API endpoint to get posts.
	// You can use any data fetching library
	let path = context.params.id

	const res = await fetch(`http://localhost:3000/api/product/${path}`);
	const data = await res.json();
	console.log(data, "i frontend");
	// By returning { props: { posts } }, the Blog component
	// will receive `posts` as a prop at build time
	return {
	  props: {
		data,
	  },
	}
  }

export async function getStaticPaths() {
	// const res = await fetch(`/api/category/${path}`);
	// const data = await res.json();
	const client = await MongoClient.connect(process.env.MONGODB_URI);

	const db = client.db();
	const productsCollection = db.collection('products'); //Connect to collection.
	const result = await productsCollection.find( {}, {_id: 1}).toArray();
	// const result = await productsCollection.find().toArray();

	client.close();

	return{

		fallback: false,

		paths: result.map((product)=> ({


			params: { id: product._id.toString()},

		})),

		};
}
export default Product
