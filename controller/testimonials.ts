import { Testimonials } from '@/types/testimonials';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

interface TestimonialResponse {
  status: number;
  data: Testimonials[];
}
export const fetchTestimonialsByCourseId = async (
  courseId: string,
): Promise<TestimonialResponse> => {
  try {
    const response = await fetch(
      `${baseUrl}/api/courses/${courseId}/testimonials`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-cache',
      },
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const res = await response.json();
    if (res.status !== 200) {
      throw new Error(res.message || 'Failed to fetch testimonials!');
    }
    return res;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : 'Failed to fetch testimonials!',
    );
  }
};
