import { Enrollment } from '@/model/enrollment-model';

export const getEnrollmentsByCourseId = async (courseId: string) => {
  const enrollments = await Enrollment.find({ course: courseId }).lean();
  return enrollments;
};
