import { Category } from "./category";

export type Courses = {
  _id: string;
  title: string;
  thumbnail: string;
  modules: string[];
  price: number;
  category: Category;
  instructor: string;
  subtitle: string;
};
