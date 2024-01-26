import { CourseDiv } from "./courseDiv";
import { CourseImage } from "./courseImage";

export const Card = () => {
  return (
    <div className="course-card">
      <CourseImage />
      <CourseDiv />
    </div>
  );
};
