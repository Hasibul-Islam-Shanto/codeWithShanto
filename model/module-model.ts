import mongoose, { Schema, Document, Types } from 'mongoose';

interface IModule extends Document {
  title: string;
  description: string;
  status: string;
  slug: string;
  course: Types.ObjectId;
  lessonIds: [Types.ObjectId];
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
  course: { type: Schema.Types.ObjectId, ref: 'Course' },
  lessonIds: [
    {
      required: true,
      type: Schema.Types.ObjectId,
      ref: 'Lesson',
    },
  ],
});

export const Module = (mongoose.models.Module ||
  mongoose.model<IModule>('Module', moduleSchema)) as mongoose.Model<IModule>;
