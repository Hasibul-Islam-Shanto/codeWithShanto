import mongoose, { Schema, Document, Types } from "mongoose";

interface IEnrollment extends Document {
  enrollment_date: Date;
  status: string;
  completion_date: Date;
  method: string;
  course: Types.ObjectId;
  student: Types.ObjectId;
}

const enrollmentSchema = new Schema<IEnrollment>({
  enrollment_date: {
    required: true,
    type: Date,
  },
  status: {
    required: true,
    type: String,
  },
  completion_date: {
    required: true,
    type: Date,
  },
  method: {
    required: true,
    type: String,
  },
  course: { type: Schema.Types.ObjectId, ref: "Course" },
  student: { type: Schema.Types.ObjectId, ref: "User" },
});

export const Enrollment = (mongoose.models.Enrollment ||
  mongoose.model<IEnrollment>(
    "Enrollment",
    enrollmentSchema
  )) as mongoose.Model<IEnrollment>;
