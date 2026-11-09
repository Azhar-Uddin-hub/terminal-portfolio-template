"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";

function readTheme() {
  try {
    return localStorage.getItem("portfolio-theme") === "light"
      ? "light"
      : "dark";
  } catch {
    return document.documentElement.dataset.theme === "light"
      ? "light"
      : "dark";
  }
}

function subscribe(callback: () => void) {
  const listener = () => {
    document.documentElement.dataset.theme = readTheme();
    callback();
  };
  window.addEventListener("storage", listener);
  window.addEventListener("portfolio-theme", listener);
  return () => {
    window.removeEventListener("storage", listener);
    window.removeEventListener("portfolio-theme", listener);
  };
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, readTheme, () => "dark");
  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("portfolio-theme", next);
    } catch {
      /* Theme still works without storage. */
    }
    window.dispatchEvent(new Event("portfolio-theme"));
  }
  return (
    <motion.button
      whileTap={{ scale: 0.92 }}
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      {theme === "dark" ? (
        <Sun size={22} aria-hidden="true" />
      ) : (
        <Moon size={22} aria-hidden="true" />
      )}
    </motion.button>
  );
}
