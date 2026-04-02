"use client";

import { useState } from "react";

type Intention = "install" | "migrate";
type FormState = "idle" | "submitting" | "success";

const intentionOptions: { value: Intention; label: string }[] = [
  { value: "install", label: "Install iAgent from scratch" },
  { value: "migrate", label: "Migrate from OpenClaw" },
];

export default function RunbookForm() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [intention, setIntention] = useState<Intention | "">("");
  const [bitcoin, setBitcoin] = useState(false);
  const [state, setState] = useState<FormState>("idle");
  const [submittedBitcoin, setSubmittedBitcoin] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!firstName || !email || !intention) return;

    setState("submitting");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, email, intention, bitcoin }),
      });

      if (res.ok) {
        setSubmittedBitcoin(bitcoin);
        setState("success");
      } else {
        setState("idle");
      }
    } catch {
      setState("idle");
    }
  }

  if (state === "success") {
    return (
      <div className="text-center">
        <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#f5f5f5]">
          Check your inbox.
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-[#f5f5f5]/80">
          The runbook is on its way.
        </p>

        {submittedBitcoin && (
          <div className="mt-8 rounded-md border border-[#ed760a]/30 bg-[#0d0d0d] p-6">
            <p className="text-sm font-medium text-[#f5f5f5]/70">
              Nothing changes — the runbook is still on its way.
            </p>
            <p className="mt-2 text-lg font-bold text-[#ed760a]">
              And yes, let&rsquo;s talk Bitcoin.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#f5f5f5]/60">
              OrangePeel Flow is a live pipeline powered by iAgent — Bitcoin
              news, filtered and published daily to Telegram. Channel in
              French. See what the agent can do.
            </p>
            <p className="mt-2 text-sm text-[#f5f5f5]/50">
              Want to connect? Reach out on LinkedIn.
            </p>
            <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href="https://t.me/OrangePeel_Flow"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#ed760a] px-8 py-3 text-sm font-bold text-black rounded-sm transition-colors hover:bg-[#efa813]"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0h-.056Zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635Z"/>
                </svg>
                OrangePeel Flow
              </a>
              <a
                href="https://www.linkedin.com/in/manuelproquin/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#f5f5f5]/30 px-8 py-3 text-sm font-medium text-[#f5f5f5] rounded-sm transition-colors hover:border-[#f5f5f5]/60"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        )}
      </div>
    );
  }

  const inputClasses =
    "w-full rounded-sm border border-white/10 bg-[#0d0d0d] px-4 py-3 text-sm text-[#f5f5f5] placeholder-[#6b7280] outline-none transition-colors focus:border-[#ed760a]";

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md text-left">
      {/* First name */}
      <label className="block">
        <span className="text-sm text-[#f5f5f5]/80">
          First name, alias, whatever works <span className="text-[#ed760a]">*</span>
        </span>
        <input
          type="text"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="How should we call you?"
          className={`mt-2 ${inputClasses}`}
        />
      </label>

      {/* Email */}
      <label className="mt-5 block">
        <span className="text-sm text-[#f5f5f5]/80">
          Email address <span className="text-[#ed760a]">*</span>
        </span>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className={`mt-2 ${inputClasses}`}
        />
      </label>

      {/* Intention radio */}
      <fieldset className="mt-5">
        <legend className="text-sm text-[#f5f5f5]/80">
          I want to... <span className="text-[#ed760a]">*</span>
        </legend>
        <div className="mt-3 space-y-3">
          {intentionOptions.map(({ value, label }) => (
            <label key={value} className="flex cursor-pointer items-center gap-3">
              <span className="relative flex h-5 w-5 items-center justify-center">
                <span
                  className={`block h-5 w-5 rounded-full border-2 transition-colors ${
                    intention === value
                      ? "border-[#ed760a]"
                      : "border-white/20"
                  }`}
                />
                {intention === value && (
                  <span className="absolute h-2.5 w-2.5 rounded-full bg-[#ed760a]" />
                )}
                <input
                  type="radio"
                  name="intention"
                  value={value}
                  required
                  checked={intention === value}
                  onChange={() => setIntention(value)}
                  className="sr-only"
                />
              </span>
              <span className="text-sm text-[#f5f5f5]/80">{label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Bitcoin checkbox */}
      <label className="mt-5 flex cursor-pointer items-center gap-3">
        <span className="relative flex h-5 w-5 items-center justify-center">
          <span
            className={`block h-5 w-5 rounded-sm border-2 transition-colors ${
              bitcoin ? "border-[#ed760a] bg-[#ed760a]" : "border-white/20"
            }`}
          />
          {bitcoin && (
            <svg
              className="absolute h-3 w-3 text-black"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 6l3 3 5-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          <input
            type="checkbox"
            checked={bitcoin}
            onChange={(e) => setBitcoin(e.target.checked)}
            className="sr-only"
          />
        </span>
        <span className="text-sm text-[#f5f5f5]/80">
          I&rsquo;m into Bitcoin — happy to connect on that too
        </span>
      </label>

      {/* Submit */}
      <button
        type="submit"
        disabled={state === "submitting"}
        className="mt-8 w-full bg-[#ed760a] px-8 py-3 text-sm font-bold text-black rounded-sm transition-colors hover:bg-[#efa813] disabled:opacity-50"
      >
        {state === "submitting" ? "Sending..." : "Send me the Runbook →"}
      </button>

      {/* Legal */}
      <p className="mt-4 text-center text-xs leading-relaxed text-[#6b7280]">
        No spam. One runbook. Occasional updates on iAgent and related
        resources. Unsubscribe anytime.
      </p>
    </form>
  );
}
