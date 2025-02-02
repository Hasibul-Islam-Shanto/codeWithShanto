import { Category } from '@/types/category';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

interface CategoriesResponse {
  status: number;
  data: Category[];
}
export const fetchCategoryLists = async (): Promise<CategoriesResponse> => {
  try {
    const response = await fetch(`${baseUrl}/api/categories/get`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const res = await response.json();
    if (res.status !== 200) {
      throw new Error(res.message || 'Failed to fetch hotels!');
    }

    return res;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : 'Failed to fetch hotels!',
    );
  }
};
