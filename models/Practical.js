import mongoose from "mongoose";

const practicalSchema = new mongoose.Schema({
  subjectId: { type: mongoose.Schema.Types.ObjectId, ref: "Subject", required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  enrolledStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

export default mongoose.model("Practical", practicalSchema);









// import { Schema, model } from "mongoose";

// const practicalSchema = new Schema({
//     subjectId: { type: Schema.Types.ObjectId, ref: "Subject", required: true },
//     title: { type: String, required: true },
//     description: { type: String, required: true },
//     createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
//     enrolledStudents: [{ type: Schema.Types.ObjectId, ref: "User" }],
// });

// export default model("Practical", practicalSchema);
