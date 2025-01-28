export type Instructor = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  bio: string;
  socialMedia: {
    twitter: string;
    linkedin: string;
    facebook: string;
  };
  profilePicture: string;
  designation: string;
  avgRating: string;
  courses: number;
  enrollments: number;
  reviews: number;
};
