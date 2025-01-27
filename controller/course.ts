import { Courses } from "@/types/course";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

interface CoursesResponse {
  status: number;
  data: Courses[];
}
export const fetchCourseLists = async (): Promise<CoursesResponse> => {
  try {
    const response = await fetch(`${baseUrl}/api/courses/get`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const res = await response.json();
    if (res.status !== 200) {
      throw new Error(res.message || "Failed to fetch hotels!");
    }

    return res;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to fetch hotels!"
    );
  }
};
