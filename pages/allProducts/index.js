import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './AllProducts.module.scss';
import ProductList from '@/components/ProductList/ProductList';

const AllProducts = () => {

const router = useRouter()
const [data, setData] = useState(null)

	useEffect(() => {
		async function get() {
			const response = await fetch('http://localhost:3000/api/allProducts')
			const data = await response.json()
			setData(data)
		}
		get()
	}, [])

	if(!data) {
		return( <h1>Hittade inga produkter....</h1>)
	}else {
		return (
			<div className={styles.container}>
				{<ProductList data={data}/>}
		  </div>)
	}
}

export default AllProducts
