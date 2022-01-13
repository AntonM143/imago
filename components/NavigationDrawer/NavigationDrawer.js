import { useContext, useEffect, useState } from 'react';
import classes from './NavigationDrawer.module.scss';
import UIContext from '../../store/ui-context';
import {MdClose} from 'react-icons/md';
import CategoryList from '../CategoryList/CategoryList';

const NavigationDrawer = (props) => {
	const [data, setData] = useState(null)
	const { menuIsOpen, toggleMenu } = useContext(UIContext);

	useEffect(() => {
		async function get() {
			const response = await fetch('http://localhost:3000/api/allCategories')
			const data = await response.json()
			setData(data)
		}
		get()
	}, [])

	if(data !== null) {
		return (
			<div className={ !menuIsOpen ? classes.navigationDrawer : `${classes.active} ${classes.navigationDrawer}`}>
			<main>
				<header className={classes.navigationHeader}>
				<div onClick={toggleMenu}>
					<MdClose />
				</div>
				<div>
					<h1>Kategorier</h1>
				</div>
				</header>
				<section>
				<ul style={{display: 'flex'}}>
					{data.map(category => (
						<CategoryList key={category._id} title={category.title} query={category.query} img={category.img} />
					))}

				</ul>
				</section>
			</main>
			</div>
		)
	}else {
		return (<p></p>)
	}
}

export default NavigationDrawer;
