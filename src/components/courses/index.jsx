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
        "Introduction to Programming",
        "Introduction to Information Technology",
      ],
      intermediate: ["Networking Fundamentals", "PC Hardware Technician"],
      expert: ["Operating Systems", "Windows Server Fundamentals"],
    },
    demand:
      "IT support positions in small and large corporations, IT support for business process outsourcing companies",
    benefit:
      "The technical support engineer learns hands-on skills needed for successful software installations and maintaining computer hardware. Additional projects will increase your experience and expertise such as troubleshooting, active directory, and understanding operating systems.",
    softwareSkills: "Word Processing, Career Success",
  },
  {
    title: "Database Administration",
    description:
      "Introduction to Databases, Database Design &Development, Database Programming, Database Administration, Data Warehousing",
    image: courseImages.databaseAdministrationImage,
    syllabus: {
      beginner: ["Introduction to Databases", "Database Design & Development"],
      intermediate: [
        "Database Programming",
        "Database Administration 1 (Use Case)",
      ],
      expert: [
        "Database Administration 2 (Oracle)",
        "Data Warehousing",
        "Data Transaction and Mining Techniques.",
      ],
    },
    demand:
      "General or database programmer, Database designer or developer, Data warehouse",
    benefit:
      "Studying in this field will prepare you to develop and maintain database programs, which are central to business information systems. You will work with systems that provide file creation as well as data entry and query functions.",
    softwareSkills: "Entreprenuership Development",
  },
  {
    title: "Web and Computer Programming",
    description:
      "Programming Building Blocks, Programming with Functions, JavaScript Language, Programming with Classes, Career Development, Web Frontend Development I, Web Fundamentals",
    image: courseImages.webProgrammingImage,
    syllabus: {
      beginner: [
        "Web Fundamentals",
        "Programming with Functions, Web",
        "Introduction to Python",
      ],
      intermediate: [
        "Front End Development",
        "JavaScript",
        "Version Control Mechanics",
      ],
      expert: ["Backend Development", "Database System", "APIs Development"],
    },
    demand:
      "Write programs to accomplish meaningful tasks in a variety of domains. Design websites that are visually appealing and effective. Develop dynamic webpages that follow industry standards and best practices. Learn and apply new technology and techniques in future programming.",
    benefit:
      "Training in web and computer programming prepares you for the constantly changing field of web and software and development by helping you gain skills in developing software, designing user interfaces, and a variety of programming languages.",
    softwareSkills: "Career Development, Graphics Design",
  },
  {
    title: "System Administration",
    description:
      "Networking, Network Design I, Systems Security I, Operating Systems I, Operating Systems II",
    image: courseImages.systemAdministrationImage,
    syllabus: {
      beginner: [
        "Hardware Troubleshooting",
        "Introduction to Compiler Construction",
        "Networking",
      ],
      intermediate: [
        "Network Design",
        "Small Networks",
        "Routings and Network Protocol",
      ],
      expert: [
        "System Security",
        "Operating System I & II",
        "Cloud Service Engineering",
      ],
    },
    demand:
      "Desktop/IT Support, Windows system administrator, Linux administrator, Network support, Network engineer",
    benefit:
      "System administration is closely related to computer science, including learning skills in scripting, servers, and network administration. Specific softwares and systems that are in high demand are Amazon web services, Azure, Linux, Powershell, and others.",
    softwareSkills: "Entreprenuership Development",
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
