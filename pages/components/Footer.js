import styles from '../../styles/Home.module.css'

export default function Footer() {
	return (
		<div className={styles.footer}>
			<div className={styles.footerDiv}>
				<i className="fa fa-twitter"/>
				<i className="fa fa-facebook"/>
				<i className="fa fa-instagram"/>
			</div>
		</div>
	)
}