export type Category = {
  _id: string;
  title: string;
  description: string;
  thumbnail: string;
};

export type Categories = {
  categories: Category[];
};
