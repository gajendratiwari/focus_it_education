import React from "react";
import ContactForm from "../components/ContactForm";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Testimonials from "../components/Testimonials";

import {
  faLaptopCode,
  faPalette,
  faNetworkWired,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";

const popularCourses = [
  {
    title: "Webpage Designing",
    icon: faLaptopCode,
    link: "/services",
  },
  {
    title: "Graphic Designing",
    icon: faPalette,
    link: "/services",
  },
  {
    title: "CISCO Routing & Switching",
    icon: faNetworkWired,
    link: "/services",
  },
  {
    title: "MS Windows Server 2016",
    icon: faServer,
    link: "/services",
  },
];

const Home = () => {
  return (
    <div className="home">
      {/* Header Section */}
      <header className="header" id="home">
        <div className="header-content">
          <h1 className="header-title">
            "Your Path to Success Starts Here: Learn, Grow, Achieve!"
          </h1>
          <p className="header-subtitle">
            Get the knowledge, tools, and support you need to thrive in the
            digital age.
          </p>
          <Button>
            <Link to="/services" className="header-button">
              Explore Courses
            </Link>
          </Button>
        </div>
      </header>

      {/* About Section */}
      <section className="about" id="about">
        <h1>
          Focus IT Education: Pioneers in IT and Professional Skills Training
        </h1>

        <p>
          <strong>Since 2019</strong>, Focus IT Education has been a trusted
          leader in computer education, offering a comprehensive range of
          courses in software development, networking, graphic design, and more.
          We are committed to providing hands-on learning experiences and
          industry-relevant skills that empower individuals and organizations to
          thrive in today’s technology-driven world.
        </p>

        <p>
          As a premier provider of IT and professional training, Focus IT
          Education delivers expert-led programs designed for both individuals
          and corporate groups. From foundational IT skills to advanced
          certifications in Cisco Networking, MS Windows Server, and more, we
          offer a diverse curriculum suited to a variety of learning needs. Our
          dynamic trainers blend classroom instruction with practical exercises
          to ensure a well-rounded and effective learning experience.
        </p>

        <p>
          Whether you’re aiming to master graphic design, web development, or
          modern workplace software, Focus IT Education equips you with the
          tools, knowledge, and support to excel. We are also proud to offer
          comprehensive post-course assistance and tailor-made training
          solutions for both students and businesses.
        </p>

        <p class="cta">
          Join Focus IT Education today and take the first step towards a
          successful career in technology and beyond.
        </p>
        <div className="features">
          <div className="feature">
            <h3>Explore Our Courses</h3>
            <p>
              Browse through our wide range of IT and professional skill
              courses. From software development to networking, find the perfect
              program to match your career goals.
            </p>
          </div>
          <div className="feature">
            <h3>Enroll and Get Started</h3>
            <p>
              Sign up for the course of your choice. Our user-friendly
              registration process makes it easy to get started on your learning
              journey immediately.
            </p>
          </div>
          <div className="feature">
            <h3>Master Skills and Achieve Certification</h3>
            <p>
              Learn through hands-on training and expert-led sessions. Gain
              practical experience and earn industry-recognized certifications
              to launch your career in the tech world.
            </p>
          </div>
        </div>
      </section>
      {/* popular courses */}
      <section className="courses">
        <div className="popular-courses">
          <h2>Most Popular Courses</h2>
          <div className="courses-grid">
            {popularCourses.map((course, index) => (
              <Link key={index} to={course.link} className="course-card">
                <FontAwesomeIcon icon={course.icon} size="3x" />
                <span className="title">{course.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default Home;
