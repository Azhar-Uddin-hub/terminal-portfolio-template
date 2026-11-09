"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

export function Typewriter({ roles }: { roles: string[] }) {
  const reducedMotion = useReducedMotion();
  const [text, setText] = useState(roles[0] || "");
  useEffect(() => {
    if (reducedMotion || roles.length < 2) return;
    let index = 0;
    let length = roles[0].length;
    let deleting = true;
    let timer: ReturnType<typeof setTimeout>;
    function tick() {
      const role = roles[index];
      length += deleting ? -1 : 1;
      setText(role.slice(0, length));
      let delay = deleting ? 38 : 75;
      if (length === 0) {
        deleting = false;
        index = (index + 1) % roles.length;
        delay = 280;
      } else if (length === role.length && !deleting) {
        deleting = true;
        delay = 2000;
      }
      timer = setTimeout(tick, delay);
    }
    timer = setTimeout(tick, 2300);
    return () => clearTimeout(timer);
  }, [roles, reducedMotion]);
  return (
    <span className="typewriter">
      <span className="sr-only">{roles.join(". ")}</span>
      <span aria-hidden="true">
        {reducedMotion ? roles[0] : text}
        <span className="cursor">_</span>
      </span>
    </span>
  );
}
