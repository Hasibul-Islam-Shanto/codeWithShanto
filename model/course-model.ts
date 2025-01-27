import mongoose, { Schema, Document, Types } from "mongoose";

interface ICourse extends Document {
  title: string;
  subtitle: string;
  description: string;
  thumbnail: string;
  modules: Types.ObjectId[];
  price: number;
  active: boolean;
  category: Types.ObjectId;
  instructor: Types.ObjectId;
  quizSet: Types.ObjectId;
  testimonials: Types.ObjectId[];
  learning: string[];
  createdOn: Date;
  modifiedOn: Date;
}

const courseSchema = new Schema<ICourse>({
  title: {
    required: true,
    type: String,
  },
  subtitle: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  thumbnail: {
    required: true,
    type: String,
  },
  modules: [{ type: Schema.Types.ObjectId, ref: "Module" }],
  price: {
    required: true,
    type: Number,
  },
  active: {
    required: true,
    type: Boolean,
  },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  instructor: { type: Schema.Types.ObjectId, ref: "User" },
  quizSet: { type: Schema.Types.ObjectId, ref: "Quizset" },
  testimonials: [{ type: Schema.Types.ObjectId, ref: "Testimonial" }],
  learning: {
    required: true,
    type: [String],
  },
  createdOn: {
    required: true,
    type: Date,
  },
  modifiedOn: {
    required: true,
    type: Date,
  },
});

export const Course = (mongoose.models.Course ||
  mongoose.model<ICourse>("Course", courseSchema)) as mongoose.Model<ICourse>;
