import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { portfolio } from "@/data/portfolio";
import { MotionProvider } from "@/components/providers/MotionProvider";
import "./globals.css";

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});
const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});
const siteUrl = portfolio.siteUrl ? new URL(portfolio.siteUrl) : undefined;
const title = `${portfolio.name} | Portfolio`;
const description = portfolio.intro;

export const metadata: Metadata = {
  title: { default: title, template: `%s | ${portfolio.name}` },
  description,
  ...(siteUrl ? { metadataBase: siteUrl, alternates: { canonical: "/" } } : {}),
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    siteName: `${portfolio.name} — Portfolio`,
    ...(siteUrl ? { url: siteUrl } : {}),
  },
  twitter: { card: "summary", title, description },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#080808" },
    { media: "(prefers-color-scheme: light)", color: "#f4f7f3" },
  ],
};

const themeScript = `(function(){try{document.documentElement.dataset.theme=localStorage.getItem('portfolio-theme')==='light'?'light':'dark'}catch(e){document.documentElement.dataset.theme='dark'}})()`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${sans.variable} ${mono.variable}`}>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
