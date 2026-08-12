export type StackItem = {
  name: string;
  color: string;
};

export const site = {
  name: "Daniel Kombou",
  initials: "KD",
  email: "danielkombou7@gmail.com",
  github: "https://github.com/Danielkombou",
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
      image: "/projects/attendx.webp",
      tags: ["Next.js", "TypeScript", "Tailwind"],
    },
    {
      title: "CertiGen",
      description: "Bulk certificate generation from templates with instant PDF export.",
      href: "https://github.com/Danielkombou/Academia-Frontend",
      image: "/projects/academia.webp",
      tags: ["React", "PDF", "Node.js"],
    },
    {
      title: "JARVIS",
      description:
        "Terminal cybersecurity assistant for network scanning, vulnerability assessment, and ethical security testing on Ubuntu.",
      href: "https://github.com/Danielkombou/jarvis",
      image: "/projects/jarvis.webp",
      tags: ["Python", "Nmap", "Security"],
    },
    {
      title: "EcoCleaners",
      description:
        "B2B waste exchange platform that turns scrap into revenue by connecting traders with specialized recyclers.",
      href: "https://github.com/NebaFavour/v0-waste-exchange-platform",
      image: "/projects/ecocleaners.webp",
      tags: ["Next.js", "Marketplace", "GreenTech"],
    },
    {
      title: "Dino Run",
      description: "Chrome-dino inspired endless runner built with Python and Pygame.",
      href: "https://github.com/Danielkombou",
      image: "/projects/dino-run.svg",
      tags: ["Python", "Pygame"],
    },
  ] satisfies Project[],
};

export const stack = {
  description:
    "Tools and languages I reach for day to day — from UI to APIs and deployment.",
  items: [
    { name: "HTML5", color: "#E34F26" },
    { name: "CSS3", color: "#1572B6" },
    { name: "JavaScript", color: "#F7DF1E" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "React", color: "#61DAFB" },
    { name: "Next.js", color: "#000000" },
    { name: "Tailwind CSS", color: "#06B6D4" },
    { name: "Bootstrap", color: "#7952B3" },
    { name: "MongoDB", color: "#47A248" },
    { name: "PostgreSQL", color: "#4169E1" },
    { name: "Neon", color: "#00E699" },
    { name: "Node.js", color: "#339933" },
    { name: "Express.js", color: "#000000" },
    { name: "REST APIs", color: "#FF6B35" },
    { name: "BetterAuth", color: "#7C3AED" },
    { name: "Flutter", color: "#02569B" },
    { name: "Python", color: "#3776AB" },
    { name: "Java", color: "#ED8B00" },
    { name: "SQL", color: "#336791" },
    { name: "Git", color: "#F05032" },
    { name: "GitHub", color: "#181717" },
    { name: "VS Code", color: "#007ACC" },
    { name: "Cursor AI", color: "#000000" },
    { name: "OpenCode", color: "#10B981" },
    { name: "Figma", color: "#F24E1E" },
    { name: "Vercel", color: "#000000" },
    { name: "Netlify", color: "#00C7B7" },
    { name: "Railway", color: "#0B0D0E" },
    { name: "Render", color: "#46E3B7" },
    { name: "Postman", color: "#FF6C37" },
    { name: "Zustand", color: "#443E38" },
    { name: "React Query", color: "#FF4154" },
    { name: "Context API", color: "#61DAFB" },
    { name: "Axios", color: "#5A29E4" },
    { name: "Framer Motion", color: "#0055FF" },
    { name: "Lucide", color: "#F56565" },
  ] satisfies StackItem[],
};

export type Writing = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
};

export const writings = {
  description:
    "Notes on engineering, mentoring, and the small moments where things finally click.",
  items: [
    {
      slug: "cybersecurity-passion-to-jarvis",
      title: "From curiosity to JARVIS",
      date: "12/08/26",
      readTime: "6 min read",
      excerpt:
        "How a growing passion for cybersecurity turned into building JARVIS — a terminal assistant for ethical security work.",
      content: [
        "Cybersecurity did not start for me as a job title. It started as curiosity — the itch to understand how systems fail, and how to defend them before someone else finds the crack.",
        "I spent nights reading about networks, permissions, and the quiet discipline behind ethical testing. The more I learned, the clearer it became: tools matter, but judgment matters more. Authorized scope, clear logs, and respect for systems are not optional.",
        "That passion became JARVIS — a terminal cybersecurity assistant I built in Python on Ubuntu. Inspired by the idea of a calm operator beside you, JARVIS grew into network scanning, vulnerability assessment, reporting, and a modular core I could keep extending.",
        "Building it forced me to connect theory with practice: Nmap for discovery, careful privilege handling, structured reports, and an interface that stays readable under pressure. Every module was a lesson in responsibility as much as capability.",
        "JARVIS is still evolving, and so am I. Cybersecurity remains one of the paths where learning never really ends — and that is exactly why I keep building.",
      ],
    },
    {
      slug: "building-attendx-from-scratch",
      title: "Building AttendX from scratch",
      date: "29/05/26",
      readTime: "5 min read",
      excerpt:
        "What I learned shipping an attendance product end to end — auth, data model, and the UI details that matter.",
      content: [
        "AttendX started as a simple question: why is attendance still messy for so many teams?",
        "I wanted something fast to set up, clear to use, and useful the moment people clock in. That meant focusing on presence, hours, and insights without burying teams in setup.",
        "The hardest part was not the feature list. It was keeping the product calm. Every screen had to answer one job: who is here, for how long, and what does that mean today.",
        "Shipping the first usable version taught me to cut scope early, ship auth carefully, and treat empty states as part of the product — not an afterthought.",
      ],
    },
    {
      slug: "mentoring-the-next-generation",
      title: "Mentoring the next generation of engineers",
      date: "15/03/26",
      readTime: "4 min read",
      excerpt:
        "Lessons from facilitating at Tic Foundation and helping interns turn confusion into momentum.",
      content: [
        "Mentoring changed how I write code. When you explain a bug to someone else, you find the assumptions you never questioned.",
        "At Tic Foundation I spend time with interns who are hungry to build. The best sessions are not lectures. They are shared debugging, small demos, and honest feedback.",
        "I try to teach three habits: read the error, shrink the problem, and ship something small every day.",
        "Watching a team go from stuck to shipping is still one of the best parts of this work.",
      ],
    },
    {
      slug: "read-your-error-messages",
      title: "Read Your Error Messages",
      date: "21/01/26",
      readTime: "3 min read",
      excerpt:
        "Most bugs get quieter when you stop guessing and start reading what the runtime already told you.",
      content: [
        "When something breaks, the fastest fix is usually already on the screen.",
        "Error messages look scary at first. Stack traces feel noisy. But buried in that noise is often the exact file, line, and reason.",
        "I used to jump straight into rewriting code. Now I pause, read the message twice, and only then open the editor.",
        "That one habit has saved me hours — and it is the first thing I teach anyone I mentor.",
      ],
    },
  ] satisfies Writing[],
};

export function getWriting(slug: string) {
  return writings.items.find((w) => w.slug === slug);
}
