import { Terminal } from "lucide-react";

export function TerminalHeader({
  command,
  label,
}: {
  command: string;
  label?: string;
}) {
  return (
    <div className="terminal-header">
      <span className="traffic-lights" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span className="terminal-command">{command}</span>
      {label && <span className="terminal-label">{label}</span>}
      <Terminal size={15} aria-hidden="true" className="terminal-symbol" />
    </div>
  );
}

export function TerminalCard({
  children,
  command,
  className = "",
}: {
  children: React.ReactNode;
  command: string;
  className?: string;
}) {
  return (
    <div className={`terminal-card ${className}`}>
      <TerminalHeader command={command} />
      {children}
    </div>
  );
}
