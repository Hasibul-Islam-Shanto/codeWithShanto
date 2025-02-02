import mongoose, { Schema, Document } from 'mongoose';

interface ISocialMedia {
  [key: string]: string;
}

interface IUser extends Document {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  phone: string;
  role: string;
  bio?: string;
  socialMedia?: ISocialMedia;
  profilePicture?: string;
  designation?: string;
}

const userSchema = new Schema<IUser>({
  firstName: {
    required: true,
    type: String,
  },
  lastName: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  phone: {
    required: true,
    type: String,
  },
  role: {
    required: true,
    type: String,
  },
  bio: {
    required: false,
    type: String,
  },
  socialMedia: {
    required: false,
    type: Object,
  },
  profilePicture: {
    required: false,
    type: String,
  },
  designation: {
    required: false,
    type: String,
  },
});

export const User = (mongoose.models.User ||
  mongoose.model<IUser>('User', userSchema)) as mongoose.Model<IUser>;
