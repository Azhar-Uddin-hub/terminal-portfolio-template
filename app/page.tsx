import { Terminal, ArrowUpRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { HeroTerminal } from "@/components/home/HeroTerminal";
import { FloatingNavbar } from "@/components/layout/FloatingNavbar";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Research } from "@/components/sections/Research";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="site-container">
        <header className="site-header">
          <a
            href="#home"
            className="wordmark"
            aria-label={`${portfolio.name}, home`}
          >
            <span className="wordmark-icon">
              <Terminal size={19} aria-hidden="true" />
            </span>
            <span>
              ~/{portfolio.handle}
              <span className="muted">/portfolio</span>
            </span>
          </a>
          <span className="header-note">
            {portfolio.availability}
            <span className="status-dot" aria-hidden="true" />
          </span>
        </header>
        <main id="main-content" tabIndex={-1}>
          <HeroTerminal />
          <About />
          <Skills />
          <Projects />
          <Research />
          <Contact />
        </main>
        <footer className="site-footer">
          <p>
            © {new Date().getFullYear()} {portfolio.name}
          </p>
          <p>
            Built with curiosity
            <span className="accent" aria-hidden="true">
              .
            </span>
          </p>
          <a href="#home">
            Back to top <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </footer>
      </div>
      <FloatingNavbar />
    </>
  );
}
