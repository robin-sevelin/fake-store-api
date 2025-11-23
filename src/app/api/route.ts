import { NextRequest, NextResponse } from 'next/server';

export const GET = async () => {
  return NextResponse.json({ message: 'Hello' });
};

export const POST = async (req: NextRequest) => {
  const response = await req.json();

  return NextResponse.json(response);
};
