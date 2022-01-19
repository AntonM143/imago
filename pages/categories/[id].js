
import { MongoClient } from 'mongodb';
import { connectToDatabase } from '@/utils/mongodb';
import ProductListPage from '../../components/ProductListPage/ProductListPage';
import { ObjectId } from 'mongodb';


const Category = ({ data }) => {

	return (
		<>
			<ProductListPage data={data} />
		</>
	)
}

export async function getStaticProps(context) {
	let path = context.params.id
	const { db } = await connectToDatabase();
	const response = await db.collection('products').find({ "categoryId": path.toLowerCase()}).toArray();

	const data = response.map((product) => {
		return {
			_id: ObjectId(product._id).toString(),
			title: product.title,
			description: product.description,
			images: product.images,
			variants: product.variants,
		}
	})
		return {
			props: {
				data
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

	return {
		fallback: false,
		paths: result.map((category)=> ({
			params: { id: category.toString().toLowerCase()},
		})),
	};
}

export default Category;
