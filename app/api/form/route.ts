import { NextResponse } from 'next/server';
import dbConnect from '@/app/lib/db';
import Form from '@/app/models/Form';
import { formSchema } from '@/app/lib/validation';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate the form data
    const validatedData = formSchema.parse(body);
    
    // Connect to the database
    await dbConnect();
    
    // Create a new form entry
    const form = await Form.create(validatedData);
    
    return NextResponse.json(
      { message: 'Form submitted successfully', data: form },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();
    const forms = await Form.find().sort({ createdAt: -1 });
    return NextResponse.json(forms);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch forms ' + error },
      { status: 500 }
    );
  }
} 