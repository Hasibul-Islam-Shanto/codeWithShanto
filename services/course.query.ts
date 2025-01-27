import { Category } from "@/model/category-model";
import { Course } from "@/model/course-model";

export const getCourseLists = async () => {
  const courses = await Course.find({})
    .select([
      "title",
      "subtitle",
      "thumbnail",
      "modules",
      "price",
      "category",
      "instructor",
    ])
    .populate({
      path: "category",
      model: Category,
    });
  return courses;
};
