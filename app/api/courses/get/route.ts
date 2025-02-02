import { NextResponse } from 'next/server';

import connectMongo from '@/config/db-connect';
import { getCourseLists } from '@/services/course.query';

export async function GET() {
  try {
    await connectMongo();
    const courses = await getCourseLists();
    return NextResponse.json({
      status: 200,
      data: courses,
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({
        status: 500,
        message: error.message,
      });
    }

    return NextResponse.json({
      status: 500,
      message: 'Something went wrong',
    });
  }
}
