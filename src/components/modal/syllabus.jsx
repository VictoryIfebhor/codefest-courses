export const Syllabus = ({ beginner, intermediate, expert }) => {
  return (
    <ul>
      <li>
        <h4>Beginner</h4>
        <ul>
          {beginner.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
      </li>
      <li>
        <h4>Intermediate</h4>
        <ul>
          {intermediate.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
      </li>
      <li>
        <h4>Professional</h4>
        <ul>
          {expert.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
      </li>
    </ul>
  );
};
