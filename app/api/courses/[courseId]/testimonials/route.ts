import { NextRequest, NextResponse } from 'next/server';

import connectMongo from '@/config/db-connect';
import { getTestimonialsByCourseId } from '@/services/testimonials.query';

export async function GET(
  request: NextRequest,
  { params }: { params: { courseId: string } },
) {
  try {
    await connectMongo();
    const testimonials = await getTestimonialsByCourseId(params.courseId);
    return NextResponse.json({
      status: 200,
      data: testimonials,
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
      data: 'Something went wrong!',
    });
  }
}
