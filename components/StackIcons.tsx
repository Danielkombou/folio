"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { StackItem } from "@/lib/data";

const TRACE = "#f97316";
const DRAW_S = 0.72;
const HOLD_MS = 720;
/** Reach-then-plant: quick lift, firm land. */
const GAIT = [0.4, 0.02, 0.2, 1] as const;
const EASE = [0.22, 1, 0.36, 1] as const;

const mono = new Set([
  "Next.js",
  "Vercel",
  "Express.js",
  "GitHub",
  "Cursor AI",
  "Railway",
  "Zustand",
]);

const icons: Record<string, React.ReactNode> = {
  HTML5: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M3 2l1.6 18.2L12 22l7.4-1.8L21 2H3zm14.2 5.5H8.1l.2 2.2h8.7l-.6 6.6L12 18l-4.4-1.2-.3-3h2.1l.1 1.5 2.5.7 2.5-.7.3-2.8H7.5L6.8 5.2h10.7l-.3 2.3z" />
    </svg>
  ),
  CSS3: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M3 2l1.6 18.2L12 22l7.4-1.8L21 2H3zm13.4 5.6H8l.2 2.3h7.9l-.5 5.5L12 16.8l-3.6-1-.2-2.3h2.1l.1 1.1 1.6.4 1.6-.4.2-2H7.6L6.9 5.3h9.8l-.3 2.3z" />
    </svg>
  ),
  JavaScript: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M3 3h18v18H3V3zm9.7 13.7c.8 1.3 1.9 2.1 3.8 2.1 1.9 0 3.2-1 3.2-2.8 0-1.8-1-2.5-2.9-3.3l-1-.4c-1.7-.7-2.8-1.6-2.8-3.5 0-1.7 1.3-3 3.4-3 1.5 0 2.6.5 3.4 1.8l-1.9 1.2c-.4-.7-.8-1-1.5-1-.7 0-1.2.5-1.2 1.1 0 .8.5 1.1 1.7 1.6l1 .4c2 .9 3.1 1.9 3.1 4.1 0 2.3-1.8 3.6-4.3 3.6-2.4 0-4-1.1-4.8-2.6l2.1-1.2zM8.2 18.7c.6 1.1 1.2 1.9 2.6 1.9 1.3 0 2.1-.6 2.1-2.9V8.5H10v9c0 .8-.3 1-1 1-.5 0-.9-.2-1.3-.6l-1.5 1.8z" />
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M1.5 1.5h21v21h-21v-21zm12.3 10.2h2.1c.1 1.2.6 1.8 1.6 1.8 1 0 1.6-.7 1.6-2.1V9.8h2v5.1c0 2.8-1.6 4.4-4 4.4-2.3 0-3.8-1.5-2.8-4.2H9.8v1.8H7.8V9.8h4.2v1.9h1.8v0z" />
    </svg>
  ),
  React: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      <circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
    </svg>
  ),
  "Next.js": (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.85 0 3.58-.5 5.07-1.37L9.4 8.1v8.4h1.7V9.86l7.08 11.01A9.96 9.96 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
    </svg>
  ),
  "Tailwind CSS": (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M12 6C9.3 6 7.7 7.3 7 10c1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3C13.5 11 14.7 12.2 17 12.2c2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3C15.5 7.2 14.3 6 12 6zM7 11.8C4.3 11.8 2.7 13.1 2 15.8c1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3 1.1 1.2 2.3 2.4 4.6 2.4 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3-1.1-1.2-2.3-2.4-4.6-2.4z" />
    </svg>
  ),
  Bootstrap: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M6 3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3zm4.2 5.2c1.4 0 2.4.7 2.4 1.9 0 .9-.5 1.5-1.3 1.8 1.1.3 1.8 1 1.8 2.2 0 1.5-1.2 2.3-3 2.3H8.2V8.2h2zm0 3.1h.7c.6 0 1-.3 1-.8s-.4-.8-1-.8h-.7v1.6zm0 3.5h.9c.7 0 1.1-.4 1.1-1s-.4-1-1.1-1h-.9v2z" />
    </svg>
  ),
  MongoDB: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M13.1 2.2c-.4-.7-1-.7-1.4 0-2.2 3.3-2.4 7.6-.8 11.1.4.9 1 1.7 1.7 2.4.2.2.5.2.7 0 .7-.7 1.3-1.5 1.7-2.4 1.6-3.5 1.4-7.8-.8-11.1zM12 22s3.4-1.8 3.4-6.2c0-1.9-.8-3.4-1.7-4.4-.2-.2-.6-.1-.7.2-.3 1-.6 2.4-.6 3.4 0 3-1.1 4.7-1.1 4.7S10 17 10 14c0-1.1-.2-2.5-.5-3.5-.1-.3-.5-.4-.7-.2C7.8 11.3 7 12.9 7 14.8 7 19.2 12 22 12 22z" />
    </svg>
  ),
  PostgreSQL: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M16.5 8.2c.2-1.8-.3-3.2-1.4-4.1C13.7 3.1 12 3 12 3s-1.7.1-3.1 1.1C7.8 5 7.3 6.4 7.5 8.2c-2 .7-3.2 2-3.2 4 0 1.3.7 2.4 1.8 3.1-.1.4-.2.8-.2 1.2 0 1.7 1.1 2.7 2.7 2.7.5 0 1-.1 1.5-.3.6.5 1.4.8 2.4.8s1.8-.3 2.4-.8c.5.2 1 .3 1.5.3 1.6 0 2.7-1 2.7-2.7 0-.4-.1-.8-.2-1.2 1.1-.7 1.8-1.8 1.8-3.1 0-2-1.2-3.3-3.2-4z" />
    </svg>
  ),
  Neon: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M24 0V24l-9.365-8.045V24H0V0ZM2.942 21.087h8.751V9.563l9.365 8.204V2.919L2.942 2.914Z" />
    </svg>
  ),
  "Node.js": (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M12 1.7 21.5 7v10L12 22.3 2.5 17V7L12 1.7zm0 1.8L4.2 8v8L12 20.5 19.8 16V8L12 3.5zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" />
    </svg>
  ),
  "Express.js": (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M2 12h6v2H2v-2zm8-4h12v2H10V8zm0 4h12v2H10v-2zm0 4h8v2h-8v-2z" />
    </svg>
  ),
  "REST APIs": (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="18" cy="18" r="3" />
      <path d="M8.7 10.5l6.6-3M8.7 13.5l6.6 3" />
    </svg>
  ),
  BetterAuth: (
    <svg viewBox="0 0 400 300" width="20" height="15" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        d="M0 150v150h100V200h100v100h200V0H200v100H100V0H0zm300 0v50H200V100h100z"
      />
    </svg>
  ),
  Flutter: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M14.3 2.2 3.6 12.9l3.3 3.3 14-14H14.3zM14.3 12.2l-4.4 4.4 4.4 4.4H20.9l-4.4-4.4 4.4-4.4h-6.6z" />
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M12 2c-3 0-3.2.7-3.2 3.2v1.6h6.4v.8H8c-2.7 0-4.8 1.5-4.8 4.4s1.4 4.4 4.1 4.4h1.5v-1.8c0-2 1.7-3.6 3.8-3.6h4.4c2.4 0 2.8-1 2.8-3.2C20 3.4 18.3 2 12 2zm-1.6 1.8a1 1 0 110 2 1 1 0 010-2zM12.4 12.8c-2.4 0-2.8 1-2.8 3.2 0 2.4 1.7 3.2 4.8 3.2 3 0 3.2-.7 3.2-3.2v-1.6H11.2v-.8h6.8c2.7 0 4.8-1.4 4.8-4.4 0-2.9-1.4-4.4-4.1-4.4h-1.5v1.8c0 2-1.7 3.6-3.8 3.6h-1zm1.6 5.4a1 1 0 110 2 1 1 0 010-2z" />
    </svg>
  ),
  Java: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M9.2 17.6c0 .8 2.6 1.4 5.8 1.4s5.8-.6 5.8-1.4-2.6-1.4-5.8-1.4-5.8.6-5.8 1.4zm5.8-9.2c-1.6 0-2.2.7-2.2 1.5 0 1.4 2.2 1.1 2.2 3.2 0 1.3-1.1 2.1-2.9 2.1-1.5 0-2.6-.5-3.5-1.1l.8-1.6c.7.5 1.6.9 2.6.9.7 0 1.1-.3 1.1-.7 0-1.4-2.2-1.2-2.2-3.3 0-1.5 1.2-2.5 3-2.5 1.3 0 2.4.4 3.2.9l-.8 1.6c-.7-.4-1.5-.6-2.3-.6zM8 20.8h11.2v1.6H8v-1.6zM7.2 4.4l1.4 1C7.4 7 6.5 8.6 6.5 10.5c0 2.5 1.5 4.1 4.1 5l-.7 1.6C6.6 16 4.5 13.7 4.5 10.5c0-2.6 1.1-4.8 2.7-6.1z" />
    </svg>
  ),
  SQL: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M22.5 10.7 13.3 1.5a2.1 2.1 0 0 0-3 0L8.1 3.7l2.5 2.5a2 2 0 0 1 2.5 2.5l2.4 2.4a2 2 0 1 1-1.2 1.1l-2.4-2.4v5.7a2 2 0 1 1-1.5 0V9.7a2 2 0 0 1-1.1-2.6L6.6 4.6 1.5 9.7a2.1 2.1 0 0 0 0 3l9.2 9.2a2.1 2.1 0 0 0 3 0l9.2-9.2c.8-.8.8-2.2-.4-2z" />
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.35-1.75-1.35-1.75-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.21.7.82.58A12.01 12.01 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  ),
  "VS Code": (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M17.5 2.5 8.8 9.7 3.8 6.2 2 7.3v9.4l1.8 1.1 5-3.5 8.7 7.2L22 19.4V4.6L17.5 2.5zm0 4.2v10.6l-6.2-5.1 6.2-5.5z" />
    </svg>
  ),
  "Cursor AI": (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M11.503.131 1.891 5.678a.84.84 0 0 0-.42.726v11.188c0 .3.162.575.42.724l9.609 5.55a1 1 0 0 0 .998 0l9.61-5.55a.84.84 0 0 0 .42-.724V6.404a.84.84 0 0 0-.42-.726L12.497.131a1.01 1.01 0 0 0-.996 0M2.657 6.338h18.55c.263 0 .43.287.297.515L12.23 22.918c-.062.107-.229.064-.229-.06V12.335a.59.59 0 0 0-.295-.51l-9.11-5.257c-.109-.063-.064-.23.061-.23" />
    </svg>
  ),
  OpenCode: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M8 7l-4 5 4 5M16 7l4 5-4 5M13 5l-2 14" />
    </svg>
  ),
  Figma: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M8 24a4 4 0 0 0 4-4v-4H8a4 4 0 0 0 0 8zm4-12H8a4 4 0 0 1 0-8h4v8zm0 0h4a4 4 0 1 1 0 8h-4v-8zm4-4a4 4 0 1 0 0-8h-4v8h4zM8 0a4 4 0 0 0 0 8h4V4a4 4 0 0 0-4-4z" />
    </svg>
  ),
  Vercel: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
      <path d="M12 3 2 20h20L12 3z" />
    </svg>
  ),
  Netlify: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M12 2 3 7v10l9 5 9-5V7l-9-5zm0 2.2 6.8 3.8v.8L12.8 6v3.3l6 3.3v1.5l-6-3.3v6.5l-1.6.9v-7.4l-6 3.3V12l6-3.3V5.3L5.2 8.4v-.8L12 4.2z" />
    </svg>
  ),
  Railway: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M4 4h7.5L20 20h-7.5L4 4zm2.8 2.5 5.4 10.5h2.4L9.2 6.5H6.8z" />
    </svg>
  ),
  Render: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M5 4h8.5a5.5 5.5 0 010 11H9v5H5V4zm4 4v3h4.5a1.5 1.5 0 000-3H9z" />
    </svg>
  ),
  Postman: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343zm2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522zM18.855 6.05a.143.143 0 0 0-.053.157.416.416 0 0 1-.053.45.14.14 0 0 0 .023.197.141.141 0 0 0 .084.03.14.14 0 0 0 .106-.05.691.691 0 0 0 .087-.751.138.138 0 0 0-.194-.033z" />
    </svg>
  ),
  Zustand: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M6 7h12v3H9v2h8v3H9v2h9v3H6V7z" />
    </svg>
  ),
  "React Query": (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M6.9297 13.6875c.164-.0938.375-.0352.4687.1328l.0625.1055c.4805.8515.9805 1.6601 1.5 2.4258.6133.9023 1.3047 1.8164 2.0743 2.7421a.3455.3455 0 0 1-.0391.4844l-.0742.0664c-2.543 2.2227-4.1914 2.664-4.9532 1.332-.746-1.3046-.4765-3.6718.8086-7.1093a.3437.3437 0 0 1 .1524-.1797ZM17.75 16.3008c.1836-.0313.3594.086.3945.2695l.0196.1016c.6289 3.2851.1875 4.9297-1.3243 4.9297-1.4804 0-3.3593-1.4024-5.6484-4.2032a.3271.3271 0 0 1-.0742-.2226c0-.1875.1562-.3399.3437-.3399h.1211a32.9838 32.9838 0 0 0 2.8086-.0976c1.0703-.086 2.1914-.2305 3.3594-.4375zm.871-6.9766a.3528.3528 0 0 1 .4454-.211l.1016.0352c3.2617 1.1094 4.5039 2.332 3.7187 3.6641-.7656 1.3047-2.9922 2.254-6.6836 2.8477-.082.0117-.168-.004-.2383-.047-.168-.0976-.2265-.3085-.125-.4765l.0625-.1054c.504-.8438.957-1.6836 1.3672-2.5235.4766-.9883.9297-2.0508 1.3516-3.1836zM7.797 8.3398c.082-.0117.168.004.2383.047.168.0976.2265.3085.125.4765l-.0625.1054a34.0882 34.0882 0 0 0-1.3672 2.5235c-.4766.9883-.9297 2.0508-1.3516 3.1836a.3528.3528 0 0 1-.4453.211l-.1016-.0352c-3.2617-1.1094-4.5039-2.332-3.7187-3.6641.7656-1.3047 2.9922-2.254 6.6836-2.8477Zm5.2812-3.9843c2.543-2.2227 4.1914-2.664 4.9532-1.332.746 1.3046.4765 3.6718-.8086 7.1093a.3436.3436 0 0 1-.1524.1797c-.164.0938-.375.0352-.4687-.1328l-.0625-.1055c-.4805-.8515-.9805-1.6601-1.5-2.4258-.6133-.9023-1.3047-1.8164-2.0743-2.7421a.3455.3455 0 0 1 .0391-.4844Zm-5.793-2.082c1.4805 0 3.3633 1.4023 5.6485 4.203a.3488.3488 0 0 1 .0781.2188c-.0039.1914-.1562.3438-.3476.3438l-.1172-.004a34.5835 34.5835 0 0 0-2.8086.1016c-1.0742.086-2.1953.2305-3.3633.4375a.343.343 0 0 1-.3945-.2734l-.0196-.0977c-.629-3.2851-.1876-4.9297 1.3242-4.9297Zm2.8711 5.8124h3.6875a.638.638 0 0 1 .5508.3164l1.8477 3.2188a.6437.6437 0 0 1 0 .6289l-1.8477 3.2227a.638.638 0 0 1-.5507.3164h-3.6875c-.2266 0-.4375-.1211-.547-.3164L7.7579 12.25a.6437.6437 0 0 1 0-.629l1.8516-3.2187c.1093-.1953.3203-.3164.5468-.3164Zm3.2305.793a.638.638 0 0 1 .5508.3164l1.3906 2.4258a.6437.6437 0 0 1 0 .6289l-1.3906 2.4297a.638.638 0 0 1-.5508.3164h-2.7734c-.2266 0-.4375-.1211-.5469-.3164L8.672 12.25a.6437.6437 0 0 1 0-.629l1.3945-2.4257c.1094-.1953.3203-.3164.5469-.3164Zm-.4922.8672h-1.789c-.2266 0-.4336.1172-.547.3164l-.8983 1.5586a.6437.6437 0 0 0 0 .6289l.8984 1.5625a.6317.6317 0 0 0 .5469.3164h1.789a.6317.6317 0 0 0 .547-.3164l.8983-1.5625a.6437.6437 0 0 0 0-.629l-.8984-1.5585c-.1133-.1992-.3203-.3164-.5469-.3164Zm-.4765.8281c.2265 0 .4375.1211.5468.3164l.422.7305c.1132.1953.1132.4375 0 .6289l-.422.7344c-.1093.1953-.3203.3164-.5468.3164h-.836a.6317.6317 0 0 1-.5468-.3164l-.422-.7344c-.1132-.1914-.1132-.4336 0-.629l.422-.7304a.6317.6317 0 0 1 .5468-.3164zm-.418.8164a.548.548 0 0 0-.4727.2735c-.0976.168-.0976.375 0 .5468a.5444.5444 0 0 0 .4727.2696.5444.5444 0 0 0 .4727-.2696c.0976-.1718.0976-.3789 0-.5468A.548.548 0 0 0 12 11.3906Zm-4.4219.5469h.9805M18.9805 7.75c.3906-1.8945.4765-3.3438.2226-4.3984-.1484-.629-.4218-1.1368-.8398-1.5078-.4414-.3907-1-.582-1.625-.582-1.0352 0-2.1211.4726-3.2813 1.3671-.4726.3633-.9648.8047-1.4726 1.3164-.043-.0508-.086-.1015-.1367-.1445-1.4454-1.2852-2.6602-2.082-3.6993-2.3906-.6171-.1836-1.1953-.1993-1.7226-.0235-.5586.1875-1.004.5742-1.3164 1.1172-.5156.8945-.6524 2.0742-.461 3.5274.0782.5898.2149 1.2343.4024 1.9335a1.1187 1.1187 0 0 0-.2149.047C3.008 8.621 1.711 9.2694.9258 10.0155c-.4649.4414-.7695.9375-.8828 1.4805-.1133.5781 0 1.1562.3125 1.6992.5156.8945 1.4648 1.5977 2.8164 2.1563.543.2226 1.1562.4257 1.8437.6093a1.0227 1.0227 0 0 0-.0703.2266c-.3906 1.8906-.4765 3.3438-.2226 4.3945.1484.629.4257 1.1407.8398 1.5078.4414.3907 1 .582 1.625.582 1.0352 0 2.121-.4726 3.2813-1.3632.4765-.3711.9726-.8164 1.4882-1.336a1.2 1.2 0 0 0 .1953.2266c1.4454 1.2852 2.6602 2.082 3.6993 2.3906.6172.1836 1.1953.1993 1.7226.0235.5586-.1875 1.004-.5742 1.3164-1.1172.5157-.8945.6524-2.0742.461-3.5273-.082-.6133-.2227-1.2813-.4258-2.0118a1.2248 1.2248 0 0 0 .2383-.0468c1.828-.6094 3.125-1.2578 3.9101-2.004.4649-.4413.7696-.9374.8828-1.4804.1133-.5781 0-1.1563-.3125-1.6992-.5156-.8946-1.4648-1.5977-2.8164-2.1563-.5586-.2304-1.1953-.4414-1.9062-.625a.8647.8647 0 0 0 .0586-.1953z" />
    </svg>
  ),
  "Context API": (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v3M12 18v3M4.5 7.5l2.5 1.5M17 15l2.5 1.5M4.5 16.5 7 15M17 9l2.5-1.5" />
    </svg>
  ),
  Axios: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M12 2l8 20h-3.2L12 9.5 7.2 22H4L12 2z" />
    </svg>
  ),
  "Framer Motion": (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M5 3h14v6H11v4h8v8l-8-8H5V3z" />
    </svg>
  ),
  Lucide: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  ),
};

function FallbackMark({ name }: { name: string }) {
  const letter = name.replace(/[^A-Za-z0-9]/g, "").slice(0, 2).toUpperCase() || "?";
  return (
    <span className="flex h-5 w-5 items-center justify-center text-[10px] font-bold tracking-tight">
      {letter}
    </span>
  );
}

type Point = { x: number; y: number };

function stepCurve(a: Point, b: Point, side: 1 | -1): string {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  const nx = (-dy / len) * side;
  const ny = (dx / len) * side;
  const lift = Math.min(28, Math.max(10, len * 0.3));
  const cx = (a.x + b.x) / 2 + nx * lift;
  const cy = (a.y + b.y) / 2 + ny * lift;
  return `M${a.x.toFixed(1)} ${a.y.toFixed(1)} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
}

/** Group icons into visual rows (flex-wrap lines), left → right. */
function clusterRows(pts: Point[]): number[][] {
  const indexed = pts.map((p, i) => ({ i, x: p.x, y: p.y }));
  indexed.sort((a, b) => a.y - b.y || a.x - b.x);
  const rows: number[][] = [];
  const Y_TOL = 40;

  for (const node of indexed) {
    const last = rows[rows.length - 1];
    if (!last) {
      rows.push([node.i]);
      continue;
    }
    const avgY = last.reduce((s, idx) => s + pts[idx].y, 0) / last.length;
    if (Math.abs(node.y - avgY) <= Y_TOL) last.push(node.i);
    else rows.push([node.i]);
  }

  for (const row of rows) row.sort((a, b) => pts[a].x - pts[b].x);
  return rows;
}

/**
 * Column zigzag: col0 down (line1→line2→…), col1 up, col2 down, …
 * Matches: first of each line, then climb the next column, and so on.
 */
function columnZigzag(rows: number[][]): number[] {
  const maxCols = rows.reduce((m, r) => Math.max(m, r.length), 0);
  const path: number[] = [];
  for (let c = 0; c < maxCols; c++) {
    if (c % 2 === 0) {
      for (let r = 0; r < rows.length; r++) {
        if (c < rows[r].length) path.push(rows[r][c]);
      }
    } else {
      for (let r = rows.length - 1; r >= 0; r--) {
        if (c < rows[r].length) path.push(rows[r][c]);
      }
    }
  }
  return path;
}

/** TechTrace Grid — column crawl + fresh-start reveal. */
export function StackIcons({ items }: { items: StackItem[] }) {
  const reduce = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const nodeRefs = useRef<(HTMLLIElement | null)[]>([]);
  const holdTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const drawnForLeg = useRef<number | null>(null);
  const pathRef = useRef<number[]>([]);
  const cursorRef = useRef(0);
  const firstPassRef = useRef(true);
  const seededRef = useRef(false);
  const [points, setPoints] = useState<Point[]>([]);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [fromIdx, setFromIdx] = useState(0);
  const [toIdx, setToIdx] = useState(0);
  const [leg, setLeg] = useState(0);
  const [arrived, setArrived] = useState(false);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [ready, setReady] = useState(false);
  const [firstPass, setFirstPass] = useState(true);
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  const n = items.length;
  const from = points[fromIdx];
  const to = points[toIdx];
  const tracing = !reduce && inView && !paused && ready && n > 1 && from && to && fromIdx !== toIdx;

  const reveal = useCallback((idx: number) => {
    setRevealed((prev) => (prev[idx] ? prev : { ...prev, [idx]: true }));
  }, []);

  const measure = useCallback(() => {
    const list = listRef.current;
    if (!list) return;
    const root = list.getBoundingClientRect();
    const next: Point[] = [];
    for (let i = 0; i < n; i++) {
      const el = nodeRefs.current[i];
      if (!el) continue;
      const r = el.getBoundingClientRect();
      next.push({
        x: r.left - root.left + r.width / 2,
        y: r.top - root.top + r.height / 2,
      });
    }
    setPoints(next);
    setSize({ w: list.clientWidth, h: list.clientHeight });
  }, [n]);

  useEffect(() => {
    measure();
    const list = listRef.current;
    if (!list) return;
    const ro = new ResizeObserver(measure);
    ro.observe(list);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure, items]);

  // Build column path once; keep indices on resize, refresh geometry only.
  useEffect(() => {
    if (points.length < 2) return;
    const path = columnZigzag(clusterRows(points));
    if (path.length < 2) return;
    pathRef.current = path;
    if (seededRef.current) return;
    seededRef.current = true;
    cursorRef.current = 0;
    setFromIdx(path[0]);
    setToIdx(path[1]);
    setReady(true);
    reveal(path[0]);
    setLeg((l) => l + 1);
  }, [points, reveal]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 },
    );
    io.observe(root);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    setArrived(false);
    drawnForLeg.current = null;
    if (holdTimer.current) {
      clearTimeout(holdTimer.current);
      holdTimer.current = null;
    }
  }, [leg]);

  useEffect(() => {
    return () => {
      if (holdTimer.current) clearTimeout(holdTimer.current);
    };
  }, []);

  function advanceWalk() {
    const path = pathRef.current;
    if (path.length < 2) return;

    const nextCursor = cursorRef.current + 1;
    // Finished the route — soft loop to start (no long wrap line).
    if (nextCursor >= path.length - 1) {
      if (firstPassRef.current) {
        firstPassRef.current = false;
        setFirstPass(false);
        setRevealed((prev) => {
          const all: Record<number, boolean> = { ...prev };
          for (let i = 0; i < n; i++) all[i] = true;
          return all;
        });
      }
      cursorRef.current = 0;
      setFromIdx(path[0]);
      setToIdx(path[1]);
      setLeg((l) => l + 1);
      return;
    }

    const landed = path[nextCursor];
    const next = path[nextCursor + 1];
    cursorRef.current = nextCursor;
    reveal(landed);
    setFromIdx(landed);
    setToIdx(next);
    setLeg((l) => l + 1);
  }

  function onSegmentDrawn() {
    if (drawnForLeg.current === leg || paused || reduce || !inView) return;
    drawnForLeg.current = leg;
    setArrived(true);
    reveal(toIdx);
    holdTimer.current = setTimeout(advanceWalk, HOLD_MS);
  }

  const segmentD = from && to && fromIdx !== toIdx ? stepCurve(from, to, leg % 2 === 0 ? 1 : -1) : "";
  const planting = tracing && arrived;

  return (
    <div ref={rootRef} className="tech-trace relative w-full" aria-label="Tech stack">
      <ul
        ref={listRef}
        className="relative flex w-full flex-wrap justify-center gap-x-4 gap-y-8 overflow-x-clip py-2 sm:gap-x-7 sm:gap-y-10"
        onMouseLeave={() => setPaused(false)}
      >
        {size.w > 0 && tracing && segmentD && (
          <svg
            className="pointer-events-none absolute inset-0 z-0 overflow-visible"
            width={size.w}
            height={size.h}
            aria-hidden
          >
            <motion.circle
              key={`plant-${leg}`}
              cx={from.x}
              cy={from.y}
              r={3.5}
              fill={TRACE}
              initial={{ scale: 0.6, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 0.95 }}
              transition={{ duration: 0.28, ease: EASE }}
            />
            <motion.path
              key={leg}
              d={segmentD}
              fill="none"
              stroke={TRACE}
              strokeWidth={2}
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0.4 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: DRAW_S, ease: GAIT }}
              onAnimationComplete={onSegmentDrawn}
            />
            {planting && to && (
              <motion.circle
                key={`land-${leg}`}
                cx={to.x}
                cy={to.y}
                r={4}
                fill={TRACE}
                initial={{ scale: 0.4, opacity: 0 }}
                animate={{ scale: [0.4, 1.25, 1], opacity: 1 }}
                transition={{ duration: 0.38, ease: EASE }}
              />
            )}
          </svg>
        )}

        {items.map((item, i) => {
          const isMono = mono.has(item.name) || item.color === "#000000";
          const tilt = ((i % 5) - 2) * 5;
          const lift = (i % 3) * 8 - 8;
          const isActive = planting && i === toIdx;
          const isPlanted = tracing && !paused && i === fromIdx;
          const isShown = !firstPass || !!revealed[i] || reduce;

          return (
            <li
              key={item.name}
              ref={(el) => {
                nodeRefs.current[i] = el;
              }}
              className="stack-icon group relative z-10"
              style={{ transform: `translateY(${lift}px) rotate(${tilt}deg)` }}
              onMouseEnter={() => {
                setPaused(true);
                setArrived(false);
                drawnForLeg.current = null;
                if (holdTimer.current) {
                  clearTimeout(holdTimer.current);
                  holdTimer.current = null;
                }
              }}
            >
              <motion.button
                type="button"
                aria-label={item.name}
                aria-current={isActive ? "true" : undefined}
                className="inline-flex text-foreground/55 transition duration-300 hover:-translate-y-1 hover:scale-110 hover:text-foreground focus-visible:-translate-y-1 focus-visible:scale-110 focus-visible:outline-none"
                style={{ color: isMono ? undefined : item.color }}
                initial={false}
                animate={{
                  opacity: isShown ? 1 : 0,
                  scale: !isShown ? 0.72 : isActive ? 1.14 : isPlanted ? 1.06 : 1,
                }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                <span
                  className={`grayscale transition duration-300 group-hover:grayscale-0 group-focus-within:grayscale-0 ${
                    isActive || isPlanted ? "grayscale-0" : ""
                  }`}
                >
                  {icons[item.name] ?? <FallbackMark name={item.name} />}
                </span>
              </motion.button>
              <span
                className={`pointer-events-none absolute -bottom-7 left-1/2 z-10 max-w-[9rem] -translate-x-1/2 truncate rounded-md bg-foreground px-2 py-0.5 text-[11px] text-background transition sm:max-w-none sm:rotate-[-8deg] sm:overflow-visible sm:whitespace-nowrap ${
                  isActive
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
                }`}
              >
                {item.name}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
