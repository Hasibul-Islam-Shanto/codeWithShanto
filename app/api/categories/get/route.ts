import connectMongo from "@/config/db-connect";
import { getCategoryLists } from "@/services/category.query";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectMongo();
    const categories = await getCategoryLists();
    return NextResponse.json({
      status: 200,
      data: categories,
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
