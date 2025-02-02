import { User } from '@/model/user-model';

export const getUserById = async (id: string) => {
  const user = await User.findById({ _id: id }).select('-password').lean();
  return user;
};
