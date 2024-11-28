import React from "react";
import ContactForm from "../components/ContactForm";
import Testimonials from "../components/Testimonials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { servicesData } from "../assets/data/servicedata";

const { intro, coursesAndOfferings, process, faqs } = servicesData;

const Services = () => {
  const navigate = useNavigate();

  const handleNavigation = (title) => {
    // Navigate to the course detail page with the course title in the URL
    navigate(`/course/${encodeURIComponent(title)}`);
  };

  return (
    <div className="services">
      {/* Introduction Section */}
      <section className="services-intro">
        <h1>{intro.title}</h1>
        <p>{intro.description}</p>
      </section>

      {/* Individual Service Details */}
      <section className="service-details">
        <h2>Our Courses</h2>
        <div className="service-list">
          {coursesAndOfferings.map((service, index) => (
            <div className="service" key={index}>
              <FontAwesomeIcon icon={service.icon} className="service-icon" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Button
                type="button"
                size="small"
                onClick={() => handleNavigation(service.title)}
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Service Process */}
      <section className="service-process">
        <h2>How It Works</h2>
        <div className="steps">
          {process.map((step, index) => (
            <div className="step" key={index}>
              <FontAwesomeIcon icon={step.icon} className="step-icon" />
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="faqs">
        <h2>FAQs</h2>
        {faqs.map((faq, index) => (
          <div className="faq" key={index}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </section>
      {/* Client Testimonials */}
      <Testimonials />
      {/* Contact Form */}
      <section className="contact-form">
        <ContactForm />
      </section>
    </div>
  );
};

export default Services;
