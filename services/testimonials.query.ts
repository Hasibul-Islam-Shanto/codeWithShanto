import { Testimonial } from "@/model/testimonial-model";

export const getTestimonialsByCourseId = async (courseId: string) => {
  const testimonials = await Testimonial.find({ courseId }).lean();
  return testimonials;
};
