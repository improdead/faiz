import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db('Vector');
    const waitlistCollection = db.collection('waitlist');

    // Count the documents in the waitlist collection
    const count = await waitlistCollection.countDocuments();
    
    // Return the count plus 128 as requested
    return NextResponse.json({ count: count + 128 }, { status: 200 });
  } catch (error) {
    console.error('Error in waitlist count API:', error);
    
    // If database connection fails, return fixed count
    return NextResponse.json({ count: 128, error: true }, { status: 200 });
  }
}

export async function POST(request) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    try {
      // Connect to MongoDB
      const client = await clientPromise;
      const db = client.db('Vector');
      const waitlistCollection = db.collection('waitlist');

      // Check if email already exists
      const existingEmail = await waitlistCollection.findOne({ email });
      if (existingEmail) {
        return NextResponse.json({ message: 'Email already registered' }, { status: 200 });
      }

      // Insert the new email with a timestamp
      await waitlistCollection.insertOne({
        email,
        timestamp: new Date(),
      });

      // Get the updated count
      const count = await waitlistCollection.countDocuments();

      return NextResponse.json({ 
        message: 'Email registered successfully',
        count: count + 128 
      }, { status: 201 });
    } catch (dbError) {
      console.error('Database error:', dbError);
      throw dbError;
    }
  } catch (error) {
    console.error('Error in waitlist API:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 