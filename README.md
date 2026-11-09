# Terminal Portfolio Template

A responsive terminal-inspired portfolio starter built with Next.js, React,
TypeScript, Tailwind CSS, Motion, and Lucide icons. It includes a dark/light
theme, animated role text, project filters, research and publication sections,
accessible navigation, and optional contact and CV links.

This repository contains reusable source code and clearly labeled examples.
It includes a generic SVG portrait, empty contact fields, and no personal CV.

## Start locally

1. Choose **Use this template → Create a new repository** on GitHub, or download
   the ZIP and extract it.
2. Install Node.js 24 LTS and open the project folder in VS Code.
3. Open a terminal in that folder and run:

   ```sh
   npm ci
   npm run dev
   ```

4. Open <http://127.0.0.1:3000>. Keep the terminal running while previewing.
   On Windows, `Start-Portfolio.cmd` can start the development server after
   dependencies have been installed.

## Make it yours

Edit `data/portfolio.ts`; it is the central content configuration.

| Setting | What to change |
| --- | --- |
| Name, roles, introduction | Your own name, headline, and summary |
| Biography and education | Your verified background and goals |
| Skills | Tools and skills you actually use |
| Projects | Replace all example cards with your own work |
| Research and publications | Your actual interests and publication details |
| Email and social URLs | Your preferred public contact links; leave blank to hide links |
| `portrait` | Add an image under `public/images/`, then set its path, alt text, and `placeholder: false` |
| `cvPath` | Optionally add your own PDF under `public/resume/` and set `/resume/your-cv.pdf` |

Set the confirmation flags to `true` after replacing suggested content:
`profileConfirmed`, `skillsConfirmed`, `research.detailsConfirmed`, and
`research.interestsConfirmed`. Set `example: false` on your real projects.
Use local image paths, or configure approved remote image hosts in
`next.config.ts` before using external images. Theme and layout styles live in
`app/globals.css`; sections are in `components/sections/`.

All files placed under `public/` are publicly downloadable when deployed.
Only add contact details and documents you intend to share. Environment files,
build output, dependency folders, and local QA evidence are ignored by Git.

## Check and build

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

GitHub Actions runs the same checks for pushes to `main` and pull requests.
The build downloads the Geist fonts using Next.js; an internet connection is
required on the first build.

## Publish your own site

1. Commit your customized source to your own GitHub repository.
2. Import that repository into Vercel and select the Next.js framework preset.
   Use the root project directory and the default build settings.
3. Deploy. Copy the production HTTPS address provided by your hosting service.
4. Set `NEXT_PUBLIC_SITE_URL` to that address (for example,
   `https://your-portfolio.example`) in your hosting environment, then redeploy.
   This configures the canonical URL, sitemap, and robots sitemap reference.
   The example address is illustrative; use your actual address.
5. Add your verified production address to your professional profiles.

For local metadata checks, copy `.env.example` to `.env.local` and set your
actual public URL there. Leave it empty until a real deployment exists.

This is a Next.js application; uploading the source directly to GitHub Pages
does not deploy it. Use a host that supports Next.js, or separately configure
and verify a static export if you need static hosting.

## License

MIT. You can use, modify, and share this template, including for your own
portfolio. Keep the license notice when redistributing the source.
