import connectMongo from "@/config/db-connect";
import { getCourseById } from "@/services/course.query";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { courseId: string } }
) {
  try {
    await connectMongo();
    const course = await getCourseById(params.courseId);
    return NextResponse.json({
      status: 200,
      data: course,
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
      message: "Something went wrong",
    });
  }
}
