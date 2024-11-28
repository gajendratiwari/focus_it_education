import React from "react";
import ContactForm from "../components/ContactForm";
import photo1 from "../assets/images/about1.JPG";
import photo2 from "../assets/images/about2.JPG";
import Testimonials from "../components/Testimonials";

const aboutPageData = {
  topic: {
    title: "About Us - Focus IT Education",
  },
  content: {
    left: [
      {
        type: "text",
        heading: "Empowering Learning with Focus IT Education",
        text: "Since 2019, Focus IT Education has been a trusted provider of comprehensive IT and professional training. Specializing in software development, networking, graphic design, and more, we are dedicated to empowering individuals and organizations with the skills needed to excel in today’s fast-evolving tech landscape.",
      },
      {
        type: "image",
        heading: "Tailored Training for Every Learner",
        text: "At Focus IT Education, we cater to a wide range of learners, from beginners to seasoned professionals. Our hands-on approach ensures that participants acquire practical, real-world skills they can apply immediately. Whether you're an individual looking to advance your career or a business seeking corporate training solutions, our expert instructors deliver programs that fit your needs.",
        image: photo1,
      },
      {
        type: "text",
        heading: "Why Choose Focus IT Education?",
        text: "Our trainers bring years of industry experience, ensuring that lessons are not only theoretical but also highly practical and relevant to the real world. We offer a diverse range of courses, from basic computer skills to advanced certifications in networking, server management, and web development. Our unmatched post-course support ensures students are supported long after training concludes.",
      },
      {
        type: "image",
        heading: "Our Courses at a Glance",
        text: "From beginner-level courses like the Computer Professional Course to advanced programs such as CISCO Routing & Switching and MS Windows Server 2016, Focus IT Education provides a diverse range of learning options. Additionally, we offer specialized training in graphic design, webpage designing, crash courses, and accounting packages.",
        image: photo2,
      },
    ],
    right: [
      {
        title: "Benefits of Focus IT Education",
        list: [
          "Expert instructors with industry experience",
          "Comprehensive and diverse curriculum",
          "Flexible learning options for individuals and businesses",
          "Unmatched post-course support for students",
        ],
      },
      {
        title: "Specialized Courses Offered",
        list: [
          "Graphic Designing",
          "Webpage Designing",
          "CISCO Routing & Switching",
          "Accounting Package with Modern Workplace Tools",
        ],
      },
      {
        title: "Our Learning Approach",
        list: [
          "Practical, hands-on training",
          "Custom training for corporate teams",
          "Personalized tuition for school and college students",
          "Convenient classroom and on-site workshops",
        ],
      },
    ],
  },
};

const AboutPage = () => {
  const { topic, content } = aboutPageData;

  return (
    <div className="about-page">
      {/* Topic Section */}
      <div className="about-page__topic">
        <h1>{topic.title}</h1>
      </div>

      <div className="about-page__content">
        {/* Left Section */}
        <div className="about-page__left">
          <div className="about-page__container">
            {content.left.map((item, index) => (
              <div
                className={`about-page__content-item ${
                  item.type === "image" ? "with-image" : ""
                }`}
                key={index}
              >
                <h2>{item.heading}</h2>
                {item.type === "image" ? (
                  <div className="about-page__text-image">
                    <p>{item.text}</p>
                    <img src={item.image} alt={item.heading} />
                  </div>
                ) : (
                  <p>{item.text}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="about-page__right">
          {content.right.map((box, index) => (
            <div className="about-page__box" key={index}>
              <h2>{box.title}</h2>
              <ul>
                {box.list.map((listItem, idx) => (
                  <li key={idx}>{listItem}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default AboutPage;
