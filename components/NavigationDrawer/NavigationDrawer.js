import { useContext, useEffect, useState } from 'react';
import styles from './NavigationDrawer.module.scss';
import UIContext from '../../store/ui-context';
import {MdClose} from 'react-icons/md';
import CategoryList from '../CategoryList/CategoryList';
import { url_path } from 'config';

const NavigationDrawer = (props) => {
	const [data, setData] = useState(null)
	const { menuIsOpen, toggleMenu } = useContext(UIContext);

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
				
				<header className={styles.navigationHeader}>
				<div onClick={toggleMenu}>
					<MdClose />
				</div>
				<div>
					<h1>Kategorier</h1>
				</div>
				</header>

					<ul className={styles.categoryListContainer}>
						{data.map(category => (
							<CategoryList key={category._id} title={category.title} query={category.query} img={category.img} />
						))}
					</ul>

			</main>
			</div>
		)
	}else {
		return (<p></p>)
	}
}

export default NavigationDrawer;
