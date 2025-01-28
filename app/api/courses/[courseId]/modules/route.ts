import connectMongo from "@/config/db-connect";
import { getModulesByCourseId } from "@/services/modules.query";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { courseId: string } }
) {
  try {
    console.log(params);
    await connectMongo();
    const modules = await getModulesByCourseId(params.courseId);
    return NextResponse.json({
      status: 200,
      data: modules,
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
      data: "Something went wrong!",
    });
  }
}
