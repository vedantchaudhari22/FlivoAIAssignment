import Contact from "../models/Contact.js";

export const submitContactForm = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      serviceType,
      message,
      acceptTerms,
    } = req.body;

    if (!firstName || !lastName || !email || !phone || !serviceType || !acceptTerms) {
      return res.status(400).json({
        success: false,
        message: "Please Fill All Required Fields And Accept The Terms.",
      });
    }

    const newContact = new Contact({
      firstName,
      lastName,
      email,
      phone,
      serviceType,
      message,
      acceptTerms,
    });

    await newContact.save();

    res.status(201).json({
      success: true,
      message: "Your message has been sent successfully!",
      data: newContact,
    });
  } catch (error) {
    console.error("Contact form submission error:", error.message);
    res.status(500).json({
      success: false,
      message: "Please try again later or check your data properly.",
    });
  }
};
