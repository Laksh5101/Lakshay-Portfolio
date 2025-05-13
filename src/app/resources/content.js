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
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Transforming data into insights by day, building passion projects by night.</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Lakshay, a Data Analyst at <Logo icon={false} style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}/>, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
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
        company: "Cognizant",
        timeframe: "Jan 2024 – Jan 2025",
        role: "Programmer Trainee",
        achievements: [
          <>
            Analyzed and visualized complex datasets using Python, SQL, and Power BI, improving decision-making efficiency by 25%.
          </>,
          <>
            Automated data pipelines and reporting processes using GitHub Actions, reducing manual effort by 40%.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
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
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
  projects: [
    {
      title: "Power BI Sales Dashboard",
      timeframe: "Mar 2024",
      description:
        "Built an interactive sales dashboard for a retail client using Power BI, providing insights into sales trends, regional performance, and product categories.",
      tech: ["Power BI", "Excel", "DAX"],
      link: "/work/powerbi-sales-dashboard", // Optional
      images: [
        {
          src: "/images/projects/project-02/sales-dashboard.jpg",
          alt: "Power BI Sales Dashboard",
          width: 16,
          height: 9,
        },
      ],
    },
    {
      title: "GitHub Actions Automation",
      timeframe: "Feb 2024",
      description:
        "Automated data workflows using GitHub Actions to trigger SQL scripts and update Power BI datasets on a schedule.",
      tech: ["GitHub Actions", "SQL", "Power BI"],
      link: "/work/github-actions-automation", // Optional
      images: [
        {
          src: "/images/projects/project-01/Actions.png",
          alt: "GitHub Actions Workflow",
          width: 16,
          height: 9,
        },
      ],
    },
    {
      title: "SQL Analysis Project",
      timeframe: "Jan 2024",
      description:
        "Analyzed customer churn data using advanced SQL queries, uncovering key factors and generating performance reports.",
      tech: ["SQL", "JupyterLab"],
      link: "/work/sql-churn-analysis", // Optional
      images: [
        {
          src: "/images/projects/project-01/SQL.png",
          alt: "SQL Analysis",
          width: 16,
          height: 9,
        },
      ],
    },
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

