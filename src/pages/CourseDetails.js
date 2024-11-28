import React from "react";
import { useParams } from "react-router-dom";
import { servicesData } from "../assets/data/servicedata";

const { coursesAndOfferings } = servicesData;

const CourseDetail = () => {
  const { courseTitle } = useParams();
  const course = coursesAndOfferings.find((c) => c.title === courseTitle);

  if (!course) {
    return (
      <div className="error">
        Course not found. Please go back to the course list.
      </div>
    );
  }

  return (
    <div className="course-detail">
      <h1>{course.title}</h1>
      <p>
        <strong>Duration:</strong> {course.duration}
      </p>
      <p>{course.description}</p>
      <h2>Topics Covered:</h2>
      <ul>
        {course.topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetail;
