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
  cta: "Let's talk",
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  href: string;
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  tags?: string[];
  features?: string[];
};

export const projects = {
  description:
    "I build tools that solve problems I run into as an engineer — each one a chance to ship, learn, and improve.",
  items: [
    {
      slug: "certigen",
      title: "CertiGen",
      description: "Bulk certificate generation from templates with instant PDF export.",
      longDescription: "CertiGen streamlines certificate issuance for events, bootcamps, and institutions by enabling template-based bulk generation and instant PDF exports.",
      href: "https://certigen-swart.vercel.app/",
      liveUrl: "https://certigen-swart.vercel.app/",
      githubUrl: "https://github.com/Danielkombou/Academia-Frontend",
      image: "/projects/certigen.webp",
      tags: ["React", "PDF", "Node.js"],
      features: [
        "Bulk certificate generation from custom templates",
        "Instant client-side/server-side PDF export",
        "Streamlined workflow for educational events and hackathons"
      ],
    },
    {
      slug: "attendx",
      title: "AttendX",
      description: "Smart attendance tracking for modern teams and organizations.",
      longDescription: "AttendX is a smart attendance tracking platform designed for modern teams and organizations. It simplifies checking in, tracking hours, and managing presence without burying teams in complicated setup.",
      href: "https://attend-tichub.vercel.app/",
      liveUrl: "https://attend-tichub.vercel.app/",
      githubUrl: "https://github.com/Danielkombou",
      image: "/projects/attendx.webp",
      tags: ["Next.js", "TypeScript", "Tailwind"],
      features: [
        "Real-time presence tracking and hour logs",
        "Clean, intuitive UI designed for fast adoption",
        "Optimized load times and responsive mobile experience"
      ],
    },
    {
      slug: "jarvis",
      title: "JARVIS",
      description:
        "Terminal cybersecurity assistant for network scanning, vulnerability assessment, and ethical security testing on Ubuntu.",
      longDescription: "JARVIS is a terminal cybersecurity assistant built in Python on Ubuntu. It provides structured network scanning, vulnerability assessment, and reporting to assist with ethical security testing.",
      href: "https://github.com/Danielkombou/jarvis",
      githubUrl: "https://github.com/Danielkombou/jarvis",
      image: "/projects/jarvis.webp",
      tags: ["Python", "Nmap", "Security"],
      features: [
        "Automated network discovery and Nmap integration",
        "Vulnerability assessment and structured report generation",
        "Modular command-line architecture for custom security extensions"
      ],
    },
    {
      slug: "ecocleaners",
      title: "EcoCleaners",
      description:
        "B2B waste exchange platform that turns scrap into revenue by connecting traders with specialized recyclers.",
      longDescription: "EcoCleaners is a B2B waste exchange marketplace designed to convert industrial or domestic scrap into economic revenue by connecting waste generators with specialized recyclers.",
      href: "https://github.com/NebaFavour/v0-waste-exchange-platform",
      githubUrl: "https://github.com/NebaFavour/v0-waste-exchange-platform",
      image: "/projects/ecocleaners.webp",
      tags: ["Next.js", "Marketplace", "GreenTech"],
      features: [
        "B2B marketplace connecting waste traders and recyclers",
        "GreenTech focus promoting sustainable scrap management",
        "Responsive, modern Next.js frontend architecture"
      ],
    },
    {
      slug: "dino-run",
      title: "Dino Run",
      description: "Chrome-dino inspired endless runner built with Python and Pygame.",
      longDescription: "A Python recreation of the classic Chrome Dino endless runner game, built with Pygame to explore game loops, collision detection, and sprite rendering.",
      href: "https://github.com/Danielkombou",
      githubUrl: "https://github.com/Danielkombou",
      image: "/projects/dino-run.svg",
      tags: ["Python", "Pygame"],
      features: [
        "Smooth arcade game loop and gravity mechanics",
        "Custom obstacle generation and collision detection",
        "Built using Python and Pygame"
      ],
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
      date: "2026-08-12",
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

export function getProject(slug: string) {
  return projects.items.find((p) => p.slug === slug);
}

export const resumeData = {
  summary:
    "Versatile Frontend Developer with a strong foundation in HTML, CSS, JavaScript, and modern frameworks like React.js and Next.js. Proven ability to harness state management libraries, including React Query and Zustand, to enhance application performance. Passionate about creating engaging user experiences through UI/UX best practices and responsive design. Adept at collaborating with cross-functional teams to deliver high-quality web applications on schedule. Committed to leveraging cybersecurity awareness in development processes to mitigate vulnerabilities. Experienced mentor, dedicated to fostering the growth of aspiring developers by sharing knowledge in modern web technologies and project workflows.",
  experience: [
    {
      role: "Front-end Developer Intern / Internship Program Manager",
      company: "Tic Foundation",
      location: "Cameroon, Yaoundé",
      period: "Nov 2023 - Present",
      highlights: [
        "Contributed to various client and in-house projects, implementing scalable and responsive frontend solutions that enhanced user engagement and satisfaction.",
        "Promoted to Internship Program Manager for exceptional technical skills, leading the training of over 30 interns across multiple cohorts.",
        "Contributed to a project that improved frontend performance metrics by 25%, enhancing user interaction and load times.",
      ],
    },
  ],
  education: [
    {
      degree: "GCE A Level Certificate in Science",
      institution: "GBHS Melong",
      location: "Cameroon, Littoral",
      period: "Sep 2021 - May 2023",
    },
    {
      degree: "GCE O Level Certificate in Science",
      institution: "GBHS Melong",
      location: "Cameroon, Littoral Region",
      period: "Sep 2016 - May 2021",
    },
  ],
  skills: {
    soft: ["Team Collaboration", "Leadership", "Adaptability", "Accountability", "Mentoring & Training"],
    languages: ["English", "French", "Latin"],
    technical: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Next.js",
      "Zustand (State Management)",
      "Tailwind CSS",
      "Responsive Web Design",
      "UI/UX Implementation",
      "API Integration (REST)",
      "Git & GitHub",
    ],
    tools: ["VS Code", "Chrome DevTools", "Figma"],
  },
};
