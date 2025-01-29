import { Module } from "@/types/module";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

interface ModuleResponse {
  status: number;
  data: Module[];
}
export const fetchModulesByCourseId = async (
  courseId: string
): Promise<ModuleResponse> => {
  try {
    const response = await fetch(`${baseUrl}/api/courses/${courseId}/modules`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const res = await response.json();
    if (res.status !== 200) {
      throw new Error(res.message || "Failed to fetch modules!");
    }
    return res;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to fetch modules!"
    );
  }
};
