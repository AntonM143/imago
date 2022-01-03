import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import styles from './Layout.module.css'


export default function Layout( props ) {
	return (
		<>
			<Header/>
				<main className={styles.layoutMain}>
					{props.children}
				</main>
			<Footer/>
		</>
	)
}