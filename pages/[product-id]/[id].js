import React, {useEffect} from 'react';
import ProductDetailPage from '../../components/ProductDetailPage/ProductDetailPage';

let product_data = {
	title: "PRODUKTTITEL",
	description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centur",
	images: ['https://images.unsplash.com/photo-1584448062042-bf847d8ae0ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4128&q=80', 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80'],
	price: 299,
	sizes: ['30x40', '40x60', '60x80'],
	stock: 5,
	id: 1,
	quantity: 10,
	type: ''
}

const Product = (props) => {
	useEffect(() => {
 	async function getProducts() {
		const res = await fetch('/api/product/61dd8d5537ef2dc82d57e3b1');
		const data = await res.json();
		console.log(data);
	} 
	getProducts();
	}, []);

	return (
		<>
			<ProductDetailPage
				id={product_data.id}
				title={product_data.title}
				description={product_data.description}
				images={product_data.images}
				stock={product_data.stock}
				price={product_data.price}
				sizes={product_data.sizes}
			/>
		</>
	)
}


export default Product
