import { MongoClient } from 'mongodb';
import { useRouter } from 'next/router'
import ProductListPage from '../../components/ProductListPage/ProductListPage';
// import classes from './Categories.module.scss'

const products_data = [
  {
    id: 'Abs',
    title: 'Abstrakta',
		price: 199,
		discountAmount: 0,
		discountPrice: 129,
    img: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80'
  },
  {
    id: 'Ark',
    title: 'Arkitektur',
		price: 299,
		discountAmount: 0,
		discountPrice: 129,
    img: 'https://images.unsplash.com/photo-1625854428677-7f945fb60c12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80',
  },
  {
    id: 'Bot',
    title: 'Botaniska',
		price: 99,
		discountAmount: 0,
		discountPrice: 129,
    img: 'https://images.unsplash.com/photo-1579167728798-a1cf3d595960?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1626&q=80',
  },
  {
    id: 'Art',
    title: 'Art Deco',
		price: 190,
		discountAmount: 0,
		discountPrice: 129,
    img: 'https://images.unsplash.com/photo-1584448062042-bf847d8ae0ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4128&q=80',
  },
  {
    id: 'nat',
    title: 'nature',
		price: 199,
		discountAmount: 0,
		discountPrice: 129,
    img: 'https://images.unsplash.com/photo-1641068471310-920a079f4dcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80'
  },
  {
    id: 'people',
    title: 'people',
		price: 299,
		discountAmount: 0,
		discountPrice: 129,
    img: 'https://images.unsplash.com/photo-1627378229060-1875ee11a611?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1588&q=80',
  },
  {
    id: '123',
    title: 'Botaniska',
		price: 99,
		discountAmount: 0,
		discountPrice: 129,
    img: 'https://images.unsplash.com/photo-1579167728798-a1cf3d595960?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1626&q=80',
  },
  {
    id: 'A32123rt',
    title: 'Art Deco',
		price: 190,
		discountAmount: 0,
		discountPrice: 129,
    img: 'https://images.unsplash.com/photo-1584448062042-bf847d8ae0ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4128&q=80',
  },
  {
    id: 'A32123r11t',
    title: 'Art Deco',
		price: 190,
		discountAmount: 0,
		discountPrice: 129,
    img: 'https://images.unsplash.com/photo-1584448062042-bf847d8ae0ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4128&q=80',
  },
  {
    id: 'A3212113r11t',
    title: 'Art Deco',
		price: 190,
		discountAmount: 0,
		discountPrice: 129,
    img: 'https://images.unsplash.com/photo-1584448062042-bf847d8ae0ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4128&q=80',
  },
]

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
