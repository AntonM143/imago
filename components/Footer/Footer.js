import styles from './Footer.module.scss'
import Stripe from '../../public/images/stripe.svg'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
	return (
		<div className={styles.footer}>
			<div className={styles.footerInner}>
				
				<div className={styles.info}>
						<h3>Om Imago</h3>
						<p>Integritetspolicy</p>
						<p>Köpvilkor</p>
				</div>

				<div className={styles.socialMedia}>
					<FaFacebookF/>
					<FaTwitter/>
					<FaInstagram/>
				</div>

				<div className={styles.paymentOptions}>
					<Stripe />
				</div>

			</div>
		</div>
	)
}
