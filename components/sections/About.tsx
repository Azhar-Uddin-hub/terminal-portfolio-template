import { ArrowUpRight, GraduationCap, Crosshair, Compass } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TerminalCard } from "@/components/ui/TerminalCard";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  const details = [
    { Icon: GraduationCap, title: "Education", value: portfolio.education },
    { Icon: Crosshair, title: "Current focus", value: portfolio.currentFocus },
    { Icon: Compass, title: "Looking ahead", value: portfolio.careerGoals },
  ];
  return (
    <section id="about" className="page-section" aria-labelledby="about-title">
      <Reveal>
        <SectionHeading
          id="about-title"
          number="01"
          command="cat about_me.txt"
          title="A little about me"
        />
      </Reveal>
      <Reveal>
        <TerminalCard command="$ cat about_me.txt" className="about-card">
          <div className="about-content">
            <div>
              <p className="code-comment">
                {"// the person behind the terminal"}
              </p>
              <h3>
                Hi, I’m <span className="accent">{portfolio.shortName}</span>
                <span className="cursor" aria-hidden="true">
                  _
                </span>
              </h3>
              <p>{portfolio.biography}</p>
              <a href="#research" className="text-link">
                Explore my research interests{" "}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
            <div className="about-details">
              {details.map(({ Icon, title, value }) => (
                <div key={title} className="detail-row">
                  <Icon size={19} aria-hidden="true" />
                  <div>
                    <h4>{title}</h4>
                    <p
                      className={
                        !portfolio.profileConfirmed ? "placeholder-copy" : ""
                      }
                    >
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {!portfolio.profileConfirmed && (
            <p className="content-notice">
              Profile draft — education, goals, and current focus are awaiting
              your details.
            </p>
          )}
        </TerminalCard>
      </Reveal>
    </section>
  );
}
