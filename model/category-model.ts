import mongoose, { Schema, Document } from 'mongoose';

interface ICategory extends Document {
  title: string;
  description?: string;
  thumbnail: string;
}

const categorySchema = new Schema<ICategory>({
  title: {
    required: true,
    type: String,
  },
  description: {
    required: false,
    type: String,
  },
  thumbnail: {
    required: true,
    type: String,
  },
});

export const Category =
  mongoose.models.Category ||
  mongoose.model<ICategory>('Category', categorySchema);
