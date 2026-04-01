export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        id="hero"
        className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 text-center"
      >
        {/* Gradient background glow */}
        <div
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[900px] opacity-[0.15] blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, #ffbe2e 0%, #ed760a 50%, #c05800 100%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-3xl">
          {/* Eyebrow */}
          <p className="font-[family-name:var(--font-orbitron)] text-sm tracking-widest uppercase text-[#ed760a]">
            Open Source · No Framework · Running in Production
          </p>

          {/* H1 */}
          <h1 className="mt-6 font-[family-name:var(--font-playfair)] text-5xl leading-tight font-bold tracking-tight text-[#f5f5f5] sm:text-6xl">
            A personal AI agent.
            <br />
            Built to actually work.
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#f5f5f5]/85">
            iAgent is the infrastructure I run every day — morning briefs,
            document processing, Bitcoin signal filtering. Extracted from a real
            production system. Available for free.
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
          <p className="mt-8 text-xs tracking-wide text-[#f5f5f5]/60">
            Evolved from OpenClaw · Maintained by OrangePeel · No vendor lock-in
          </p>
        </div>
      </section>
    </>
  );
}
