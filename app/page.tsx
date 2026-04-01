import { Sun, Mic, FileText, Mail } from "lucide-react";
import RunbookForm from "./components/RunbookForm";

const capabilities = [
  {
    icon: Sun,
    title: "Morning Brief",
    body: "Every morning at 7:45, a structured digest on your phone — agenda, unread emails, priorities. Before you open your laptop.",
  },
  {
    icon: Mic,
    title: "Voice Transcription",
    body: "Send a voice message on Telegram. iAgent transcribes it locally via Whisper — no cloud, no third party.",
  },
  {
    icon: FileText,
    title: "PDF & DOCX Processing",
    body: "Send a document. Get the content extracted and analyzed. Handled natively — no copy-paste, no upload to external services.",
  },
  {
    icon: Mail,
    title: "Email & Calendar",
    body: "Reads your Gmail and Google Calendar on demand. OAuth-authenticated, tokens stored in your macOS Keychain.",
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
            Open Source · No API Cost · Your Data Stays on Your Machine
          </p>

          {/* H1 */}
          <h1 className="mt-6 font-[family-name:var(--font-playfair)] text-5xl leading-tight font-bold tracking-tight text-[#f5f5f5] sm:text-6xl">
            OpenClaw was the idea.
            <br />
            iAgent is what it should have been.
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#f5f5f5]/85">
            A personal AI agent — open, auditable, free to run if you already
            have Claude Pro or Max. No black box. No third-party intermediaries.
            Anthropic only. Built and running in production.
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
              View on GitHub →
            </a>
          </div>

          {/* Credibility line */}
          <p className="mt-8 text-sm tracking-wide text-[#f5f5f5]/70">
            Evolved from OpenClaw · 100% open source · Zero API cost · Your machine, your data
          </p>
        </div>
      </section>

      {/* WHAT IT DOES */}
      <section id="what-it-does" className="bg-[#111518] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl">
          {/* Section label */}
          <p className="font-[family-name:var(--font-orbitron)] text-sm tracking-widest uppercase text-[#ed760a]">
            Capabilities
          </p>

          {/* Section headline */}
          <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight text-[#f5f5f5] sm:text-4xl">
            What iAgent does — every day, on my machine.
          </h2>

          {/* Section subheadline */}
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#f5f5f5]/85">
            This isn&rsquo;t a demo. These are the automations running in production.
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

          {/* Bottom note */}
          <p className="mt-12 text-sm italic leading-relaxed text-[#f5f5f5]/60">
            This is what iAgent does on my machine, every day.
            <br />
            The Bitcoin monitoring layer runs on top of this — built by me, not
            included.
            <br />
            That&rsquo;s the point: iAgent is the foundation. You extend it.
          </p>

          {/* GitHub link */}
          <a
            href="https://github.com/man-orangepeel/iagent"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-medium text-[#ed760a] transition-colors hover:text-[#efa813]"
          >
            See the full source on GitHub →
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
            code, zero API cost, documented security.
          </p>

          {/* Security context */}
          <div className="mt-10 rounded-md border border-white/10 bg-[#1a1e23] p-5">
            <p className="text-sm leading-relaxed text-[#c9cdd3]">
              OpenClaw has had security incidents. Your conversations transited
              their servers. With iAgent: the code is 100% readable, the surface
              area is minimal, and a 35-point security audit runs in one command.
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
                  ["LLM cost", "Paid API keys (per token)", "Zero — uses your Claude Pro/Max subscription"],
                  ["Code", "Closed (macOS app + Node.js)", "100% open, Python, readable line by line"],
                  ["Your data", "Transits OpenClaw servers", "Anthropic only — no additional intermediaries"],
                  ["Security", "Black box, past incidents", "35-point audit, whitelisted commands, open to inspect"],
                  ["Dependencies", "Node.js, npm, proprietary gateway", "Python + Claude CLI — that's it"],
                  ["Bash access", "Unrestricted", "Whitelisted commands only (rm, sudo, curl: blocked)"],
                  ["Documentation", "Minimal", "Full runbook — install + migration"],
                  ["Identity init", "Manual", "Guided (agent configures itself, deletes bootstrap)"],
                  ["Maintenance", "Inactive", "Active (OrangePeel)"],
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
                Install from zero →
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
            Audience
          </p>

          {/* Section headline */}
          <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight text-[#f5f5f5] sm:text-4xl">
            If you have a Mac and a Claude subscription — you can run this.
          </h2>

          {/* Section subheadline */}
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#f5f5f5]/85">
            The runbook handles the technical setup. You don&rsquo;t need to be a
            developer.
          </p>

          {/* Audience cards */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {/* Card A — Tech / Bitcoin */}
            <div className="rounded-md border border-[#ed760a]/30 bg-[#111518] p-6">
              <h3 className="font-[family-name:var(--font-orbitron)] text-sm font-medium tracking-wide text-[#f5f5f5]">
                You build or evaluate AI systems.
              </h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#f5f5f5]/80">
                <li>
                  — You want to see real agent architecture — no framework, no
                  abstraction
                </li>
                <li>
                  — You&rsquo;re considering what OrangePeel can build for your
                  stack
                </li>
                <li>
                  — iAgent is the proof of work. The Bitcoin monitoring layer is
                  in production on top of it.
                </li>
              </ul>
              <a
                href="#get-runbook"
                className="mt-6 inline-block bg-[#ed760a] px-8 py-3 text-sm font-bold text-black rounded-sm transition-colors hover:bg-[#efa813]"
              >
                Let&rsquo;s talk →
              </a>
            </div>

            {/* Card B — Non-tech / Executive */}
            <div className="rounded-md border border-white/10 bg-[#111518] p-6">
              <h3 className="font-[family-name:var(--font-orbitron)] text-sm font-medium tracking-wide text-[#f5f5f5]">
                You want an AI agent — without becoming a developer.
              </h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#f5f5f5]/80">
                <li>
                  — You have a Mac and a Claude Pro or Max subscription
                </li>
                <li>
                  — You&rsquo;re comfortable opening a terminal once, with a
                  guide
                </li>
                <li>
                  — After that: your agent runs, briefs you, reads your emails —
                  every day, automatically
                </li>
              </ul>
              <a
                href="#get-runbook"
                className="mt-6 inline-block border border-[#f5f5f5]/30 px-8 py-3 text-sm font-medium text-[#f5f5f5] rounded-sm transition-colors hover:border-[#f5f5f5]/60"
              >
                Get the free Runbook →
              </a>
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
            Step-by-step installation guide. Migration path from OpenClaw. Works
            if you&rsquo;re technical. Works if you&rsquo;re not. Delivered to
            your inbox immediately.
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
            Built by OrangePeel. Open source. Anthropic only — no third-party
            intermediaries.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/man-orangepeel/iagent"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#f5f5f5]/60 transition-colors hover:text-[#f5f5f5]"
            >
              GitHub
            </a>
            <a
              href="https://orangepeel.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#f5f5f5]/60 transition-colors hover:text-[#f5f5f5]"
            >
              OrangePeel
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
