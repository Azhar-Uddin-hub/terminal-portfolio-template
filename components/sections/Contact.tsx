import { ArrowUpRight, Code2, Download, Mail, Users } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TerminalCard } from "@/components/ui/TerminalCard";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  const channels = [
    {
      label: "Email",
      value: portfolio.email,
      href: portfolio.email ? `mailto:${portfolio.email}` : "",
      Icon: Mail,
    },
    {
      label: "GitHub",
      value: portfolio.githubUrl,
      href: portfolio.githubUrl,
      Icon: Code2,
    },
    {
      label: "LinkedIn",
      value: portfolio.linkedinUrl,
      href: portfolio.linkedinUrl,
      Icon: Users,
    },
  ];
  return (
    <section
      id="contact"
      className="page-section contact-section"
      aria-labelledby="contact-title"
    >
      <Reveal>
        <SectionHeading
          id="contact-title"
          number="04"
          command="./contact.sh"
          title="Good things start with hello"
        />
      </Reveal>
      <Reveal>
        <TerminalCard command="$ ./contact.sh">
          <div className="contact-content">
            <div className="contact-intro">
              <span className="contact-symbol" aria-hidden="true">
                &gt;_
              </span>
              <h3>
                Let’s build the
                <br />
                <span className="accent">next chapter.</span>
              </h3>
              <p>
                Open to conversations, collaborative projects, and
                opportunities to learn by building.
              </p>
              {portfolio.email ? (
                <a
                  className="button button-primary"
                  href={`mailto:${portfolio.email}`}
                >
                  Say hello <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              ) : (
                <p className="contact-pending">
                  <span className="status-dot" aria-hidden="true" /> Contact
                  details coming soon
                </p>
              )}
            </div>
            <div className="contact-channels">
              {channels.map(({ label, value, href, Icon }) =>
                href ? (
                  <a
                    key={label}
                    href={href}
                    className="contact-channel"
                    {...(href.startsWith("https://")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    <Icon size={20} aria-hidden="true" />
                    <span>
                      <strong>{label}</strong>
                      <span>{value}</span>
                    </span>
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
                ) : (
                  <div key={label} className="contact-channel missing">
                    <Icon size={20} aria-hidden="true" />
                    <span>
                      <strong>{label}</strong>
                      <span>Not added yet</span>
                    </span>
                    <span className="channel-dash" aria-hidden="true">
                      —
                    </span>
                  </div>
                ),
              )}
              {portfolio.cvPath ? (
                <a
                  className="button button-secondary cv-button"
                  href={portfolio.cvPath}
                  download
                >
                  <Download size={16} aria-hidden="true" /> Download CV
                </a>
              ) : (
                <p className="cv-pending">
                  <Download size={15} aria-hidden="true" /> CV will be available
                  when added.
                </p>
              )}
            </div>
          </div>
          <div className="contact-terminal-footer">
            <span className="accent" aria-hidden="true">
              &gt;
            </span>{" "}
            A conversation today. A new possibility tomorrow.
            <span className="cursor" aria-hidden="true">
              _
            </span>
          </div>
        </TerminalCard>
      </Reveal>
    </section>
  );
}
