import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ProductList from '@/components/ProductList/ProductList';
import { url_path } from 'config';
import Select from 'react-select';
import classes from './AllProducts.module.scss';

const AllProducts = () => {

const router = useRouter()
const [data, setData] = useState(null)
const [filteredData, setFilteredData] = useState([])
const [options, setOptions] = useState([])
// const [selectedFilter, setSelectedFilter] = useState(null)
	useEffect(() => {
		async function get() {
			const response = await fetch(`${url_path}/api/allProducts`)
			const data = await response.json()
			setData(data)
		}

		get()

	}, [])
	if(!data) {
		return null
	}else {
		data.map(item => {
			let filter = item.filter
			filter.map(variant => {
				options.push(
					{value: variant.id, label: variant.label},
				)
			})
		})

		const handleChange = ({label}) => {
			setFilteredData([])
			data.map(item => {
				item.filter.forEach(variant => {
					if(variant.label == label) {
						setFilteredData(prevState => [...prevState, item])
					}
				})
			})

		}
		const uniqueVariants = Array.from(options.reduce((map, obj) => map.set(obj.label, obj), new Map()).values());
		return (
			<>
				<div className={classes.select}>
					<Select
						// isMulti
						placeholder={'Sortera på en färg'}
						name="colors"
						options={uniqueVariants}
						onChange={handleChange}
					/>
				</div>
				{<ProductList data={filteredData.length > 0 ? filteredData : data}/>}
		  </>)
	}
}

export default AllProducts
