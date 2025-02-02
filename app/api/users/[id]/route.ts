import { NextRequest, NextResponse } from 'next/server';

import connectMongo from '@/config/db-connect';
import { getCourseByUserId } from '@/services/course.query';
import { getEnrollmentsByCourseId } from '@/services/enrollments.query';
import { getTestimonialsByCourseId } from '@/services/testimonials.query';
import { getUserById } from '@/services/user.query';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    await connectMongo();
    const user = await getUserById(params?.id);

    const courses = await getCourseByUserId(params?.id);
    const enrollments = await Promise.all(
      courses.map(async course => {
        const enrollments = await getEnrollmentsByCourseId(
          course._id as string,
        );
        return enrollments;
      }),
    );
    const testimonials = await Promise.all(
      courses.map(async course => {
        const testimonials = await getTestimonialsByCourseId(
          course._id as string,
        );
        return testimonials;
      }),
    );

    const totalEnrollments = enrollments.flat().length;
    const totalTestimonials = testimonials.flat();

    const avgRating =
      totalTestimonials.reduce(function (accumulator, object) {
        return accumulator + object.rating;
      }, 0) / totalTestimonials.length;

    const userDetails = {
      ...user,
      avgRating: avgRating.toPrecision(2),
      courses: courses.length,
      enrollments: totalEnrollments,
      reviews: totalTestimonials.length,
    };

    return NextResponse.json({
      status: 200,
      data: userDetails,
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
