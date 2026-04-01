"use client";

import { useState } from "react";

type Profile = "tech" | "non-tech" | "bitcoin";
type FormState = "idle" | "submitting" | "success";

const radioOptions: { value: Profile; label: string }[] = [
  { value: "tech", label: "I'm technical — show me the code" },
  { value: "non-tech", label: "I'm not technical — I just want it to work" },
  { value: "bitcoin", label: "I work in Bitcoin" },
];

export default function RunbookForm() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState<Profile | "">("");
  const [state, setState] = useState<FormState>("idle");
  const [submittedProfile, setSubmittedProfile] = useState<Profile | "">("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !profile) return;

    setState("submitting");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, email, profile }),
      });

      if (res.ok) {
        setSubmittedProfile(profile);
        setState("success");
      } else {
        setState("idle");
      }
    } catch {
      setState("idle");
    }
  }

  if (state === "success" && submittedProfile === "bitcoin") {
    return (
      <div className="text-center">
        <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#f5f5f5]">
          Let&rsquo;s talk directly.
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-[#f5f5f5]/80">
          No calendar links. No forms. Reach me on LinkedIn or Telegram.
        </p>
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="https://www.linkedin.com/in/manuelproquin/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#ed760a] px-8 py-3 text-sm font-bold text-black rounded-sm transition-colors hover:bg-[#efa813]"
          >
            LinkedIn →
          </a>
          <a
            href="https://t.me/OrangePeel_Flow"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-[#f5f5f5]/30 px-8 py-3 text-sm font-medium text-[#f5f5f5] rounded-sm transition-colors hover:border-[#f5f5f5]/60"
          >
            Telegram →
          </a>
        </div>
      </div>
    );
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

      {/* Profile radio */}
      <fieldset className="mt-5">
        <legend className="text-sm text-[#f5f5f5]/80">
          I am... <span className="text-[#ed760a]">*</span>
        </legend>
        <div className="mt-3 space-y-3">
          {radioOptions.map(({ value, label }) => (
            <label key={value} className="flex cursor-pointer items-center gap-3">
              <span className="relative flex h-5 w-5 items-center justify-center">
                <span
                  className={`block h-5 w-5 rounded-full border-2 transition-colors ${
                    profile === value
                      ? "border-[#ed760a]"
                      : "border-white/20"
                  }`}
                />
                {profile === value && (
                  <span className="absolute h-2.5 w-2.5 rounded-full bg-[#ed760a]" />
                )}
                <input
                  type="radio"
                  name="profile"
                  value={value}
                  required
                  checked={profile === value}
                  onChange={() => setProfile(value)}
                  className="sr-only"
                />
              </span>
              <span className="text-sm text-[#f5f5f5]/80">{label}</span>
            </label>
          ))}
        </div>
      </fieldset>

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
