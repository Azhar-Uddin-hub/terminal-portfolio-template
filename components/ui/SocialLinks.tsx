import { Code2, Globe, Mail, Users } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export function SocialLinks() {
  const links = [
    { label: "GitHub", href: portfolio.githubUrl, Icon: Code2 },
    { label: "LinkedIn", href: portfolio.linkedinUrl, Icon: Users },
    {
      label: "Email",
      href: portfolio.email ? `mailto:${portfolio.email}` : "",
      Icon: Mail,
    },
    ...(portfolio.websiteUrl
      ? [{ label: "Website", href: portfolio.websiteUrl, Icon: Globe }]
      : []),
  ];
  return (
    <div className="social-links" aria-label="Social profiles">
      {links.map(({ label, href, Icon }) =>
        href ? (
          <a
            key={label}
            className="social-link"
            href={href}
            aria-label={label}
            title={label}
            {...(href.startsWith("https://")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            <Icon size={21} aria-hidden="true" />
          </a>
        ) : (
          <span
            key={label}
            className="social-link unconfigured"
            role="img"
            aria-label={`${label} not added yet`}
            title={`${label} — not added yet`}
          >
            <Icon size={21} aria-hidden="true" />
          </span>
        ),
      )}
    </div>
  );
}
