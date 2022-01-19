// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from 'mongodb';

 export default async function handler(req, res) {
   const client = await MongoClient.connect(process.env.MONGODB_URI);
   const db = client.db();
   const productCollection = db.collection('products'); //Connect to collection.

//    const result = await productCollection.findOne({ "categoryId": ObjectId(req.query.id) });
   const result = await productCollection.find({ "categoryId":  req.query.id.toLowerCase()}).toArray();


   client.close(); //close connection
   res.status(200).json(result);
}
