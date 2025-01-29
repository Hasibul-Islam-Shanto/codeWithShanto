import { Testimonial } from "@/model/testimonial-model";
import { User } from "@/model/user-model";

export const getTestimonialsByCourseId = async (courseId: string) => {
  const testimonials = await Testimonial.find({ courseId })
    .populate({
      path: "user",
      model: User,
      select: ["first_name", "last_name"],
    })
    .lean();
  return testimonials;
};
