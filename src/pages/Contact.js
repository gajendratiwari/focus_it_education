import React from "react";
import ContactForm from "../components/ContactForm";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We’re here to help and answer any questions you might have. We look
          forward to hearing from you!
        </p>
      </header>

      <div className="contact-content">
        {/* Contact Form */}
        <ContactForm />

        {/* Contact Details */}
        <div className="contact-details">
          <h3>Our Details</h3>
          <ul>
            <li>
              <strong>Address:</strong> Shishuwa Road, Lekhnath Pokhara, Nepal
              33700
            </li>
            <li>
              <strong>Email:</strong> focusit.edu@gmail.com
            </li>
            <li>
              <strong>Phone:</strong> +977 985-6061728
            </li>
            <li>
              <strong>Business Hours:</strong>
              <ul>
                <li>
                  <strong>Monday:</strong> 6:00 AM - 6:00 PM
                </li>
                <li>
                  <strong>Tuesday:</strong> 6:00 AM - 6:00 PM
                </li>
                <li>
                  <strong>Wednesday:</strong> 6:00 AM - 6:00 PM
                </li>
                <li>
                  <strong>Thursday:</strong> 6:00 AM - 6:00 PM
                </li>
                <li>
                  <strong>Friday:</strong> 6:00 AM - 6:00 PM
                </li>
                <li>
                  <strong>Saturday:</strong> 10:00 AM - 5:00 PM
                </li>
                <li>
                  <strong>Sunday:</strong> 6:00 AM - 6:00 PM
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14236.51424834733!2d84.0690217!3d28.163718!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995bd67164abaa3%3A0x6dade0b71c5dee2d!2sFocus%20IT%20Education!5e0!3m2!1sen!2snp!4v1697475639105!5m2!1sen!2snp"
          allowFullScreen=""
          loading="lazy"
          title="Location Map"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
