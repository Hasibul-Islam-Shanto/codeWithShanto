import { Instructor } from '@/types/user';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

interface UserResponse {
  status: number;
  data: Instructor;
}
export const fetchUserById = async (id: string): Promise<UserResponse> => {
  try {
    const response = await fetch(`${baseUrl}/api/users/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-cache',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const res = await response.json();

    if (res.status !== 200) {
      throw new Error(res.message || 'Failed to fetch users!');
    }
    return res;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : 'Failed to fetch users!',
    );
  }
};
