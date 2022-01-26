import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './NavigationDrawer.module.scss';
import UIContext from '../../store/ui-context';
import CategoryList from '../CategoryList/CategoryList';
import { url_path } from 'config';
import { GrClose } from 'react-icons/gr';
import { IoIosArrowDown } from 'react-icons/io'
import SearchBar from '@/components/Searchbar/SearchBar';

const NavigationDrawer = (props) => {
	const [data, setData] = useState(null)
	const { menuIsOpen } = useContext(UIContext);
	const [toggleCategorys, setToggleCategorys] = useState(false);

	useEffect(() => {
		async function get() {
			const response = await fetch(`${url_path}/api/allCategories`)
			const data = await response.json()
			setData(data)
		}
		get()
	}, [])


	if(data !== null) {
		return (
				<div className={ !menuIsOpen ? styles.navigationDrawer : `${styles.active} ${styles.navigationDrawer}`}>
				<main>
					<header>
						<GrClose onClick={props.onClose} />
					</header>
						<div className={styles.searchContainer}>
							<SearchBar />
						</div>
					<nav className={styles.navigationMenu}>
						<div>
							<Link  href={'/allProducts'}>
							<a>
								<p onClick={props.onClose}>Alla Produkter</p>
							</a>
							</Link>
						</div>
						<div onClick={() => setToggleCategorys(!toggleCategorys)}>
							<p>Kategorier
							</p>
							<span ><IoIosArrowDown /></span>
						</div>
					</nav>
						<div aria-expanded={!toggleCategorys} className={styles.categoryListContainer}>
							{data.map(category => (
								<CategoryList onClose={props.onClose} key={category._id} title={category.title} query={category.query} img={category.img} />
							))}
						</div>
				</main>
				</div>
		)
	}else {
		return (<p></p>)
	}
}

export default NavigationDrawer;
