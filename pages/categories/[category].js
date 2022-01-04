import styles from './Categories.module.css'
import { useRouter } from 'next/router'
export default function Category(props) {
	const router = useRouter();
	const {category} = router.query;
	return (
		<div>
			{category}
			<h1>Product List page</h1>
		</div>
	)
}