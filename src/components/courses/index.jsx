import { ContentSection } from "../contentSection";
import CourseSlider from "../slider";

const courses = [
  {
    title: "Data Analytics",
    description:
      "Data Theory, Statistics, Cleaning Techniques, Manipulation, Data Analysis Methodology, Data Analytic Tools, Visualization Techniques",
    image:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/data_analyticstrendsmin.jpg",
  },
  {
    title: "Technical Support Engineer",
    description:
      "Introduction to Programming, PC Hardware Technician, Introduction to Information Technology, Windows Server Fundamentals, Career Success, Networking Fundamentals",
    image:
      "https://assets-global.website-files.com/5b6df8bb681f89c158b48f6b/5d6f876de97e5975b5878cd4_technical-support-engineer.jpg",
  },
  {
    title: "Database Administration",
    description:
      "Introduction to Databases, Database Design &Development, Database Programming, Database Administration, Data Warehousing",
    image: "https://s7280.pcdn.co/wp-content/uploads/2016/06/database-blue.png",
  },
  {
    title: "Web and Computer Programming",
    description:
      "Programming Building Blocks, Programming with Functions, JavaScript Language, Programming with Classes, Career Development, Web Frontend Development I, Web Fundamentals",
    image:
      "https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2021_12_Programming-vs-Web-Development.jpg",
  },
  {
    title: "System Administration",
    description:
      "Networking, Network Design I, Systems Security I, Operating Systems I, Operating Systems II",
    image:
      "https://www.betterteam.com/images/unix-system-administrator-job-description-6010x4012-2020128.jpeg?crop=21:16,smart&width=420&dpr=2&format=pjpg&auto=webp&quality=85",
  },
  {
    title: "Cyber Security",
    description:
      "Introduction to Digital Security, Secured Enterprise Architecture (SEA), Risk and Mitigation, Threats Attacks & Vulnerabilities, Cyber Warfare",
    image:
      "https://st4.depositphotos.com/22162388/23954/i/450/depositphotos_239549088-stock-photo-cyber-security-data-protection-information.jpg",
  },
];

export const Courses = () => {
  return (
    <ContentSection>
      <CourseSlider courses={courses} />
    </ContentSection>
  );
};
