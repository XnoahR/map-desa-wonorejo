// pages/api/insert.js
import connectToDatabase from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  try {
    const { db } = await connectToDatabase();
    const result = await db.collection('lokasi').insertOne(req.body);
    res.status(201).json({ insertedId: result.insertedId });
  } catch (err) {
    res.status(500).json({ message: 'Failed to insert document', error: err.message });
  }
}
