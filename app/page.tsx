import { Sun, Mic, FileText, Mail } from "lucide-react";
import RunbookForm from "./components/RunbookForm";

const capabilities = [
  {
    icon: Mail,
    title: "Email & Calendar",
    body: "Connected to Gmail and Google Calendar, iAgent reads, summarizes, drafts replies, prepares new emails for review, and checks your schedule — on demand, no switching apps.",
  },
  {
    icon: Sun,
    title: "Morning Brief",
    body: "Every morning, a structured digest on your phone — agenda, unread emails, priorities. Quietly drinking your coffee. Scheduling and reminders are configurable.",
  },
  {
    icon: Mic,
    title: "Voice",
    body: "Send a voice message instead of typing. iAgent transcribes it and acts on your instructions — the same way it would with text.",
  },
  {
    icon: FileText,
    title: "PDF & Documents",
    body: "Send a document to your Telegram iAgent. Get the content extracted and analyzed. No manual copy-paste, no upload to external services.",
  },
] as const;

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        id="hero"
        className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-6 pb-12 text-center"
      >
        {/* Gradient background glow */}
        <div
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[900px] opacity-[0.08] blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse at 50% -20%, #ffbe2e 0%, #ed760a 50%, #c05800 100%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-3xl">
          {/* Eyebrow */}
          <p className="font-[family-name:var(--font-orbitron)] text-sm tracking-widest uppercase text-[#ed760a]">
            Open Source · No API Cost · Anthropic Only
          </p>

          {/* H1 */}
          <h1 className="mt-6 font-[family-name:var(--font-playfair)] text-5xl leading-tight font-bold tracking-tight text-[#f5f5f5] sm:text-6xl">
            OpenClaw was the idea.
            <br />
            iAgent is what it should have been.
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#f5f5f5]/85">
            A personal AI agent — open, auditable, zero extra API cost — already
            included in your Claude subscription. No black box. No third-party
            intermediaries. Built and running in production.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#get-runbook"
              className="bg-[#ed760a] px-8 py-3 text-sm font-bold text-black rounded-sm transition-colors hover:bg-[#efa813]"
            >
              Get the Runbook →
            </a>
            <a
              href="https://github.com/man-orangepeel/iagent"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#f5f5f5]/30 px-8 py-3 text-sm font-medium text-[#f5f5f5] rounded-sm transition-colors hover:border-[#f5f5f5]/60"
            >
              <svg className="inline-block h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              View on GitHub
            </a>
          </div>

          {/* Credibility line */}
          <p className="mt-8 text-sm tracking-wide text-[#f5f5f5]/70">
            Evolved from OpenClaw · 100% open source · Zero API cost · Anthropic only
          </p>
        </div>
      </section>

      {/* WHAT IT DOES */}
      <section id="what-it-does" className="bg-[#111518] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl">
          {/* Section label */}
          <p className="font-[family-name:var(--font-orbitron)] text-sm tracking-widest uppercase text-[#ed760a]">
            In production — every day
          </p>

          {/* Section headline */}
          <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight text-[#f5f5f5] sm:text-4xl">
            What iAgent does — on my machine.
          </h2>

          {/* Section subheadline */}
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#f5f5f5]/85">
            This isn&rsquo;t a demo. These are automations running in production.
          </p>

          {/* Cards grid */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {capabilities.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-md border border-white/10 bg-[#1a1e23] p-6 transition-transform duration-200 hover:scale-[1.02]"
              >
                <Icon className="h-6 w-6 text-[#ed760a]" aria-hidden="true" />
                <h3 className="mt-4 font-[family-name:var(--font-orbitron)] text-sm font-medium tracking-wide text-[#f5f5f5]">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#c9cdd3]">
                  {body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* BEYOND THE BASE */}
      <section id="extend" className="bg-[#0d0d0d] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl text-center">
          {/* Section label */}
          <p className="font-[family-name:var(--font-orbitron)] text-sm tracking-widest uppercase text-[#ed760a]">
            Beyond the base
          </p>

          {/* Section headline */}
          <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight text-[#f5f5f5] sm:text-4xl">
            iAgent starts as a discovery.
            <br />
            It ends as your infrastructure.
          </h2>

          {/* Section body */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#f5f5f5]/80">
            Running iAgent for the first time is an education — you understand
            what a personal AI agent actually does when it lives on your phone
            and your machine. Most people stop there. Some go further: custom
            pipelines, automated workflows, domain-specific monitoring. The
            architecture is open by design.
          </p>

          {/* OrangePeel Flow — proof of work */}
          <div className="mx-auto mt-14 max-w-2xl rounded-md border border-[#ed760a]/25 bg-[#111518] p-6 text-left">
            <p className="font-[family-name:var(--font-orbitron)] text-xs tracking-widest uppercase text-[#ed760a]">
              Proof of work
            </p>
            <h3 className="mt-3 font-[family-name:var(--font-playfair)] text-xl font-bold text-[#f5f5f5]">
              OrangePeel Flow
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#f5f5f5]/80">
              A live pipeline powered by iAgent: automated scraping of selected
              Bitcoin sources, signal filtering, content generation, and direct
              publication to Telegram — every day, without intervention. Channel
              in French.
            </p>
            <p className="mt-2 text-sm italic text-[#f5f5f5]/50">
              One example of what you can build on top of the base agent.
            </p>
            <a
              href="https://t.me/OrangePeel_Flow"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 border border-[#ed760a] px-6 py-2.5 text-sm font-medium text-[#ed760a] rounded-sm transition-colors hover:bg-[#ed760a]/10"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0h-.056Zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635Z"/></svg>
              See OrangePeel Flow on Telegram
            </a>
          </div>

          {/* GitHub link */}
          <a
            href="https://github.com/man-orangepeel/iagent"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#ed760a] transition-colors hover:text-[#efa813]"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            See the full source on GitHub
          </a>
        </div>
      </section>

      {/* VS OPENCLAW */}
      <section id="vs-openclaw" className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl">
          {/* Section label */}
          <p className="font-[family-name:var(--font-orbitron)] text-sm tracking-widest uppercase text-[#ed760a]">
            vs OpenClaw
          </p>

          {/* Section headline */}
          <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight text-[#f5f5f5] sm:text-4xl">
            You know OpenClaw. Here&rsquo;s what changed.
          </h2>

          {/* Section subheadline */}
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#f5f5f5]/85">
            iAgent started as an OpenClaw user&rsquo;s frustration. Same
            philosophy — your own agent, your own data. Different execution: open
            code, zero API cost, real security.
          </p>

          {/* Security context */}
          <div className="mt-10 rounded-md border border-white/10 bg-[#1a1e23] p-5">
            <p className="text-sm leading-relaxed text-[#c9cdd3]">
              OpenClaw has had security incidents. Your conversations transited
              their servers. With iAgent: every line of code is readable, Bash
              commands are whitelisted, and a full security audit runs in one
              command.
            </p>
          </div>

          {/* Comparison table */}
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-3 pr-6 font-[family-name:var(--font-orbitron)] text-xs tracking-wide text-[#f5f5f5]/60">
                    Feature
                  </th>
                  <th className="py-3 pr-6 font-[family-name:var(--font-orbitron)] text-xs tracking-wide text-[#f5f5f5]/60">
                    OpenClaw
                  </th>
                  <th className="py-3 font-[family-name:var(--font-orbitron)] text-xs tracking-wide text-[#ed760a]">
                    iAgent
                  </th>
                </tr>
              </thead>
              <tbody className="text-[#c9cdd3]">
                {[
                  ["LLM cost", "Paid API keys (per token)", "Zero — uses your Claude subscription"],
                  ["Code", "Closed (macOS app + Node.js)", "100% open, Python, readable line by line"],
                  ["Data routing", "Transits OpenClaw servers + third parties", "Anthropic only — no additional intermediaries"],
                  ["Security", "Black box, past incidents", "Audit-ready: 35 checks, whitelisted commands"],
                  ["Prompt injection", "No protection", "Built-in detection module"],
                  ["Bash access", "Unrestricted", "Whitelisted only (rm, sudo, curl: blocked)"],
                  ["Dependencies", "Node.js, npm, proprietary gateway", "Python + Claude CLI — that's it"],
                ].map(([feature, openclaw, iagent]) => (
                  <tr key={feature} className="border-b border-white/5">
                    <td className="py-3 pr-6 font-medium text-[#f5f5f5]">
                      {feature}
                    </td>
                    <td className="py-3 pr-6">{openclaw}</td>
                    <td className="py-3 text-[#f5f5f5]">{iagent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CTAs */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-sm text-[#f5f5f5]/60">Already on OpenClaw?</p>
              <a
                href="#get-runbook"
                className="mt-2 inline-block bg-[#ed760a] px-8 py-3 text-sm font-bold text-black rounded-sm transition-colors hover:bg-[#efa813]"
              >
                Migrate to iAgent →
              </a>
            </div>
            <div>
              <p className="text-sm text-[#f5f5f5]/60">
                Starting from scratch?
              </p>
              <a
                href="#get-runbook"
                className="mt-2 inline-block border border-[#f5f5f5]/30 px-8 py-3 text-sm font-medium text-[#f5f5f5] rounded-sm transition-colors hover:border-[#f5f5f5]/60"
              >
                Get started →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IS THIS FOR */}
      <section id="who-is-this-for" className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl">
          {/* Section label */}
          <p className="font-[family-name:var(--font-orbitron)] text-sm tracking-widest uppercase text-[#ed760a]">
            Get started
          </p>

          {/* Section headline */}
          <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight text-[#f5f5f5] sm:text-4xl">
            Three ways in.
          </h2>

          {/* Section subheadline */}
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#f5f5f5]/85">
            All you need: a Mac and a Claude subscription.
          </p>

          {/* 3 cards — progressive emphasis left → right */}
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {/* Card 1 — Do it yourself (most discreet) */}
            <div className="flex flex-col rounded-md border border-white/10 bg-[#111518] p-6">
              <h3 className="font-[family-name:var(--font-orbitron)] text-sm font-medium tracking-wide text-[#f5f5f5]">
                I&rsquo;ll set it up myself.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#f5f5f5]/60">
                The install guide is in the public repo. Step-by-step, no
                automation required.
              </p>
              <div className="mt-auto pt-6">
                <a
                  href="https://github.com/man-orangepeel/iagent/blob/main/docs/install/guide-installation.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#f5f5f5]/50 transition-colors hover:text-[#f5f5f5]/80"
                >
                  Read the guide →
                </a>
              </div>
            </div>

            {/* Card 2 — Guided install (intermediate) */}
            <div
              className="flex flex-col rounded-md border border-[#ed760a]/25 p-6"
              style={{
                background:
                  "linear-gradient(135deg, #1a1e23 0%, #1c1a15 100%)",
              }}
            >
              <h3 className="font-[family-name:var(--font-orbitron)] text-base font-medium tracking-wide text-[#f5f5f5]">
                I want it automated.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#f5f5f5]/70">
                Get the runbook — Claude Code handles the setup. You validate the
                key steps. That&rsquo;s it.
              </p>
              <div className="mt-auto pt-6">
                <a
                  href="#get-runbook"
                  className="inline-block border border-[#ed760a] px-8 py-3 text-sm font-medium text-[#ed760a] rounded-sm transition-colors hover:bg-[#ed760a]/10"
                >
                  Get the Runbook →
                </a>
              </div>
            </div>

            {/* Card 3 — Bootcamp (most prominent) */}
            <div className="flex flex-col rounded-md border border-[#ed760a]/40 bg-[#1a1200] p-6">
              <h3 className="font-[family-name:var(--font-orbitron)] text-base font-medium tracking-wide text-[#ed760a]">
                I want something more powerful.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#f5f5f5]/80">
                The AI Chief of Staff Bootcamp guides you in 4 weeks. Custom to
                your role, your tools, your context. No technical background
                required.
              </p>
              <div className="mt-auto pt-6">
                <a
                  href="https://aichiefofstaffbootcamp.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#ed760a] px-8 py-3 text-sm font-bold text-black rounded-sm transition-colors hover:bg-[#efa813]"
                >
                  Discover the Bootcamp →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GET THE RUNBOOK */}
      <section id="get-runbook" className="bg-[#111518] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          {/* Section label */}
          <p className="font-[family-name:var(--font-orbitron)] text-sm tracking-widest uppercase text-[#ed760a]">
            Runbook
          </p>

          {/* Section headline */}
          <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight text-[#f5f5f5] sm:text-4xl">
            Get the Runbook. It&rsquo;s free.
          </h2>

          {/* Section subheadline */}
          <p className="mt-4 text-lg leading-relaxed text-[#f5f5f5]/85">
            Claude Code installs iAgent for you — step by step. Enter your
            email. Receive the runbook. Open it with Claude Code.
          </p>

          {/* Form */}
          <div className="mt-10">
            <RunbookForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          <p className="text-sm text-[#f5f5f5]/70">
            Built by OrangePeel. Open source. Anthropic only.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/man-orangepeel/iagent"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f5f5f5]/60 transition-colors hover:text-[#f5f5f5]"
              aria-label="GitHub"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </a>
            <a
              href="https://orangepeel.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#f5f5f5]/60 transition-colors hover:text-[#f5f5f5]"
            >
              orangepeel.fr
            </a>
            <a
              href="https://www.linkedin.com/in/manuelproquin/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f5f5f5]/60 transition-colors hover:text-[#f5f5f5]"
              aria-label="LinkedIn"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z"/></svg>
            </a>
            <a
              href="https://t.me/OrangePeel_Flow"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f5f5f5]/60 transition-colors hover:text-[#f5f5f5]"
              aria-label="OrangePeel Flow on Telegram"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0h-.056Zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635Z"/></svg>
            </a>
          </div>
          <p className="text-xs text-[#6b7280]">
            © OrangePeel. Open source under MIT License.
          </p>
        </div>
      </footer>
    </>
  );
}
