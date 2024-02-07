import React, { useState } from "react";
import { ContentSection } from "./contentSection";

const Testimonials = () => {
  // Define your testimonial data
  const testimonialData = [
    {
      id: 1,
      name: "John Doe",
      occupation: "Web Developer",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    },
    {
      id: 2,
      name: "Jane Smith",
      occupation: "Graphic Designer",
      comment:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      name: "Michael Johnson",
      occupation: "Marketing Manager",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptate natus velit. Neque quaerat dolores quidem a qui doloremque nemo nostrum dicta temporibus. Sed soluta possimus quos harum alias in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, totam. Officia ut impedit ipsa sequi dolores blanditiis quam itaque, aperiam doloribus ducimus quod. Incidunt dolore iste tenetur, quasi quibusdam eos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusamus illum aut hic fugiat doloremque magni et dolores veniam ullam sapiente ipsum voluptate aspernatur assumenda, officia quas obcaecati maiores perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi magnam veritatis at fugiat blanditiis suscipit natus veniam aspernatur alias quibusdam accusantium, culpa, corporis ab eveniet necessitatibus atque odit ad qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, a. A reprehenderit odit excepturi officia cum optio eos odio. Nostrum non expedita porro harum eius similique natus quisquam, amet culpa?. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  // State to track expanded testimonials
  const [expandedTestimonials, setExpandedTestimonials] = useState([]);

  // Function to toggle expand/collapse of a testimonial
  const toggleExpanded = (testimonialId) => {
    if (expandedTestimonials.includes(testimonialId)) {
      setExpandedTestimonials(
        expandedTestimonials.filter((id) => id !== testimonialId)
      );
    } else {
      setExpandedTestimonials([...expandedTestimonials, testimonialId]);
    }
  };

  // Function to check if a testimonial is expanded
  const isExpanded = (testimonialId) => {
    return expandedTestimonials.includes(testimonialId);
  };

  return (
    <ContentSection>
      <h1 className="center">Testimonials</h1>
      <div className="testimonials">
        {testimonialData.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <div className="testimonial-header">
              <img
                src={`https://randomuser.me/api/portraits/men/${testimonial.id}.jpg`}
                alt={testimonial.name}
              />
              <div className="testimonial-info">
                <h3>{testimonial.name}</h3>
                <p>{testimonial.occupation}</p>
              </div>
            </div>
            <div className="testimonial-body">
              <p>
                {isExpanded(testimonial.id)
                  ? testimonial.comment
                  : `${testimonial.comment.slice(0, 100)}...`}
              </p>
              <span
                className="see-more"
                onClick={() => toggleExpanded(testimonial.id)}
              >
                {isExpanded(testimonial.id) ? "See less" : "See more"}
              </span>
              {/* {expandedTestimonials.includes(testimonial.id) ? (
                <p>{testimonial.comment}</p>
              ) : (
                <p>
                  {testimonial.comment.slice(0, 100)}...{" "}
                  <span
                    className="see-more"
                    onClick={() => toggleExpanded(testimonial.id)}
                  >
                    See more
                  </span>
                </p>
              )} */}
            </div>
          </div>
        ))}
      </div>
    </ContentSection>
  );
};

export default Testimonials;
