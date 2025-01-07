import mongoose, { Schema } from "mongoose";

// Define the schema
const userSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    required: true,
  },
  schoolName: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: false, // Ensures that email addresses are unique
    lowercase: true, // Converts email to lowercase before saving
    validate: {
      validator: (value) => {
        // Use a regular expression to validate the email format
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(value);
      },
      message: "Invalid email format",
    },
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  whatsappNumber: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Check if the model already exists to avoid recompiling the model
let User;

if (mongoose.models.User) {
  User = mongoose.model("User"); // Use existing model if it exists
} else {
  User = mongoose.model("User", userSchema); // Create a new model if it doesn't exist
}

// Export the model
export default User;
