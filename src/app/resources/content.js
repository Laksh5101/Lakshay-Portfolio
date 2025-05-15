import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Lakshay",
  lastName: "Sahajwani",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Data Analyst",
  avatar: "/images/avatar.jpg",
  email: "sahajwanilakshay@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Laksh5101/Laksh5101/blob/main/README.md",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/lakshay-sahajwani/",
  },

];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Hi I'm Lakshay Sahajwani Data Analyst</>,
  
  subline: (
    <>
      Aspiring Data Analyst skilled in data analysis, SQL, Excel, and data visualization to drive actionable insights.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/lakshay-sahajwani-9jxd7r/secret",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Lakshay is a data analyst with a passion for transforming complex data challenges into clear, actionable insights. He combines analytical expertise with a strong sense of design, creating intuitive visualizations and interactive dashboards that enhance decision-making and user experience.
      </>
    ),
  },
  work: {
  display: true, // set to false to hide this section
  title: "Work Experience",
  experiences: [
    {
      company: "Cognizant", // replace with actual client name if needed
      timeframe: "Jan 2024 – Jan 2025",
      role: "Graduate Trainee",
      achievements: [

        <>
          Managed and maintained critical cloud-based infrastructure, ensuring robust system availability and security.
        </>,
        <>
          Administered Microsoft Active Directory for user authentication, role-based access control, and policy enforcement.
        </>,
        <>
          Monitored and optimized Citrix Director and virtual desktop infrastructure (VDI) to deliver seamless, high-performance remote desktop experiences.
        </>,
        <>
          Collaborated with cross-functional teams to diagnose and resolve complex technical issues, minimizing downtime and improving system reliability.
        </>,
        <>
          Leveraged Microsoft 365 tools to streamline workflows and enhance productivity across the organization.
        </>,
        <>
          Strengthened skills in cloud infrastructure management, security protocols, and enterprise IT operations.
        </>,
      ],
      images: [],
    },    
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Maharishi Markandeshwar Deemed University",
        description: <>Master of Computer Applications (MCA)</>,
      },
      {
        name: "Maharishi Markandeshwar Deemed University",
        description: <>Bachelors of Computer Application (BCA)</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Python, Excel, Power BI, SQL",
        description: <>Skilled in Python, Advanced Excel, Power BI, and SQL for data analysis,experienced with GitHub Actions and project deployment.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/powerbi.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/SQL.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "GitHub Actions",
        description: <>Proficient in cloud platforms (Oracle, Azure), scripting with Python and JupyterLab, and data management using advanced SQL.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/Actions.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/certification",
  label: "Certification",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
  certifications: [
  ],
};


const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
  projects: [
  ],
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};
const certifications = {
  display: true, // Set to false to hide this section
  title: "Certifications",
  items: [
    {
      name: "Oracle AI Vector Search Certified Professional",
      issuer: "Oracle",
      date: "May 2025",
      description: "Demonstrated proficiency in Oracle SQL fundamentals, including data retrieval, manipulation, and table creation using Oracle Database.",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=B45031578B9FFF4E864A532BED38CA5A33680C34A9C6970742329BAA0DA44BEF", // Optional: Replace with your badge URL
      image: "/images/projects/project-01/oracle-professional.png", // Optional: Add an image path if you have a logo
    },
    {
      name: "Oracle Cloud Infrastructure Foundations Certified Associate",
      issuer: "Oracle",
      date: "April 2025",
      description: "Earned foundational knowledge of Oracle Cloud services, core infrastructure, and pricing models.",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=37D61A09620FACD3FB5D71A5C0D22168463DA42B3A158AC5557F9D017E695B3C", // Optional
      image: "/public/images/projects/project-01/Oracle Associate.png", // Optional
    },
  ],
};


export { person, social, newsletter, home, about, blog, work, gallery, certifications };
