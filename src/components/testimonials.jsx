import React, { useState } from "react";
import { ContentSection } from "./contentSection";

const Testimonials = () => {
  // Define your testimonial data
  const testimonialData = [
    {
      id: 1,
      name: "Udeh Evander Chika",
      occupation: "Student",
      comment:
        "I Thank Codefest for this wonderful program. They really helped me kickstart my coding journey by giving me the strong foundation that I needed to excel. I couldn't have asked for a better experience. Thank you.",
      url: "https://codefestuniversity.online/assets/people01-d3d1b087.png",
    },
    {
      id: 2,
      name: "Alonu Toluwani Deborah",
      occupation: "Student",
      comment:
        "I owe the initiators of this program a big 'THANK YOU'. The program has impacted on my life in no small ways. when i thought of web design, I never meant it to be as intense as it turned out to be but with all the helpful activities and exercises that the course provided I was able to scale through perfectly. Thanks and Thanks again",
      url: "https://codefestuniversity.online/assets/people02-aec8cf4b.png",
    },
    {
      id: 3,
      name: "Nwankwo Christian Keleolisa",
      occupation: "Student",
      comment:
        "I'm grateful to Codefest Academy and to all initiators of this program for giving me a chance to be a web developer. Web design is the dream i wished for it to come true and and Codefest made me achieve this dreams that i have passion for, May God continue to bless you all for this good work.",
      url: "https://codefestuniversity.online/assets/people03-946f1a16.png",
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
              <img src={testimonial.url} alt={testimonial.name} />
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
