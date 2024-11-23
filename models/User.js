import mongoose from "mongoose";
import bcrypt from "bcryptjs"; // Default import
const { genSalt, hash } = bcrypt;

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["Admin", "Teacher", "Student"], required: true },
});

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await genSalt(10);
  this.password = await hash(this.password, salt);
  next();
});

export default mongoose.model("User", userSchema);



// import { Schema, model } from "mongoose";
// import { genSalt, hash } from "bcryptjs";

// const userSchema = new Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     role: { type: String, enum: ["Admin", "Teacher", "Student"], required: true },
// });

// // Hash password before saving
// userSchema.pre("save", async function (next) {
//     if (!this.isModified("password")) return next();
//     const salt = await genSalt(10);
//     this.password = await hash(this.password, salt);
//     next();
// });

// export default model("User", userSchema);