import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  fullName: {
    type: String,
    required: false,
  },
  className: {
    type: String,
    required: false,
  },
  schoolName: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
    unique: true, // Ensures that email addresses are unique
    lowercase: true, // Converts email to lowercase before saving
  },
  phoneNumber: {
    type: Number,
    required: false,
    },
  whatsappNumber: {
    type: Number,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


let User;

if (mongoose.models.User) {
  User = mongoose.model('User');
} else {
  User = mongoose.model('User', userSchema);
}

// module.exports = User;

module.exports = mongoose.model('User', userSchema);
