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

export type StackItem = {
  name: string;
  color: string;
  icon: string;
};

export const stack = {
  description:
    "Tools and languages I reach for day to day — from UI to APIs and deployment.",
  items: [
    {
      name: "React",
      color: "#61DAFB",
      icon: "M14.23 12.004a2.236 2.236 0 0 1-2.228 2.225 2.236 2.236 0 0 1-2.229-2.225 2.236 2.236 0 0 1 2.229-2.229 2.236 2.236 0 0 1 2.228 2.229zm2.783.133c.193-1.333.34-2.107.4-2.527l.068-.42.025-.147c.015-.081.033-.166.054-.254.088-.37.208-.773.364-1.208.238-.655.565-1.343.99-2.056a.75.75 0 0 0-.112-1.004.75.75 0 0 0-1.004.112c-.37.62-.64 1.21-.84 1.758a10.3 10.3 0 0 0-.313 1.028c-.014.055-.026.11-.036.163l-.02.11-.066.406c-.05.345-.17.986-.33 2.15-.16 1.163-.16 1.91 0 3.073.16 1.164.28 1.805.33 2.15l.066.406.02.11c.01.053.022.108.036.163.08.34.186.69.313 1.028.2.549.47 1.138.84 1.758a.75.75 0 1 0 1.116-.892c-.425-.713-.752-1.401-.99-2.056a9.7 9.7 0 0 1-.364-1.208 5.5 5.5 0 0 1-.054-.254l-.025-.147-.068-.42c-.06-.42-.207-1.194-.4-2.527zm-11.626 0c-.193 1.333-.34 2.107-.4 2.527l-.068.42-.025.147a5.6 5.6 0 0 1-.054.254c-.088.37-.208.773-.364 1.208-.238.655-.565 1.343-.99 2.056a.75.75 0 1 1-1.116-.892c.37-.62.64-1.21.84-1.758.127-.338.233-.688.313-1.028.014-.055.026-.11.036-.163l.02-.11.066-.406c.05-.345.17-.986.33-2.15.16-1.163.16-1.91 0-3.073-.16-1.164-.28-1.805-.33-2.15l-.066-.406-.02-.11a5.5 5.5 0 0 1-.036-.163 9.7 9.7 0 0 1-.313-1.028c-.2-.549-.47-1.138-.84-1.758a.75.75 0 0 1 1.004-.112.75.75 0 0 1 .112 1.004c.425.713.752 1.401.99 2.056.156.435.276.838.364 1.208.021.088.039.173.054.254l.025.147.068.42c.06.42.207 1.194.4 2.527zM12 22.75c-5.937 0-10.75-4.813-10.75-10.75S6.063 1.25 12 1.25 22.75 6.063 22.75 12 17.937 22.75 12 22.75zm0-1.5a9.25 9.25 0 1 0 0-18.5 9.25 9.25 0 0 0 0 18.5z",
    },
    {
      name: "Next.js",
      color: "#000000",
      icon: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c1.726 0 3.348-.438 4.762-1.206l-7.01-12.146v8.102h1.5V7.63l7.49 12.98A9.96 9.96 0 0 0 22 12c0-5.523-4.477-10-10-10z",
    },
    {
      name: "TypeScript",
      color: "#3178C6",
      icon: "M3 3h18v18H3V3zm14.688 9.75h-1.462c-.07.9-.42 1.35-1.2 1.35-.78 0-1.23-.525-1.23-1.575V9.75H12.6v3.825c0 2.1 1.185 3.3 2.985 3.3 1.74 0 2.85-1.125 2.1-3.125zM8.4 9.75H5.7v1.35h.975V17.1h1.5v-6h.225V9.75z",
    },
    {
      name: "Node.js",
      color: "#339933",
      icon: "M12 1.5l9.5 5.5v10L12 22.5 2.5 17V7L12 1.5zm0 1.732L4 8v8l8 4.768L20 16V8l-8-4.768zM12 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z",
    },
    {
      name: "Tailwind CSS",
      color: "#06B6D4",
      icon: "M12 6c-2.667 0-4.333 1.333-5 4 1-1.333 2.167-1.833 3.5-1.5.761.19 1.305.742 1.907 1.353C13.542 11.037 14.666 12.25 17 12.25c2.667 0 4.333-1.333 5-4-1 1.333-2.167 1.833-3.5 1.5-.761-.19-1.305-.742-1.907-1.353C15.458 7.213 14.334 6 12 6zm-5 5.75c-2.667 0-4.333 1.333-5 4 1-1.333 2.167-1.833 3.5-1.5.761.19 1.305.742 1.907 1.353C8.542 16.787 9.666 18 12 18c2.667 0 4.333-1.333 5-4-1 1.333-2.167 1.833-3.5 1.5-.761-.19-1.305-.742-1.907-1.353C10.458 12.963 9.334 11.75 7 11.75z",
    },
    {
      name: "PostgreSQL",
      color: "#4169E1",
      icon: "M12.9 21.4c-.4.1-.8.1-1.2.1-1.6 0-2.9-.5-3.8-1.3-.4.2-.8.3-1.2.3-1.2 0-1.9-.8-1.9-1.9 0-.4.1-.8.3-1.1C4.4 16.2 4 14.7 4 13c0-4.1 3.6-6.8 8-6.8 3.5 0 6.2 1.8 6.8 4.6.7.2 1.2.8 1.2 1.6 0 .9-.7 1.6-1.6 1.6h-.1c.1.5.1 1 .1 1.5 0 2.8-1.7 4.8-4.5 5.9zm1.6-8.1c0-2.2-1.5-3.5-4-3.5-2.6 0-4.2 1.4-4.2 3.6 0 2.3 1.6 3.6 4.3 3.6 2.5 0 3.9-1.3 3.9-3.7z",
    },
    {
      name: "MongoDB",
      color: "#47A248",
      icon: "M13.5 2.3c-.3-.5-.8-.5-1.1 0-1.4 2.1-2 4.7-1.8 7.1.1 1.4.5 2.8 1.2 4 .2.4.7.5 1 .2.2-.2.3-.5.2-.8-.5-1-.8-2.1-.9-3.3-.2-2 .3-4.1 1.4-5.9.2-.4.2-.9 0-1.3zm1.8 4.4c-.4-.3-.9-.1-1.1.3-.7 1.5-.8 3.2-.4 4.8.3 1.2.9 2.3 1.7 3.2.3.3.7.3 1 0 .2-.2.3-.6.1-.9-.7-.8-1.2-1.7-1.4-2.7-.3-1.3-.2-2.7.4-3.9.2-.4.1-.9-.3-1.2zM12 22s4-2.2 4-7.1c0-2.8-1.5-4.6-2.6-5.6-.3-.3-.8-.1-.9.3-.2 1-.5 2.5-.5 3.5 0 3.4-1.2 5.2-1.2 5.2s-1.1-1.7-1.1-4.7c0-1.2-.2-2.7-.5-3.8-.1-.4-.6-.5-.9-.3C7.3 10.5 6 12.4 6 15.1 6 19.8 12 22 12 22z",
    },
    {
      name: "Git",
      color: "#F05032",
      icon: "M23.15 10.37 13.63.85a2.89 2.89 0 0 0-4.09 0L7.57 2.82l2.54 2.54a2.14 2.14 0 0 1 2.72 2.73l2.45 2.45a2.14 2.14 0 1 1-1.28 1.18L11.4 8.9v6.12a2.14 2.14 0 1 1-1.72-.06V8.74a2.14 2.14 0 0 1-1.16-2.81L6.07 3.4.85 8.63a2.89 2.89 0 0 0 0 4.09l9.52 9.52a2.89 2.89 0 0 0 4.09 0l9.52-9.52c1.13-1.13 1.13-2.96.17-3.35z",
    },
    {
      name: "Figma",
      color: "#F24E1E",
      icon: "M8 24a4 4 0 0 0 4-4v-4H8a4 4 0 1 0 0 8zm4-12H8a4 4 0 1 1 0-8h4v8zm0 0h4a4 4 0 1 1 0 8h-4v-8zm4-4a4 4 0 1 0 0-8h-4v8h4zM8 0a4 4 0 0 0 0 8h4V4a4 4 0 0 0-4-4z",
    },
    {
      name: "Vercel",
      color: "#000000",
      icon: "M12 2L2 19.5h20L12 2z",
    },
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
