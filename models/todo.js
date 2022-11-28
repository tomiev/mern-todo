import mongoose from "mongoose";
const { Schema } = mongoose;

const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: String,
  dueDate: { type: Date, default: Date.now }
});
