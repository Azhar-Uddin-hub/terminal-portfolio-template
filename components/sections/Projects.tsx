"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  AudioLines,
  Bot,
  Box,
  Code2,
  ExternalLink,
  FolderGit2,
  ShoppingBag,
  Users,
} from "lucide-react";
import { portfolio, type Project } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const projects: Project[] = portfolio.projects;
const categories = [
  "All work",
  ...new Set(projects.map((project) => project.category)),
];

function ProjectArtwork({ index, title }: { index: number; title: string }) {
  if (index === 0)
    return (
      <div className="project-artwork waveform-art" aria-hidden="true">
        <span className="artwork-topline">
          PROJECT PREVIEW <span>IDEA → BUILD</span>
        </span>
        <div className="waveform">
          {Array.from({ length: 45 }, (_, i) => (
            <i
              key={i}
              style={{ height: `${18 + ((i * 29 + i * i * 7) % 78)}%` }}
            />
          ))}
        </div>
        <div className="artwork-bottomline">
          <AudioLines size={16} />
          <span>explore, build, iterate</span>
          <span className="accent">∿</span>
        </div>
      </div>
    );
  const Icon = [FolderGit2, Users, Bot, Box, ShoppingBag][index] || FolderGit2;
  return (
    <div className="project-artwork academic-art" aria-hidden="true">
      <span className="artwork-topline">
        {title.toUpperCase()} <FolderGit2 size={14} />
      </span>
      <div className="academic-art-symbol">
        <Icon size={54} strokeWidth={1} />
      </div>
      <span className="artwork-bottomline">PROJECT SHOWCASE</span>
    </div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState("All work");
  const visible = projects.filter(
    (project) => filter === "All work" || project.category === filter,
  );
  return (
    <section
      id="projects"
      className="page-section"
      aria-labelledby="projects-title"
    >
      <Reveal>
        <SectionHeading
          id="projects-title"
          number="02"
          command="ls ./projects"
          title="From ideas to experiments"
          description="A place for the work, the process, and everything learned along the way."
        />
      </Reveal>
      <div className="project-toolbar">
        <div
          className="project-filters"
          role="group"
          aria-label="Filter projects"
        >
          {categories.map((category) => (
            <motion.button
              whileTap={{ scale: 0.97 }}
              type="button"
              key={category}
              onClick={() => setFilter(category)}
              aria-pressed={filter === category}
              className={
                filter === category ? "filter-button selected" : "filter-button"
              }
            >
              {category}
            </motion.button>
          ))}
        </div>
        <span className="project-count" role="status" aria-live="polite">
          {String(visible.length).padStart(2, "0")} projects
        </span>
      </div>
      <div className="project-grid">
        {visible.map((project) => (
          <Reveal key={project.id}>
            <motion.article
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className={`project-card ${project.featured ? "featured" : ""}`}
            >
              {project.thumbnail ? (
                <div className="project-artwork">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    sizes="(max-width: 700px) 90vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ) : (
                <ProjectArtwork
                  index={projects.indexOf(project)}
                  title={project.title}
                />
              )}
              <div className="project-content">
                <div className="project-category">
                  <span>{project.category}</span>
                  {project.featured && (
                    <span className="featured-label">Featured</span>
                  )}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list">
                  {project.technologies.map((tech) => (
                    <span className="tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-footer">
                  {project.example && (
                    <span className="example-label">
                      <FolderGit2 size={14} aria-hidden="true" /> Example
                      project
                    </span>
                  )}
                  <div className="project-links">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View source for ${project.title}`}
                      >
                        <Code2 size={18} aria-hidden="true" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open live demo of ${project.title}`}
                      >
                        <ExternalLink size={18} aria-hidden="true" />
                      </a>
                    )}
                    {!project.githubUrl && !project.demoUrl && (
                      <span className="muted">
                        Links pending{" "}
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
      <p className="section-footnote">
        {projects.some((project) => project.example)
          ? "Example projects are placeholders until their ownership, details, and links are confirmed."
          : portfolio.projectNote}
      </p>
    </section>
  );
}
