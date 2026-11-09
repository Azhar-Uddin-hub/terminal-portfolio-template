import {
  Braces,
  BrainCircuit,
  Network,
  ChartNoAxesCombined,
  Wrench,
} from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";

const icons = [Braces, BrainCircuit, Network, ChartNoAxesCombined, Wrench];

export function Skills() {
  return (
    <section className="skills-section" aria-labelledby="skills-title">
      <div className="subsection-heading">
        <h2 id="skills-title">
          <span className="accent" aria-hidden="true">
            &gt;_
          </span>{" "}
          The toolkit
        </h2>
        <p>
          {portfolio.skillsConfirmed
            ? "Tools & technologies"
            : "Suggested skills · not yet verified"}
        </p>
      </div>
      <div className="skills-grid">
        {portfolio.skills.map(({ category, items }, index) => {
          const Icon = icons[index % icons.length];
          return (
            <Reveal key={category}>
              <div className="skill-card">
                <Icon size={21} aria-hidden="true" />
                <h3>{category}</h3>
                <div className="tag-list">
                  {items.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
