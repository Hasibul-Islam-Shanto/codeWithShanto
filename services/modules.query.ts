import { Lesson } from "@/model/lesson-model";
import { Module } from "@/model/module-model";

export const getModulesByCourseId = async (courseId: string) => {
  const modules = await Module.find({ course: courseId }).populate({
    path: "lessonIds",
    model: Lesson,
  });
  return modules;
};
