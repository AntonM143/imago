import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function Header() {
	return (
		<div className={styles.headerNav}>
			<div className={styles.headerDivider}>
				<div>
					LOGO
				</div>
				<Link href="/">
					<a>
						Hem
					</a>
				</Link>
				<Link href="/categories">
					<a>
						Kategorier
					</a>
				</Link>
				<Link href="/contactUs">
					<a>
						Kontakta oss
					</a>
				</Link>
				<Link href="/checkOut">
					<a>
						Kassa
					</a>
				</Link>
			</div>
			<div className={styles.headerDivider}>
				<div>
					<p>Sök</p>
				</div>
			</div>
		</div>
	)
}