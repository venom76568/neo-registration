import mongoose, { Schema } from "mongoose";

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
  email: {
    type: String,
    required: true,
    unique: true, // Ensures that email addresses are unique
    lowercase: true, // Converts email to lowercase before saving
    validate: {
      validator: (value) => {
        // Use a regular expression to validate the email format
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(value);
      },
      message: 'Invalid email format',
    },
  },
  phoneNumber: {
    type: Number,
    required: true,
    // validate: {
    //   validator: (value) => {
    //     // Use a regular expression to validate a 10-digit mobile number
    //     const mobileRegex = /^\d{10}$/;
    //     return mobileRegex.test(value.toString());
    //   },
    //   message: 'Invalid mobile number format (10 digits)',
    // },
  },
  whatsappNumber: {
    type: Number,
    required: true,
    // validate: {
    //   validator: (value) => {
    //     // Use a regular expression to validate a 10-digit mobile number
    //     const mobileRegex = /^\d{10}$/;
    //     return mobileRegex.test(value.toString());
    //   },
    //   message: 'Invalid WhatsApp number format (10 digits)',
    // },
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
