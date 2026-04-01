import type { Metadata } from "next";
import { playfair, orbitron, interTight } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "iAgent — Personal AI Agent Infrastructure by OrangePeel",
  description:
    "iAgent is a personal AI agent built without a framework — morning briefs, PDF processing, Bitcoin signal filtering. Open source. Evolved from OpenClaw. Get the free runbook.",
  openGraph: {
    title: "iAgent by OrangePeel",
    description:
      "Real AI agent infrastructure. No framework. No SaaS. Built and running in production.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${orbitron.variable} ${interTight.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#0d0d0d]/90 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <a
              href="#hero"
              className="font-[family-name:var(--font-orbitron)] text-sm font-bold tracking-wider text-[#f5f5f5]"
            >
              iAgent
            </a>
            <div className="flex items-center gap-8">
              <a
                href="#what-it-does"
                className="text-sm text-[#f5f5f5]/70 transition-colors hover:text-[#f5f5f5]"
              >
                What it does
              </a>
              <a
                href="#vs-openclaw"
                className="text-sm text-[#f5f5f5]/70 transition-colors hover:text-[#f5f5f5]"
              >
                vs OpenClaw
              </a>
              <a
                href="#get-runbook"
                className="text-sm text-[#f5f5f5]/70 transition-colors hover:text-[#f5f5f5]"
              >
                Get Runbook
              </a>
              <a
                href="https://github.com/man-orangepeel/iagent"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#f5f5f5]/70 transition-colors hover:text-[#f5f5f5]"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
