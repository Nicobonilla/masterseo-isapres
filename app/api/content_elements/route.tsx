import { NextResponse } from 'next/server';
import {  PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({datasourceUrl: process.env.DATABASE_URL})

export async function GET() {
  // const prisma = new PrismaClient();
  try {
    const contents = await prisma.content_elements.findMany({});
    // Assuming you want to send back the articles as JSON with a 200 OK status
    return new NextResponse(JSON.stringify(contents), {
      status: 200, // HTTP status code
      headers: {
        'Content-Type': 'application/json', // Ensuring the client knows to expect JSON
      },
    });
  } catch (error) {
    console.error(error);
    // Handling any errors with a 500 Internal Server Error response
    return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
