import { ContentSection } from "../contentSection";
import CourseSlider from "../slider";
import courseImages from "./courseImages";

const courses = [
  {
    title: "Data Analytics",
    description:
      "Data Theory, Statistics, Cleaning Techniques, Manipulation, Data Analysis Methodology, Data Analytic Tools, Visualization Techniques",
    image: courseImages.dataAnalyticsImage,
    syllabus: {
      beginner: [
        "Data Theory",
        "Statistics",
        "Cleaning Techniques",
        "Data Manipulation",
      ],
      intermediate: [
        "Data Analysis Methodologies",
        "Introduction to HR Analytics",
        "Data Analytics Tools",
      ],
      expert: [
        "Visualization Techniques & Projects",
        "Introduction to Business Analytics",
      ],
    },
    demand: "Data Analyst, Business Analyst, Data Engineer",
    benefit:
      "Modern businesses are largely dependent data. Data has been proven to be one of the most valuable asset in the business venture. HR Analytics, Business Analytics, etc resides within the domain of data analytics.",
    softwareSkills: "Technical Writing and Reporting",
  },
  {
    title: "Technical Support Engineer",
    description:
      "Introduction to Programming, PC Hardware Technician, Introduction to Information Technology, Windows Server Fundamentals, Career Success, Networking Fundamentals",
    image: courseImages.technicalSupportImage,
    syllabus: {
      beginner: [
        "Data Theory",
        "Statistics",
        "Cleaning Techniques",
        "Data Manipulation",
      ],
      intermediate: [
        "Data Analysis Methodologies",
        "Introduction to HR Analytics",
        "Data Analytics Tools",
      ],
      expert: [
        "Visualization Techniques & Projects",
        "Introduction to Business Analytics",
      ],
    },
    demand: "Data Analyst, Business Analyst, Data Engineer",
    benefit:
      "Modern businesses are largely dependent data. Data has been proven to be one of the most valuable asset in the business venture. HR Analytics, Business Analytics, etc resides within the domain of data analytics.",
    softwareSkills: "Technical Writing and Reporting",
  },
  {
    title: "Database Administration",
    description:
      "Introduction to Databases, Database Design &Development, Database Programming, Database Administration, Data Warehousing",
    image: courseImages.databaseAdministrationImage,
    syllabus: {
      beginner: [
        "Data Theory",
        "Statistics",
        "Cleaning Techniques",
        "Data Manipulation",
      ],
      intermediate: [
        "Data Analysis Methodologies",
        "Introduction to HR Analytics",
        "Data Analytics Tools",
      ],
      expert: [
        "Visualization Techniques & Projects",
        "Introduction to Business Analytics",
      ],
    },
    demand: "Data Analyst, Business Analyst, Data Engineer",
    benefit:
      "Modern businesses are largely dependent data. Data has been proven to be one of the most valuable asset in the business venture. HR Analytics, Business Analytics, etc resides within the domain of data analytics.",
    softwareSkills: "Technical Writing and Reporting",
  },
  {
    title: "Web and Computer Programming",
    description:
      "Programming Building Blocks, Programming with Functions, JavaScript Language, Programming with Classes, Career Development, Web Frontend Development I, Web Fundamentals",
    image: courseImages.webProgrammingImage,
    syllabus: {
      beginner: [
        "Data Theory",
        "Statistics",
        "Cleaning Techniques",
        "Data Manipulation",
      ],
      intermediate: [
        "Data Analysis Methodologies",
        "Introduction to HR Analytics",
        "Data Analytics Tools",
      ],
      expert: [
        "Visualization Techniques & Projects",
        "Introduction to Business Analytics",
      ],
    },
    demand: "Data Analyst, Business Analyst, Data Engineer",
    benefit:
      "Modern businesses are largely dependent data. Data has been proven to be one of the most valuable asset in the business venture. HR Analytics, Business Analytics, etc resides within the domain of data analytics.",
    softwareSkills: "Technical Writing and Reporting",
  },
  {
    title: "System Administration",
    description:
      "Networking, Network Design I, Systems Security I, Operating Systems I, Operating Systems II",
    image: courseImages.systemAdministrationImage,
    syllabus: {
      beginner: [
        "Data Theory",
        "Statistics",
        "Cleaning Techniques",
        "Data Manipulation",
      ],
      intermediate: [
        "Data Analysis Methodologies",
        "Introduction to HR Analytics",
        "Data Analytics Tools",
      ],
      expert: [
        "Visualization Techniques & Projects",
        "Introduction to Business Analytics",
      ],
    },
    demand: "Data Analyst, Business Analyst, Data Engineer",
    benefit:
      "Modern businesses are largely dependent data. Data has been proven to be one of the most valuable asset in the business venture. HR Analytics, Business Analytics, etc resides within the domain of data analytics.",
    softwareSkills: "Technical Writing and Reporting",
  },
  {
    title: "Cyber Security",
    description:
      "Introduction to Digital Security, Secured Enterprise Architecture (SEA), Risk and Mitigation, Threats Attacks & Vulnerabilities, Cyber Warfare",
    image: courseImages.cyberSecurityImage,
    syllabus: {
      beginner: [
        "Data Theory",
        "Statistics",
        "Cleaning Techniques",
        "Data Manipulation",
      ],
      intermediate: [
        "Data Analysis Methodologies",
        "Introduction to HR Analytics",
        "Data Analytics Tools",
      ],
      expert: [
        "Visualization Techniques & Projects",
        "Introduction to Business Analytics",
      ],
    },
    demand: "Data Analyst, Business Analyst, Data Engineer",
    benefit:
      "Modern businesses are largely dependent data. Data has been proven to be one of the most valuable asset in the business venture. HR Analytics, Business Analytics, etc resides within the domain of data analytics.",
    softwareSkills: "Technical Writing and Reporting",
  },
];

export const Courses = () => {
  return (
    <ContentSection>
      <CourseSlider courses={courses} />
    </ContentSection>
  );
};
