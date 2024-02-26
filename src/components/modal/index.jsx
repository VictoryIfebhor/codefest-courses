import { Syllabus } from "./syllabus";

export const CourseModal = ({ course, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <button className="close-button" onClick={onClose}>
            X
          </button>
        </div>
        <div className="modal-body">
          <div className="modal-image-container">
            <img
              src={course.image}
              alt={course.title}
              className="course-image"
            />
          </div>
          <div className="content-container">
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <h3>Syllabus</h3>
            <Syllabus
              beginner={course.syllabus.beginner}
              expert={course.syllabus.expert}
              intermediate={course.syllabus.intermediate}
            />
            <p>
              <strong>Demand:</strong> {course.demand}
            </p>
            <p>
              <strong>Benefit:</strong> {course.benefit}
            </p>
            <h3>Software Skills</h3>
            <ul>
              {course.softwareSkills.split(",").map((skill, index) => (
                <li key={index}>{skill.trim()}</li>
              ))}
            </ul>
            <a
              href="https://wa.me/+2348033936023"
              target="_blank"
              className="enroll-button"
            >
              Enroll
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
