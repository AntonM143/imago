// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient, ObjectId } from 'mongodb';

 export default async function handler(req, res) {
   const client = await MongoClient.connect(process.env.URI);
   const db = client.db();
   const categoryCollection = db.collection('category'); //Connect to collection.

//    const result = await productCollection.findOne({ "categoryId": ObjectId(req.query.id) });
   const result = await categoryCollection.find().toArray();

   client.close(); //close connection
   res.status(200).json(result);
}
