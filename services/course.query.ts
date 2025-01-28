import { Category } from "@/model/category-model";
import { Course } from "@/model/course-model";
// import { Module } from "@/model/module-model";
import { User } from "@/model/user-model";

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

export const getCourseById = async (id: string) => {
  const course = await Course.findById(id)
    .populate({
      path: "category",
      model: Category,
    })
    .populate({
      path: "instructor",
      model: User,
      select: ["firstName", "lastName"],
    })
    .lean();

  return course;
};

export const getCourseByUserId = async (userId: string) => {
  const course = await Course.find({ instructor: userId });
  return course;
};
