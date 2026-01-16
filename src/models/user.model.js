// Import mongoose library for MongoDB interaction
import mongoose from 'mongoose';

// Create a new schema for the User model with fields: name (required string), email (required string), age (number)
const userSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  fName: { type: String, required: true },
  lName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: Number,
});

// Export the User model based on the userSchema
export const User = mongoose.model('User', userSchema);
