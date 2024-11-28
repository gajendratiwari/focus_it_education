import React, { useState } from "react";

// Define the testimonials JSON as a constant
const TESTIMONIALS = [
  {
    text: "In the current scenario of technological changes, success doesn’t come to your feet without proper guidance, an environment to learn, and hard work. Right decision at the right time courts for the life. I am glad to say that Focus IT Education is a place where your expectation comes to reality. Experienced teacher, well-equipped lab, and sound environment for learning.",
    author: "Nisha Regmi",
    image: "https://via.placeholder.com/100", // Replace with the actual image URL if available
  },
  {
    text: "I am very glad to say about Focus IT Education. Being a part of Focus IT Education, I really feel glad and found myself to be a lucky person because I have got an opportunity to sharp my mind in information technology. It is one of the best learning centers that provides better knowledge to all students. It is academically rich and has provided me with excellent IT background.",
    author: "Pabin Gautam",
    image: "https://via.placeholder.com/100", // Replace with the actual image URL if available
  },
  {
    text: "I would like to thank Focus IT Education for providing me excellence in professional and technical education by adopting best practices, installing the best technology, and remaining affordable to all the sections of society and to adopt the environment of technological changes.",
    author: "Sadiksha Subedi",
    image: "https://via.placeholder.com/100", // Replace with the actual image URL if available
  },
  {
    text: "I am very fortunate and thankful to Focus IT Education who helped me to get knowledge and improve confidence in the technological environment to handle/cope with new challenges arising in the field of technology and challenges of technology in the current scenario.",
    author: "Anjita Bista",
    image: "https://via.placeholder.com/100", // Replace with the actual image URL if available
  },
  {
    text: "With the help of technology, it’s easy to study, collaborate with business environments, and to cope with the global environment. Technological knowledge is necessary, and that knowledge is provided by Focus IT Education with sound and excellent environment dealing with the current scenario-based learning, cyber security, and data management system. So, I am proud to be a member of Focus IT Education.",
    author: "Shekhar Gurung",
    image: "https://via.placeholder.com/100", // Replace with the actual image URL if available
  },
  {
    text: "Proper guidance is the key approach to desired consequences. Focus IT Education is the place to achieve a good academic background for technical education in both practical and theoretical knowledge as well. I would like to thank my wonderful teachers for their guidance and proud to be part of Focus IT Education.",
    author: "Asmita Lamichhane",
    image: "https://via.placeholder.com/100", // Replace with the actual image URL if available
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < TESTIMONIALS.length - 2) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const displayedTestimonials = TESTIMONIALS.slice(
    currentIndex,
    currentIndex + 2
  );

  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-list">
        {displayedTestimonials.map((testimonial, index) => (
          <blockquote key={index}>
            <div className="author">
              <img
                src={testimonial.image}
                alt={`${testimonial.author}`}
                className="author-image"
              />
              <cite>{testimonial.author}</cite>
            </div>
            <p>"{testimonial.text}"</p>
          </blockquote>
        ))}
      </div>

      <div className="testimonial-nav">
        <button
          className="nav-button"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          &#8592;
        </button>
        <button
          className="nav-button"
          onClick={handleNext}
          disabled={currentIndex >= TESTIMONIALS.length - 2}
        >
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
