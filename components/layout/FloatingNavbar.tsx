"use client";

import { useEffect, useState } from "react";
import { BookOpen, Code2, House, Mail, UserRound } from "lucide-react";
import { motion } from "motion/react";
import { navigation } from "@/data/portfolio";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const icons = [House, UserRound, Code2, BookOpen, Mail];

export function FloatingNavbar() {
  const [active, setActive] = useState<string>("home");
  useEffect(() => {
    const visible = new Map<string, IntersectionObserverEntry>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) =>
          entry.isIntersecting
            ? visible.set(entry.target.id, entry)
            : visible.delete(entry.target.id),
        );
        const current = [...visible.values()].sort(
          (a, b) => b.intersectionRatio - a.intersectionRatio,
        )[0];
        if (current) setActive(current.target.id);
      },
      { rootMargin: "-10% 0px -55% 0px", threshold: [0, 0.1, 0.25, 0.5, 1] },
    );
    navigation.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="floating-nav" aria-label="Main navigation">
      <div className="nav-items">
        {navigation.map(({ id, label }, index) => {
          const Icon = icons[index];
          return (
            <a
              href={`#${id}`}
              key={id}
              className={`nav-link ${active === id ? "active" : ""}`}
              aria-label={label}
              aria-current={active === id ? "location" : undefined}
              onClick={() => setActive(id)}
            >
              {active === id && (
                <motion.span
                  className="nav-active"
                  layoutId="active-section"
                  transition={{ type: "spring", stiffness: 350, damping: 32 }}
                />
              )}
              <Icon size={21} aria-hidden="true" />
              <span className="nav-text">{label}</span>
              <span className="nav-tooltip" aria-hidden="true">
                {label}
              </span>
            </a>
          );
        })}
      </div>
      <span className="nav-divider" aria-hidden="true" />
      <ThemeToggle />
    </nav>
  );
}
