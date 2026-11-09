export function SectionHeading({
  number,
  command,
  title,
  description,
  id,
}: {
  number: string;
  command: string;
  title: string;
  description?: string;
  id?: string;
}) {
  return (
    <header className="section-heading">
      <p className="eyebrow">
        <span>{number}</span> <span aria-hidden="true">/</span> {command}
      </p>
      <h2 id={id}>
        {title}
        <span className="accent">.</span>
      </h2>
      {description && <p className="section-description">{description}</p>}
    </header>
  );
}
