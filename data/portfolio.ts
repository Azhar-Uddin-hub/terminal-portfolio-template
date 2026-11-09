export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  featured: boolean;
  example: boolean;
  githubUrl?: string;
  demoUrl?: string;
  thumbnail?: string;
}

export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  status: string;
  doi?: string;
  pdfUrl?: string;
}

// Customize this file with your own verified details before publishing.
// Empty contact URLs and CV paths render as unavailable, without broken links.
export const portfolio = {
  name: "Your Name",
  shortName: "Your Name",
  handle: "yourname",
  initials: "YN",
  headline: "Curious minds build meaningful things.",
  heroLines: ["Curious", "minds.", "Meaningful", "work."],
  availability: "Open to opportunities",
  intro:
    "A space for your work, ideas, and the things you are learning. Replace this introduction with a short description of yourself.",
  profileConfirmed: false,
  roles: ["Your Role", "Your Specialization", "Lifelong Learner"],
  biography:
    "Introduce yourself here. Share what you enjoy building, what motivates you, and the kinds of problems you want to solve.",
  education: "Add your education or relevant learning experience.",
  careerGoals: "Describe the opportunities and goals you want to pursue.",
  currentFocus: "Share what you are currently learning or working on.",
  location: "Your city or region",
  email: "",
  githubUrl: "",
  linkedinUrl: "",
  websiteUrl: "",
  cvPath: "", // Optional: add your own file under public/resume/ and set its path.
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "",
  portrait: {
    src: "/images/profile-placeholder.svg",
    alt: "Generic portrait placeholder",
    placeholder: true,
    objectPosition: "50% 35%",
    zoom: 1,
    transformOrigin: "50% 35%",
  },
  skillsConfirmed: false,
  skills: [
    { category: "Programming", items: ["JavaScript", "TypeScript", "Python"] },
    { category: "Web", items: ["HTML", "CSS", "React"] },
    { category: "Tools", items: ["Git", "Testing", "Documentation"] },
  ],
  projects: [
    {
      id: "portfolio-example",
      title: "Portfolio Website",
      description:
        "Example project: a responsive website for presenting work and ideas. Replace this card with a project you have built.",
      category: "Web Development",
      technologies: ["Next.js", "TypeScript", "CSS"],
      featured: true,
      example: true,
    },
    {
      id: "task-tracker-example",
      title: "Task Tracker",
      description:
        "Example project: organize tasks and track progress. Add your own description, technologies, and verified links.",
      category: "Application",
      technologies: ["React", "Local Storage"],
      featured: false,
      example: true,
    },
    {
      id: "data-explorer-example",
      title: "Data Explorer",
      description:
        "Example project: explore a sample dataset through charts and filters. Replace this with your own work and results.",
      category: "Data Visualization",
      technologies: ["Python", "Charts"],
      featured: false,
      example: true,
    },
  ] satisfies Project[],
  projectNote: "Add a short summary of your projects here.",
  research: {
    detailsConfirmed: false,
    confirmedDetails: [] as string[],
    interests: ["Your research topic", "Your area of interest"],
    interestsConfirmed: false,
    thesis: "Add your thesis or current research topic, if applicable.",
    methodology: "Describe the methods you use in your work.",
    collaborations: "Describe collaborations you have completed or would welcome.",
    achievements: "Add verified awards or academic achievements, if applicable.",
    publications: [] as Publication[],
  },
};

export const navigation = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "contact", label: "Contact" },
] as const;
