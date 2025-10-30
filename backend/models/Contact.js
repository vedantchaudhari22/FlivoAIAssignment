import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
      minlength: [2, "First name must be at least 2 characters long"],
      maxlength: [50, "First name cannot exceed 50 characters"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
      minlength: [2, "Last name must be at least 2 characters long"],
      maxlength: [50, "Last name cannot exceed 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
    },
    phone: {
      type: String,
      trim: true,
      minlength: [7, "Phone number must be at least 7 digits long"],
      maxlength: [15, "Phone number cannot exceed 15 digits"],
      match: [/^\+?[0-9\s-]{7,15}$/, "Please provide a valid phone number"],
    },
    serviceType: {
      type: String,
      enum: [
        "Web Application Security Audits",
        "PCI DSS Gap Assessments",
        "Cloud Security Assessments",
        "Security Awareness Training",
      ],
      required: [true, "Please select a service type"],
    },
    message: {
      type: String,
      trim: true,
      maxlength: [1000, "Message should not exceed 1000 characters"],
    },
    acceptTerms: {
      type: Boolean,
      required: [true, "You must accept the terms"],
      validate: {
        validator: function (v) {
          return v === true;
        },
        message: "You must accept the terms before submitting",
      },
    },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
