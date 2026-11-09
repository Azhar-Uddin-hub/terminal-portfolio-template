import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="not-found">
      <div>
        <span className="eyebrow">$ cd /unknown</span>
        <h1>404_</h1>
        <h2>Directory not found.</h2>
        <p>This page may have moved, or the path never existed.</p>
        <Link href="/" className="button button-primary">
          <ArrowLeft size={16} aria-hidden="true" /> Return home
        </Link>
      </div>
    </main>
  );
}
