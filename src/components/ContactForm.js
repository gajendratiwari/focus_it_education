import React, { useState } from "react";
import Button from "../components/Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", // Add phone number field
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Validate fields
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required.";
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Enter a valid email address.";
    }
    if (!formData.phone.trim()) errors.phone = "Phone number is required.";
    else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Enter a valid 10-digit phone number.";
    }
    if (!formData.message.trim()) errors.message = "Message is required.";
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setFormStatus("Please correct the errors and try again.");
      return;
    }

    setErrors({});
    setLoading(true);
    setFormStatus("Submitting...");

    try {
      const response = await fetch("/.netlify/functions/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus(
          "Thank you for your message. We'll get back to you soon!"
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        const error = await response.json();
        setFormStatus(`Error: ${error.message || "Something went wrong."}`);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setFormStatus(
        "An error occurred while submitting the form. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-form">
      <p className="contact-form-message">
        We'd love to hear from you! Please fill out the form below and we'll get
        back to you as soon as possible.
      </p>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            type="text"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}

          <Button
            type="submit"
            size="medium"
            variant="primary"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
        {formStatus && <p className="form-status">{formStatus}</p>}
      </div>
    </div>
  );
};

export default ContactForm;
