import React from "react";

const CourseModal = ({ course, onClose }) => {
  return (
    <div className="course-modal">
      <div className="modal-content">
        <img src={course.image} alt={course.title} />
        <h2>{course.title}</h2>
        <p>{course.description}</p>
        {/* Include additional details here */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CourseModal;
