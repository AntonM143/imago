// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ObjectId } from 'mongodb';
import { connectToDatabase } from '@/utils/mongodb';

 export default async function handler(req, res) {

   const { db } = await connectToDatabase();
	const result = await db.collection('products').findOne({ "_id": ObjectId(req.query.id) });

   res.status(200).json(result);
}
