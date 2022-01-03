import styles from './Footer.module.css'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
	return (
		<div className={styles.footer}>
			<div className={styles.footerDiv}>
				<FaFacebookF/>
				<FaTwitter/>
				<FaInstagram/>
			</div>
			<div className={styles.footerDiv}>
				<p>nån text om imago</p>
			</div>
		</div>
	)
}