# Daniel Kombou — Portfolio

Personal portfolio site built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

Most site content lives in [`lib/data.ts`](lib/data.ts):

- Hero / site meta
- Projects (including detail pages under `/projects/[slug]`)
- Tech stack (learning-path stages in `lib/data.ts`)
- Writings
- Resume data (`/resume`)

The downloadable CV is [`public/resume.pdf`](public/resume.pdf).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Local development |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |
| `npm run smoke` | Data/route smoke checks |

## Environment

Optional:

```bash
NEXT_PUBLIC_SITE_URL=https://danielkombou.dev
```

Used by `sitemap.ts`, `robots.ts`, and metadata (`metadataBase`).

## Deploy

Deploy on [Vercel](https://vercel.com) or any Node host that supports Next.js App Router.
