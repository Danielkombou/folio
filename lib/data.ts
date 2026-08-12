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
      title: "Chat App",
      description: "Realtime messaging UI with rooms, presence, and clean conversation flows.",
      href: "https://github.com/Danielkombou/chat-app",
      image: "/projects/chat-app.svg",
      tags: ["React", "Socket.io", "Node.js"],
    },
    {
      title: "Web Music Player",
      description: "Browser music player focused on smooth playback and a clear listening UX.",
      href: "https://github.com/Danielkombou",
      image: "/projects/music-player.svg",
      tags: ["HTML", "CSS", "JavaScript"],
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
    { name: "React", color: "#61DAFB" },
    { name: "Next.js", color: "#000000" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "Node.js", color: "#339933" },
    { name: "Tailwind CSS", color: "#06B6D4" },
    { name: "PostgreSQL", color: "#4169E1" },
    { name: "MongoDB", color: "#47A248" },
    { name: "Git", color: "#F05032" },
    { name: "Figma", color: "#F24E1E" },
    { name: "Vercel", color: "#000000" },
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
