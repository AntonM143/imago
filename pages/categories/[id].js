import { MongoClient } from 'mongodb';
import { useRouter } from 'next/router'
import ProductListPage from '../../components/ProductListPage/ProductListPage';
// import classes from './Categories.module.scss'

const Category = ({ data }) => {

	// const {category} = router.query;
	return (
		<>
			<ProductListPage data={data} />
		</>
	)
}

export async function getStaticProps(context) {
	// Call an external API endpoint to get posts.
	// You can use any data fetching library
	let path = context.params.id

	const res = await fetch(`http://localhost:3000/api/category/${path}`);
	const data = await res.json();
	// By returning { props: { posts } }, the Blog component
	// will receive `posts` as a prop at build time
	return {
	  props: {
		data,
	  },
	}
  }

export async function getStaticPaths() {
	// const res = await fetch(`/api/category/${path}`);
	// const data = await res.json();
	const client = await MongoClient.connect(process.env.MONGODB_URI);

	const db = client.db();
	const productsCollection = db.collection('products'); //Connect to collection.
	const result = await productsCollection.distinct("categoryId");
	// const result = await productsCollection.find().toArray();

	client.close();
	return{

		fallback: false,

		paths: result.map((category)=> ({


			params: { id: category.toString().toLowerCase()},

		})),

		};
}

export default Category;
