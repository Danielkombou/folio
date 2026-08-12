export const site = {
  name: "Daniel Kombou",
  email: "danielkombou7@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/Danielkombou" },
    { label: "LinkedIn", href: "https://linkedin.com/in/kombou-daniel-b394b92a5" },
    { label: "X", href: "https://x.com/DanielKomb87182" },
  ],
};

export const hero = {
  intro:
    "I'm a software engineer building technology that creates opportunities and solves real-world problems. Currently building AttendX.",
  previous:
    "Frontend Developer & Program Facilitator at Tic Foundation, where I mentor interns and ship tools for education across Africa.",
  cta: "Let's talk",
};

export type Project = {
  title: string;
  description: string;
  href: string;
  image: string;
  tags?: string[];
};

export const projects = {
  description:
    "I build tools that solve problems I run into as an engineer — each one a chance to ship, learn, and improve.",
  items: [
    {
      title: "AttendX",
      description: "Smart attendance tracking for modern teams and organizations.",
      href: "https://github.com/Danielkombou",
      image: "/projects/attendx.png",
      tags: ["Next.js", "TypeScript", "Tailwind"],
    },
    {
      title: "Academia",
      description: "Bulk certificate generation from templates with instant PDF export.",
      href: "https://github.com/Danielkombou/Academia-Frontend",
      image: "/projects/academia.png",
      tags: ["React", "PDF", "Node.js"],
    },
  ] satisfies Project[],
};

export const stack = {
  description:
    "Tools and languages I reach for day to day — from UI to APIs and deployment.",
  items: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "PostgreSQL",
    "MongoDB",
    "Git",
    "Figma",
    "Vercel",
  ],
};

export const writings = {
  description:
    "Notes on engineering, mentoring, and the small moments where things finally click.",
  items: [
    {
      title: "Building AttendX from scratch",
      date: "29/05/26",
      readTime: "5 min read",
    },
    {
      title: "Mentoring the next generation of engineers",
      date: "15/03/26",
      readTime: "4 min read",
    },
    {
      title: "Read Your Error Messages",
      date: "21/01/26",
      readTime: "3 min read",
    },
  ],
};
