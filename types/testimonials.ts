export type Testimonials = {
  _id: string;
  content: string;
  rating: number;
  courseId: string;
  user: {
    _id: string;
    first_name: string;
    last_name: string;
  };
};
