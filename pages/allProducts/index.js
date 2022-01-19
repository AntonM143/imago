import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ProductList from '@/components/ProductList/ProductList';
import { url_path } from 'config';

const AllProducts = () => {

const router = useRouter()
const [data, setData] = useState(null)

	useEffect(() => {
		async function get() {
			const response = await fetch(`${url_path}/api/allProducts`)
			const data = await response.json()
			setData(data)
		}
		get()
	}, [])

	if(!data) {
		return( <h1>Hittade inga produkter....</h1>)
	}else {
		return (
			<div>
				{<ProductList data={data}/>}
		  </div>)
	}
}

export default AllProducts
