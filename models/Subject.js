import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const subjectSchema = new Schema({
    name: { type: String, required: true },
    code: { type: String, required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

export default mongoose.model("Subject", subjectSchema);

