import React, { useState } from "react";
import { CourseCard } from "./courses/course";
import CourseModal from "./modal";

const CourseSlider = ({ courses }) => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCardClick = (course) => {
    setSelectedCourse(course);
  };

  const handleModalClose = () => {
    setSelectedCourse(null);
  };

  return (
    <div className="course-slider">
      {courses.map((course, index) => (
        <CourseCard key={index} course={course} onClick={handleCardClick} />
      ))}
      {selectedCourse && (
        <CourseModal course={selectedCourse} onClose={handleModalClose} />
      )}
    </div>
  );
};

export default CourseSlider;
