import { useState } from "react";
import {
  Terminal,
  Code2,
  FolderGit2,
  ExternalLink,
  Mail,
  Code,
  MessageSquare,
  ChevronRight,
  Menu,
  X,
  FileText,
  Sparkles,
} from "lucide-react";
import Reveal from "./Reveal";

// ==========================================
// 1. DATA SECTION
// ==========================================

const skills = [
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "Tailwind CSS", "React (Learning)"],
  },
  {
    category: "Backend & Database",
    items: ["Python", "Django", "Node.js", "Express", "SQLite / MySQL"],
  },
  {
    category: "Tools & Modern Workflow",
    items: ["Git", "GitHub", "VS Code", "Responsive Design", "AI-Assisted Dev (Vibe Coding)"],
  },
];

// EDIT HERE: Palitan mo na lang yung title, description, tech, at links ng 3 school projects mo
const projects = [
  {
    id: "01",
    title: "Barangay San Roque Family Tree System",
    role: "Front-End Developer (UI Contributor)",
    description:
      "Capstone project for barangay household profiling, resident verification, and data analytics featuring management dashboards and certificate request workflows.",
    tech: ["React", "Vite", "Material UI"],
    image: "/capstone.png",
    liveUrl: "https://github.com/cdwthmstr/brgy-san-roque-system-preview",
    githubUrl: "https://github.com/cdwthmstr/brgy-san-roque-system-preview",
    isShowcase: true, // Optional: kung gusto mong gawing 'View Showcase' ang button text
  },
  {
    id: "02",
    title: "J&C MetalWorks — Corporate & Portfolio Website",
    image: "/project1.jpg",
    description:
      "A modern, dark themed corporate website built for J&C Fabrication Inc. featuring an interactive hero image carousel, service offerings, project gallery, client testimonials, leadership profiles, and a dedicated contact page with live social media integration.",
    tech: ["HTML5", "CSS3", "Responsive UI"],
    githubUrl: "https://github.com/win1705/IPT-Web-System",
    liveUrl: "https://jc-metalworks.vercel.app/",
  },
  {
    id: "03",
    title: "System Management & Ticketing Portal",
    image: "/project2.png",
    description:
      "A full stack web management and support ticketing portal built with Node.js and Express, featuring role based access control (User, Admin, Super Admin), real time ticket tracking, and an admin dashboard. Frontend UI preview is live on Vercel, with full backend source code available on GitHub.",
    tech: ["HTML5", "Bootstrap 5", "JavaScript", "Node.js", "Express"],
    githubUrl: "https://github.com/win1705/system-management-portal",
    liveUrl: "https://system-management-portal.vercel.app/",
  },
  {
    id: "04",
    title: "WorkNest — Coworking Space Finder & Booking Web App",
    image: "/project3.png",
    description:
      "A multi page responsive web application built for freelancers and remote workers to discover and reserve coworking spaces, cafés, and libraries. Features user authentication, location based interactive map exploration, workspace category sliders, and a reservation calendar with check-in/check-out scheduling.",
    tech: ["HTML5", "CSS3", "JavaScript", "Google Maps Embed"],
    githubUrl: "https://github.com/win1705/WORKNEST",
    liveUrl: "https://worknest-gamma.vercel.app",
  },
  {
    id: "05",
    title: "Django Web System (In Progress)",
    role: "Full-Stack Developer",
    description:
      "Full-stack web management system with custom Django admin dashboard, database models, and user workflows. Demo and repository details coming soon.",
    tech: ["Python", "Django", "HTML/CSS", "SQLite"],
    image: "/coming-soon.png",
    liveUrl: "#",
    githubUrl: "#",
  },
];

// EDIT HERE: Ilagay dito ang actual email, GitHub, at Facebook links mo
const socialLinks = [

    {
    name: "Email",
    handle: "zafrajerwinbrylle@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=zafrajerwinbrylle@gmail.com&su=OJT%20Opportunity",
    icon: Mail,
  },

  {
    name: "GitHub",
    handle: "github.com/win1705",
    href: "https://github.com/win1705",
    icon: Code,
  },
  {
    name: "Facebook",
    handle: "Jerwin Brylle M. Zafra",
    href: "https://www.facebook.com/jerwinbryllemangali.zafra",
    icon: MessageSquare,
  },
];

// ==========================================
// 2. MAIN UI COMPONENT
// ==========================================

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-tech-grid text-zinc-100 font-sans selection:bg-emerald-400/20 selection:text-emerald-300">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-4 sm:py-5">
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 font-mono text-sm sm:text-base font-bold text-emerald-400 hover:text-emerald-300 transition-colors whitespace-nowrap"
          >
            <Terminal className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
            <span>~/jerwin-zafra</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex items-center gap-8 font-mono text-sm font-medium text-zinc-300">
            <a href="#skills" className="hover:text-emerald-400 transition-colors">
              01. skills
            </a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">
              02. projects
            </a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">
              03. contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="sm:hidden rounded-lg border border-zinc-800 bg-zinc-900/80 p-2 text-zinc-300 hover:border-emerald-400/50 hover:text-emerald-400 transition-colors"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <nav className="sm:hidden border-t border-zinc-800/80 bg-zinc-950 px-6 py-4 flex flex-col gap-4 font-mono text-sm text-zinc-300">
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-emerald-400 transition-colors"
            >
              01. skills
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-emerald-400 transition-colors"
            >
              02. projects
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-emerald-400 transition-colors"
            >
              03. contact
            </a>
          </nav>
        )}
      </header>

      <main className="mx-auto max-w-7xl px-6">
        {/* HERO SECTION */}
        <section className="py-16 md:py-28 border-b border-zinc-900">
          <div className="grid gap-10 lg:gap-12 lg:grid-cols-12 lg:items-center">
            {/* Profile Picture (Nasa taas sa Mobile via order-first, nasa kanan sa Desktop via lg:order-last) */}
            <div className="order-first lg:order-last lg:col-span-5 flex justify-center lg:justify-center">
              <div className="relative group">
                {/* Subtle Emerald Glow sa likod */}
                <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-tr from-emerald-500/30 to-zinc-800/30 blur-lg opacity-75 group-hover:opacity-100 transition duration-500"></div>

                {/* Image Container (May dark gradient background para hindi masakit sa mata) */}
                <div className="relative h-56 w-56 sm:h-72 sm:w-72 md:h-80 md:w-75 overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-800 via-zinc-900 to-emerald-950/50 shadow-2xl">
                  <img
                    src="/profile.png"
                    alt="Jerwin Brylle M. Zafra"
                    className="h-full w-full object-cover object-top brightness-95 contrast-105 transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle inner shadow para mag-blend yung edges sa dark card */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 shadow-[inset_0_0_24px_rgba(9,9,11,0.65)]"></div>
                </div>
              </div>
            </div>

            {/* Left Column: Main Intro */}
            <div className="lg:col-span-7">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 font-mono text-xs text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                Open for Web Development OJT / Internship
              </div>

              <p className="font-mono text-sm text-emerald-400 mb-2">$ whoami</p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-50">
                Jerwin Brylle M. Zafra
              </h1>

              <h2 className="mt-3 text-xl sm:text-2xl font-medium text-zinc-400">
                Web Development & IT Support <span className="text-emerald-400">|</span> 4th Year BSIT Student
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">
                I build clean, responsive, and user-friendly websites. Grounded in{" "}
                <span className="text-zinc-200 font-medium">HTML</span>,{" "}
                <span className="text-zinc-200 font-medium">CSS</span>, and{" "}
                <span className="text-zinc-200 font-medium">Python/Django</span>, while leveling up with{" "}
                <span className="text-emerald-400 font-medium">React, Tailwind CSS</span>, and{" "}
                <span className="text-emerald-400 font-medium">AI-assisted workflows</span> to ship interfaces faster. Ready to contribute and learn fast during my OJT.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-zinc-950 hover:bg-emerald-300 transition-colors"
                >
                  View Projects
                  <ChevronRight className="h-4 w-4" />
                </a>

                <a
                  href="/Jerwin_Zafra_Updated_OJT_CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-5 py-2.5 text-sm font-medium text-emerald-300 hover:bg-emerald-500/20 transition-colors"
                >
                  <FileText className="h-4 w-4" />
                  View / Download CV
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 px-5 py-2.5 text-sm font-medium text-zinc-200 hover:border-zinc-700 hover:bg-zinc-900 transition-colors"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-16 border-b border-zinc-900">
          <div className="grid gap-6 sm:grid-cols-3">
  {skills.map((group, index) => (
    <Reveal key={group.category} delay={index * 120}>
      <div className="h-full rounded-xl border border-white/10 bg-zinc-900/40 backdrop-blur-md p-5 shadow-lg hover:border-emerald-500/30 transition-colors">
        <h4 className="font-mono text-xs uppercase tracking-wider text-emerald-400 mb-4">
          // {group.category}
        </h4>
        <div className="flex flex-wrap gap-2">
          {group.items.map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-zinc-800 bg-zinc-950 px-3 py-1 font-mono text-xs text-zinc-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  ))}
</div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-16 border-b border-zinc-900">
          <div className="flex items-center gap-2 font-mono text-sm text-emerald-400 mb-2">
            <FolderGit2 className="h-4 w-4" />
            <span>02. featured_works</span>
          </div>
          <h3 className="text-2xl font-bold text-zinc-100 mb-2">Academic & Web Projects</h3>
          <p className="text-sm text-zinc-400 mb-8">
            Mga web systems at frontend activities na ginawa ko sa BSIT journey ko.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.id} delay={index * 150}>
                <article className="h-full group flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-zinc-900/40 backdrop-blur-md shadow-lg hover:border-emerald-500/40 hover:bg-zinc-900/60 transition-all">
                  <div>
                    {/* Project Thumbnail */}
                    <div className="relative aspect-video w-full overflow-hidden border-b border-zinc-800/80 bg-zinc-950">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center font-mono text-xs text-zinc-600">
                          [ preview_coming_soon ]
                        </div>
                      )}
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-xs text-emerald-400">
                          PROJECT_{project.id}
                        </span>
                        <div className="flex items-center gap-3 text-zinc-400">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub Repository"
                            className="hover:text-emerald-400 transition-colors"
                          >
                            <Code className="h-4 w-4" />
                          </a>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Live Preview"
                            className="hover:text-emerald-400 transition-colors"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </div>
                      </div>

                      <h4 className="text-lg font-semibold text-zinc-100 group-hover:text-emerald-400 transition-colors">
                        {project.title}
                      </h4>

                      <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6">
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/60">
                      {project.tech.map((item) => (
                        <span
                          key={item}
                          className="font-mono text-[11px] text-emerald-300/90 bg-emerald-400/10 px-2.5 py-0.5 rounded"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

       {/* CONTACT SECTION */}
        <section id="contact" className="py-16">
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-zinc-900/40 backdrop-blur-md p-8 sm:p-10 shadow-xl">
              <p className="font-mono text-xs text-emerald-400 mb-2">$ ./contact.sh</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-zinc-100">
                Let’s build something together.
              </h3>
              <p className="mt-2 max-w-xl text-sm text-zinc-400">
                Available ako para sa Web Development OJT / Internship. Pwede niyo akong i-message directly sa email o socials sa baba.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3.5 rounded-xl border border-zinc-800 bg-zinc-950/80 p-4 hover:border-emerald-400/50 transition-colors"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-400">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-mono text-zinc-400">{social.name}</p>
                        <p className="truncate text-sm font-medium text-zinc-200">
                          {social.handle}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 py-8 text-center font-mono text-xs text-zinc-500">
        <p>Built by Jerwin Brylle M. Zafra • React + Tailwind CSS</p>
      </footer>
    </div>
  );
}