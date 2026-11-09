import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  CornerDownRight,
  Download,
  Terminal,
} from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { TerminalHeader } from "@/components/ui/TerminalCard";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { Typewriter } from "./Typewriter";

export function HeroTerminal() {
  return (
    <section id="home" aria-label="Introduction" className="hero-section">
      <div className="profile-card terminal-card">
        <TerminalHeader command={`$ ls -la ~/${portfolio.handle}`} />
        <div className="portrait-wrap">
          <Image
            src={portfolio.portrait.src}
            alt={portfolio.portrait.alt}
            fill
            sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1050px) 40vw, 390px"
            preload
            style={{
              objectFit: "cover",
              objectPosition: portfolio.portrait.objectPosition,
              transform: `scale(${portfolio.portrait.zoom})`,
              transformOrigin: portfolio.portrait.transformOrigin,
            }}
            unoptimized={portfolio.portrait.src.endsWith(".svg")}
          />
          {portfolio.portrait.placeholder && (
            <span className="photo-placeholder-label">
              Portrait placeholder
            </span>
          )}
          <div className="portrait-overlay" />
          <div className="profile-identity">
            <p className="profile-path">
              ~/home <span aria-hidden="true">/</span> whoami
            </p>
            <h1>{portfolio.name}</h1>
            <Typewriter roles={portfolio.roles} />
            {!portfolio.profileConfirmed && (
              <span className="profile-note">
                Suggested roles · awaiting confirmation
              </span>
            )}
          </div>
        </div>
        <div className="profile-bottom">
          <SocialLinks />
          <span className="profile-bottom-note">Find me around the web</span>
        </div>
      </div>

      <div className="hero-intro">
        <p className="eyebrow">
          <span className="status-dot" aria-hidden="true" /> HELLO, WORLD.
        </p>
        <p className="hero-headline">
          {portfolio.heroLines.map((line, index) => (
            <span
              key={`${line}-${index}`}
              className={`hero-line ${index === 1 ? "accent" : ""} ${index === 3 ? "outlined-word" : ""}`}
            >
              {line}
            </span>
          ))}
        </p>
        <p className="hero-description">{portfolio.intro}</p>
        <div className="hero-actions">
          <a href="#projects" className="button button-primary">
            Explore my work <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          {portfolio.cvPath ? (
            <a
              href={portfolio.cvPath}
              download
              className="button button-secondary"
            >
              Download CV <Download size={17} aria-hidden="true" />
            </a>
          ) : (
            <a href="#contact" className="button button-secondary">
              Let’s connect <CornerDownRight size={17} aria-hidden="true" />
            </a>
          )}
        </div>
        <div className="hero-terminal-note">
          <Terminal size={17} aria-hidden="true" />
          <code>
            <span className="muted">const</span> nextChapter ={" "}
            <span className="accent">&quot;still being written&quot;</span>;
          </code>
        </div>
        <a href="#about" className="scroll-cue">
          <ArrowDown size={14} aria-hidden="true" /> Scroll to discover{" "}
          <span aria-hidden="true">[ 01 — 05 ]</span>
        </a>
      </div>
    </section>
  );
}
