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
			<div className={styles.footnote}>
				<p>Det är en demobutik.</p>
				<p>Imago info@imago.se. Göteborgsgatan 1 411 13 Göteborg. </p>
			</div>
			</div>
		</div>
	)
}
