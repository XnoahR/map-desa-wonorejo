// pages/api/find.js
import connectToDatabase from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  try {
    const { db } = await connectToDatabase();
    const documents = await db.collection('lokasi').find({}).toArray();
    res.status(200).json(documents);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve documents', error: err.message });
  }
}
