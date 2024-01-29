export const CourseCard = ({ course, onClick }) => {
  return (
    <div className="course-card" onClick={() => onClick(course)}>
      <img src={course.image} alt="alt" />
      <div className="card-content">
        <h3>{course.title}</h3>
        <p>{course.description}</p>
      </div>
    </div>
  );
};
