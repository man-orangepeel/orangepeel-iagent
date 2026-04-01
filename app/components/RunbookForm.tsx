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
    if (!email || !intention) return;

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
              <br />
              And yes, let&rsquo;s talk Bitcoin.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#f5f5f5]/60">
              OrangePeel Flow is a live pipeline powered by iAgent — Bitcoin
              news, filtered and published daily to Telegram. See what the
              agent can do.
            </p>
            <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href="https://t.me/OrangePeel_Flow"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#ed760a] px-8 py-3 text-sm font-bold text-black rounded-sm transition-colors hover:bg-[#efa813]"
              >
                OrangePeel Flow →
              </a>
              <a
                href="https://www.linkedin.com/in/manuelproquin/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-[#f5f5f5]/30 px-8 py-3 text-sm font-medium text-[#f5f5f5] rounded-sm transition-colors hover:border-[#f5f5f5]/60"
              >
                LinkedIn →
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
        <span className="text-sm text-[#f5f5f5]/80">First name</span>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Your first name"
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
