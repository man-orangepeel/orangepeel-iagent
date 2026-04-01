import { Sun, Mic, FileText, Mail } from "lucide-react";
import RunbookForm from "./components/RunbookForm";

const capabilities = [
  {
    icon: Mail,
    title: "Email & Calendar",
    body: "Ask iAgent to pull your unread emails or check your calendar. On demand, authenticated via Google — no data stored externally.",
  },
  {
    icon: Sun,
    title: "Morning Brief",
    body: "Every morning, a structured digest on your phone — agenda, unread emails, priorities. Before you open your laptop. Scheduling and reminders are configurable.",
  },
  {
    icon: Mic,
    title: "Voice",
    body: "Send a voice message instead of typing. iAgent transcribes it and acts on your instructions — the same way it would with text.",
  },
  {
    icon: FileText,
    title: "PDF & Documents",
    body: "Send a document. Get the content extracted and analyzed. No manual copy-paste, no upload to external services.",
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
            A personal AI agent — open, auditable, free to run if you already
            have a Claude subscription. No black box. No third-party
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
              View on GitHub →
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

          {/* Bottom note */}
          <div className="mt-12 text-sm leading-relaxed text-[#f5f5f5]/60">
            <p className="font-medium text-[#f5f5f5]/70">
              iAgent is a foundation — not a finished product.
            </p>
            <p className="mt-3">
              The architecture is open — build what fits your context.
            </p>
          </div>

          {/* OrangePeel Flow — proof of work */}
          <div className="mt-10 rounded-md border border-[#ed760a]/25 p-6"
            style={{
              background:
                "linear-gradient(135deg, #1a1e23 0%, #1c1a15 100%)",
            }}
          >
            <p className="font-[family-name:var(--font-orbitron)] text-xs tracking-widest uppercase text-[#ed760a]">
              Proof of work
            </p>
            <h3 className="mt-3 font-[family-name:var(--font-playfair)] text-xl font-bold text-[#f5f5f5]">
              OrangePeel Flow
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#f5f5f5]/80">
              A live pipeline powered by iAgent: automated scraping of selected
              Bitcoin sources, signal filtering, content generation, and direct
              publication to Telegram — every day, without intervention.
            </p>
            <p className="mt-2 text-sm text-[#f5f5f5]/60">
              One example of what you can build on top of the base agent.
            </p>
            <a
              href="https://t.me/OrangePeel_Flow"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block border border-[#ed760a] px-6 py-2.5 text-sm font-medium text-[#ed760a] rounded-sm transition-colors hover:bg-[#ed760a]/10"
            >
              See OrangePeel Flow on Telegram →
            </a>
          </div>

          {/* GitHub link */}
          <a
            href="https://github.com/man-orangepeel/iagent"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block text-sm font-medium text-[#ed760a] transition-colors hover:text-[#efa813]"
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
              className="text-sm text-[#f5f5f5]/60 transition-colors hover:text-[#f5f5f5]"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/manuelproquin/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#f5f5f5]/60 transition-colors hover:text-[#f5f5f5]"
            >
              LinkedIn
            </a>
            <a
              href="https://t.me/OrangePeel_Flow"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#f5f5f5]/60 transition-colors hover:text-[#f5f5f5]"
            >
              OrangePeel Flow
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
