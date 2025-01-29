import { Lesson } from "./lesson";

export type Module = {
  _id: string;
  title: string;
  description: string;
  status: string;
  slug: string;
  course: string;
  lessonIds: Lesson[];
  duration: number;
};
