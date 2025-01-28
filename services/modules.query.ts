import { Lesson } from "@/model/lesson-model";
import { Module } from "@/model/module-model";

export const getModulesByCourseId = async (courseId: string) => {
  console.log(courseId);
  const modules = await Module.find({ course: courseId }).populate({
    path: "lessonIds",
    model: Lesson,
  });
  console.log(modules);
  return modules;
};
