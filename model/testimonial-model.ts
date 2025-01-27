import mongoose, { Schema, Document, Types } from "mongoose";

interface ITestimonial extends Document {
  content: string;
  user: Types.ObjectId;
  courseId: Types.ObjectId;
  rating: number;
}

const testimonialSchema = new Schema<ITestimonial>({
  content: {
    required: true,
    type: String,
  },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  courseId: { type: Schema.Types.ObjectId, ref: "Course" },
  rating: {
    required: true,
    type: Number,
  },
});

export const Testimonial = (mongoose.models.Testimonial ||
  mongoose.model<ITestimonial>(
    "Testimonial",
    testimonialSchema
  )) as mongoose.Model<ITestimonial>;
