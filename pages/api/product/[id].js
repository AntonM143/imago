// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient, ObjectId } from 'mongodb';

 export default async function handler(req, res) {
   const client = await MongoClient.connect(process.env.URI);
   const db = client.db();
   const productCollection = db.collection('products'); //Connect to collection.

   const result = await productCollection.findOne({ "_id": ObjectId(req.query.id) });
//    const resultAll = await productCollection.find().toArray();
	console.log(result, "result från api");
   client.close(); //close connection
   res.status(200).json(result);
}
