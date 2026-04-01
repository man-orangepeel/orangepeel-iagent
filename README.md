# iAgent — A personal AI agent. Built to actually work.

> Evolved from OpenClaw. Open source. Zero API cost if you already have Claude Pro or Max.
> Only Anthropic's servers — no third-party intermediaries.

**→ [Get the runbook — step-by-step install guide](https://www.orangepeel-iagent.fr)**

---

## Why iAgent instead of OpenClaw?

OpenClaw is what got many of us started. iAgent is the next step — same philosophy, different execution.

| | OpenClaw | iAgent |
|---|---|---|
| **LLM cost** | Paid API keys (per token) | Zero — uses your existing Claude Pro/Max subscription |
| **Code** | Closed (macOS app + Node.js) | 100% open, Python, readable line by line |
| **Data routing** | Transits OpenClaw servers + third parties | Anthropic only — no additional intermediaries |
| **Prompt injection** | No protection | Built-in heuristic detection module |
| **Security audit** | None | 35-point audit across 10 categories, one command |
| **Diagnostics** | None | 17-point doctor — auth, credentials, LaunchAgents, context budget |
| **Bash access** | Unrestricted | Whitelisted only (`rm`, `sudo`, `curl`: blocked) |
| **Dependencies** | Node.js, npm, proprietary gateway | Python + Claude CLI — that's it |

If you already have Claude Pro or Max: iAgent costs you nothing extra.

---

## What it does

- **Morning brief** — every day at 7:45, agenda + unread emails delivered to Telegram
- **Conversation** — answers questions, runs web searches, executes whitelisted Bash commands
- **Voice transcription** — transcribes Telegram voice messages locally via Whisper (no cloud)
- **Document processing** — extracts and analyzes PDF and DOCX files sent via Telegram
- **Gmail & Calendar** — reads on demand via `gog` CLI, OAuth-authenticated, tokens in macOS Keychain
- **Event reminders** — checks every 15 minutes, sends Telegram reminders for upcoming events
- **Long-term memory** — agent updates its own `identity/MEMORY.md` between conversations
- **Task queue** — persistent queue in `identity/QUEUE.md`, processed by the autonomous heartbeat

iAgent is the foundation. What you build on top of it is up to you.

---

## Stack

| Component | Technology |
|---|---|
| LLM | Claude Code CLI (Pro or Max subscription) |
| Interface | Telegram (polling — zero exposed webhook) |
| Email / Calendar | `gog` CLI (Google OAuth) |
| Voice transcription | Whisper (local, CPU) |
| Documents | `pdftotext` (poppler), `textutil` (macOS native) |
| Runtime | Python 3.11+, zero Node.js |

---

## Architecture

```
~/.iagent/
├── core/          — Claude CLI engine, sessions, context, env
├── gateway/       — Telegram (polling, whitelist, MD→HTML, voice, documents)
├── skills/        — gog, telegram, whisper, documents
├── projects/      — personal_assistant (brief, reminder) + custom projects
├── identity/      — personality, memory, tools (Markdown files, agent-maintained)
├── tasks/         — autonomous heartbeat
└── config/        — iagent.json
```

The agent reads its own `identity/` files at each session and updates them itself.
Memory persists between conversations.

---

## Security

iAgent ships with two production-grade diagnostic tools:

**`doctor.sh`** — 17 checks at startup or on demand:
Claude auth, credentials, LaunchAgents, context budget, config consistency, live Claude call, git backup.
```bash
bash scripts/doctor.sh           # full (~15s)
bash scripts/doctor.sh --quick   # no network call (~1s)
```

**`security-audit.sh`** — 35 checks across 10 categories:
credentials & tokens, prompt injection detection, Telegram access, excessive agency,
sessions, network exposure, supply chain.
```bash
bash scripts/security-audit.sh         # full audit
bash scripts/security-audit.sh --fix   # auto-fix permissions
```

Exit code `0` = acceptable posture. Exit code `1` = at least one critical or high finding.
Run after any configuration change.

---

## Prerequisites

| Requirement | Detail |
|---|---|
| macOS 14+ | Uses LaunchAgents, `textutil`, Keychain — not portable to Linux/Windows |
| Python 3.11+ | Main runtime |
| Claude Code CLI | LLM engine — requires active Claude Pro or Max subscription |
| Telegram account | Create a bot via BotFather, get token + chat_id |
| Google account | For Gmail and Calendar via `gog` CLI (OAuth) |
| Homebrew | Package manager for dependencies |

Optional: Whisper (voice), poppler (PDF), ffmpeg (audio processing), Git (auto-backup).

---

## Installation

Two paths:

**Manual install** — follow the step-by-step guide in [`docs/install/guide-installation.md`](docs/install/guide-installation.md)

**Automated runbook** — Claude Code handles the setup for you.
Get it at **[orangepeel-iagent.fr](https://www.orangepeel-iagent.fr)** — enter your email, receive the runbook immediately.

**Migration from OpenClaw** — guide in [`docs/migration/`](docs/migration/)

---

## Extending iAgent

iAgent is designed to be extended:

- **New skills** → add `skills/<name>/` + entry in `identity/TOOLS.md`
- **Custom projects** → add `projects/<name>/` (pipeline, monitoring, newsletter, automation)
- **Scheduled tasks** → LaunchAgents + entry in the heartbeat

The agent learns about new capabilities through its `identity/` files — no code changes required for most extensions.

---

## Not a developer?

The [AI Chief of Staff Bootcamp](https://aichiefofstaffbootcamp.netlify.app/) (Neon&Slate)
guides you through deploying your own AI agents in 4 weeks — emails, meetings, notes, content production — no technical background required.

---

*Open code. Anthropic only. Zero extra API cost.*