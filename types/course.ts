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

export type Course = {
  _id: string;
  title: string;
  description: string;
  thumbnail: string;
  modules: string[];
  price: number;
  active: boolean;
  category: Category;
  instructor: {
    _id: string;
    firstName: string;
    lastName: string;
  };
  testimonials: string[];
  quizSet: string;
  subtitle: string;
  learning: string[];
  createdOn: Date;
  modifiedOn: Date;
};
