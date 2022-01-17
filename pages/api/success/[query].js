import { LoggerLevel, MongoClient, ObjectId } from 'mongodb';
import { useContext } from 'react';
import CartContext from 'store/cart-context';

//TODO kolla ifall ordern inte redan finns i DB orderId finns i url " payment_intent=pi_3KHqlQL7WEpn3e731N6oP3GX "
//TODO lägga in den skickade ordern. orderid, (vem, vad de har köpt)
//TODO  ändra lager status
//TODO tömma cart i context och localstorage

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
		console.log(result, "result i get");
		if(result == null) {
			//TODO ändra status kod
			res.status(300).json({message: 0})
		}else if(result != null){
			res.status(200).json(result);
		}

	}else if(req.method === "POST") {
		//TODO När vi lägger in ordern, lägg till VEM som köpte
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
