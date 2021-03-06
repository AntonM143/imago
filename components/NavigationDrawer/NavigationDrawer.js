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
	const flip = toggleCategorys ? styles.flip : "";
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
						<Link href={'/posters/all-products'}>
						<a onClick={props.onClose}>
							<div>
									<p >Alla Produkter</p>
							</div>
						</a>
						</Link>
						<div onClick={() => setToggleCategorys(!toggleCategorys)}>
							<p>Kategorier
							</p>
							<span className={flip}><IoIosArrowDown /></span>
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
