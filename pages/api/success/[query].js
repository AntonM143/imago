import { MongoClient, ObjectId } from 'mongodb';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

 export default async function handler(req, res) {
	const client = await MongoClient.connect(process.env.MONGODB_URI);
	const db = client.db();
	const ordersCollection = db.collection('orders'); //Connect to collection.
	const productsCollection = db.collection('products'); //Connect to collection.
	let query = req.query
	let body = req.body

	if(req.method === 'GET') {

		const result = await ordersCollection.findOne({ "query": query.query });
		client.close(); //close connection
		if(result == null) {
			res.status(300).json({message: 0})
		}else if(result != null){
			res.status(200).json(result);
		}

	}else if(req.method === "POST") {
		let newData = Object.assign(body, query)
		const result = await ordersCollection.insertMany([newData])
		let data = await Promise.all(body.items.map(async item => {
				const update = await productsCollection.findOneAndUpdate(
					{'variants.id': item.id},
					{ $inc: {'variants.$.stock': -item.quantity}}
				)
		}))
		client.close(); //close connection
		res.status(200).json(result);


	}


}
