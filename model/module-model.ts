import mongoose, { Schema, Document } from "mongoose";

interface IModule extends Document {
  title: string;
  description: string;
  status: string;
  slug: string;
  course: string;
  lessonIds: string[];
}

const moduleSchema = new Schema<IModule>({
  title: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  status: {
    required: true,
    type: String,
  },
  slug: {
    required: true,
    type: String,
  },
  course: {
    required: true,
    type: String,
  },
  lessonIds: {
    required: true,
    type: [String],
  },
});

export const Module = (mongoose.models.Module ||
  mongoose.model<IModule>("Module", moduleSchema)) as mongoose.Model<IModule>;
