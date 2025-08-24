import mongoose, { Schema } from "mongoose";

const adminSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 100,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 8,
  },
  image: {
    type: String,
    trim: true,
    required: true,
  },
  role: {
    type: String,
    // enum: ["admin", "vendor", "user"],
    default: "admin",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("admins", adminSchema)