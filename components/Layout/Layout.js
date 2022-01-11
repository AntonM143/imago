import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import styles from './Layout.module.scss'
import NavigationDrawer from '../NavigationDrawer/NavigationDrawer';

export default function Layout( props ) {
	return (
		<>
			<Header/>
				<NavigationDrawer />
				<main className={styles.layoutMain}>
					{props.children}
				</main>
			<Footer/>
		</>
	)
}
