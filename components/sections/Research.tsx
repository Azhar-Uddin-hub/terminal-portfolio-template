import {
  ArrowUpRight,
  BookOpen,
  FlaskConical,
  FileText,
  Users,
  Award,
} from "lucide-react";
import { portfolio, type Publication } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TerminalCard } from "@/components/ui/TerminalCard";
import { Reveal } from "@/components/ui/Reveal";

function PublicationItem({ paper }: { paper: Publication }) {
  return (
    <article className="publication-item">
      <div>
        <span className="tag">{paper.status}</span>
        <h4>{paper.title}</h4>
        <p>{paper.authors.join(", ")}</p>
        <p>
          {paper.venue} · {paper.year}
        </p>
      </div>
      <div className="publication-links">
        {paper.doi && (
          <a
            className="text-link"
            href={`https://doi.org/${paper.doi.replace(/^https?:\/\/doi\.org\//, "")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            DOI <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        )}
        {paper.pdfUrl && (
          <a
            className="text-link"
            href={paper.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            PDF <FileText size={14} aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}

export function Research() {
  const research = portfolio.research;
  const details = [
    {
      key: "thesis",
      Icon: FlaskConical,
      title: "Current thesis",
      value: research.thesis,
    },
    {
      Icon: BookOpen,
      key: "methodology",
      title: "Research methodology",
      value: research.methodology,
    },
    {
      key: "collaborations",
      Icon: Users,
      title: "Collaborations",
      value: research.collaborations,
    },
    {
      Icon: Award,
      key: "achievements",
      title: "Academic achievements",
      value: research.achievements,
    },
  ];
  return (
    <section
      id="research"
      className="page-section"
      aria-labelledby="research-title"
    >
      <Reveal>
        <SectionHeading
          id="research-title"
          number="03"
          command="open research.md"
          title="Asking better questions"
          description="Research begins with curiosity. Meaningful results come from careful evaluation."
        />
      </Reveal>
      <div className="research-grid">
        <Reveal>
          <TerminalCard
            command="$ cat research_interests.md"
            className="interests-card"
          >
            <div className="card-padding">
              <p className="code-comment">{"// directions worth exploring"}</p>
              <h3>Research interests</h3>
              <div className="research-interests">
                {research.interests.map((interest, index) => (
                  <div key={interest}>
                    <span className="muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{interest}</span>
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </div>
                ))}
              </div>
              {!research.interestsConfirmed && (
                <p className="section-footnote">
                  Suggested interests — awaiting confirmation.
                </p>
              )}
            </div>
          </TerminalCard>
        </Reveal>
        <Reveal>
          <div className="research-details">
            {details.map(({ key, Icon, title, value }) => (
              <div className="research-detail" key={title}>
                <Icon size={20} aria-hidden="true" />
                <div>
                  <h3>{title}</h3>
                  <p>{value}</p>
                  {!research.detailsConfirmed &&
                    !research.confirmedDetails.includes(key) && (
                      <span className="draft-label">Details to add</span>
                    )}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
      <Reveal>
        <div className="publications">
          <div className="subsection-heading">
            <h3>
              <FileText size={18} aria-hidden="true" /> Publications
            </h3>
            <span className="muted mono">
              {String(research.publications.length).padStart(2, "0")} entries
            </span>
          </div>
          {research.publications.length ? (
            research.publications.map((paper, index) => (
              <PublicationItem key={`${paper.title}-${index}`} paper={paper} />
            ))
          ) : (
            <div className="empty-state">
              <BookOpen size={25} aria-hidden="true" />
              <div>
                <h4>No publications listed yet</h4>
                <p>
                  Verified papers, preprints, and publication details will
                  appear here when added.
                </p>
              </div>
              <span className="empty-brackets" aria-hidden="true">
                [ ]
              </span>
            </div>
          )}
        </div>
      </Reveal>
    </section>
  );
}
