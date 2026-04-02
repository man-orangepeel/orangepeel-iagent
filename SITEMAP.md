# SITEMAP — orangepeel-iagent.fr
> Architecture détaillée section par section.
> Dernière mise à jour : 2026-04-02 — aligné sur l'état réel du site déployé.
> Langue : anglais intégral. One-page avec ancres.

---

## Structure globale

```
/
├── #hero                  ← bg #0d0d0d
├── #what-it-does          ← bg #111518 — 4 capability cards
├── #vs-openclaw           ← bg #0d0d0d — tableau comparatif + 2 CTA
├── #extend + #who-is-this-for  ← bg #111518 — Already ahead + OPF + Ollama + 3 cards Get started
├── #get-runbook           ← bg #0d0d0d — formulaire natif Next.js → API Brevo
└── footer                 ← bg #0d0d0d — GitHub · orangepeel.fr · LinkedIn · Telegram
```

---

## Section 1 — Hero `#hero` (bg #0d0d0d)

**Objectif :** capter l'attention en < 5 secondes. Poser iAgent comme proof of work sérieux.

### Éléments

| Élément | Contenu |
|---|---|
| Eyebrow | `Open Source · No API Cost · Anthropic Only` |
| H1 | `OpenClaw was the idea. iAgent is the sovereign evolution.` |
| Subheadline | 4 lignes forcées via `<br>` |
| CTA primaire | `Get the Runbook →` → ancre `#get-runbook` |
| CTA secondaire | `View on GitHub` (icône GitHub) → github.com/man-orangepeel/iagent |
| Signal de crédibilité | `Evolved from OpenClaw · Hardened security · Zero API cost · Anthropic only` |

### Design
- Gradient radial orange en glow, réduit (400px, opacity 0.06), positionné haut (-200px)
- Police Playfair text-5xl pour H1, Orbitron pour eyebrow

---

## Section 2 — What it does `#what-it-does` (bg #111518)

**Objectif :** prouver concrètement ce que l'agent fait. Proof of work visible.

### 4 capability cards (grille 2x2)

| # | Icon | Titre | Description |
|---|---|---|---|
| 1 | Mail | Email & Calendar | Gmail + Google Calendar — reads, summarizes, drafts, schedules |
| 2 | Sun | Morning Brief | Structured digest — agenda, emails, priorities. Quietly drinking your coffee. |
| 3 | Mic | Voice | Voice message → transcription → action |
| 4 | FileText | PDF & Documents | Send to Telegram iAgent, extraction + analysis |

---

## Section 3 — vs OpenClaw `#vs-openclaw` (bg #0d0d0d)

**Objectif :** capturer le trafic OpenClaw, montrer l'évolution.

### Headline
`OpenClaw had the right idea. Here's what we fixed.`

### Subheadline (forced line break)
`iAgent started as an OpenClaw user's frustration. Same philosophy — your own agent, your own data.`
`Different execution: open code, zero API cost, real security.`

### Tableau comparatif (7 lignes)

| Feature | OpenClaw | iAgent |
|---|---|---|
| LLM cost | Paid API keys (per token) | Zero — uses your Claude subscription |
| Code | Closed (macOS app + Node.js) | 100% open, Python, readable |
| Data routing | Transits OpenClaw servers + third parties | Anthropic only |
| Security | Black box, past incidents | Audit-ready: 35 checks, whitelisted commands |
| Prompt injection | No protection | Built-in detection module |
| Bash access | Unrestricted | Whitelisted only |
| Dependencies | Node.js, npm, proprietary gateway | Python + Claude CLI |

### 2 CTA sous le tableau
- Gauche : `Already on OpenClaw?` → `Migrate to iAgent →`
- Droite : `Starting from scratch?` → `Get started →`

---

## Section 4 — Already ahead + Who is this for (bg #111518)

Section unique avec divider orange entre les deux blocs.

### Already ahead `#extend`

- Label : `Already ahead`
- Headline : `Most people talk about AI agents. You'll have one running.`
- Body : text about moving from "interesting" to "installed"

#### OrangePeel Flow (card, bg #0d0d0d, border orange)
- Label : `Proof of work`
- Titre : `OrangePeel Flow`
- Description : pipeline Bitcoin automatisé, channel in French
- CTA (icône Telegram) : `See OrangePeel Flow on Telegram →`

#### Full sovereignty (card, bg #0d0d0d, border orange)
- Label (icône bouclier) : `Full sovereignty`
- Titre : `Go fully offline`
- Description : remplacement Claude CLI par Ollama, full offline, open source
- CTA : `Discover Ollama →` → ollama.com

### Divider orange (1px, opacity 20%)

### Who is this for `#who-is-this-for`

- Label : `Get started`
- Headline : `Three ways in.`
- Subheadline : `All you need: a Mac and a Claude subscription.`

#### 3 cards (emphase croissante gauche → droite)

| Card | Titre | CTA | Style |
|---|---|---|---|
| A — DIY | I'll set it up myself. | `Read the guide →` (lien GitHub) | Discret, bg #0d0d0d |
| B — Runbook | I want it automated. | `Get the Runbook →` (ancre) | Intermédiaire, border orange, gradient |
| C — Bootcamp | I want something more powerful. | `Discover the Bootcamp →` (lien externe) | Prominent, fond sombre doré |

---

## Section 5 — Get the Runbook `#get-runbook` (bg #0d0d0d)

**Objectif :** collecter email + qualifier le profil. Point de conversion unique.

### Formulaire natif (composant RunbookForm.tsx)

| Champ | Type | Requis |
|---|---|---|
| First name | text | oui |
| Email address | email | oui |
| I want to... | radio (install / migrate) | oui |
| Bitcoin | checkbox | non |

### Post-soumission
- Message : `Check your inbox. The runbook is on its way.`
- Si bitcoin coché : encart orange avec :
  - `And yes, let's talk Bitcoin.` (en orange, gras)
  - Description OrangePeel Flow
  - `Want to connect? Reach out on LinkedIn.`
  - CTA primaire : `OrangePeel Flow` (icône Telegram)
  - CTA secondaire : `LinkedIn` (icône LinkedIn)

### Backend — API route `app/api/subscribe/route.ts`

```
POST /api/subscribe
  ├── 1. Validation (firstName + email + intention requis)
  ├── 2. Email transactionnel Brevo (POST /v3/smtp/email)
  │     └── templateId selon intention (install / migrate)
  │     └── params: { PRENOM: firstName }
  ├── 3. Création/MàJ contact Brevo (POST /v3/contacts)
  │     └── listIds selon intention, attributes: { PRENOM: firstName }
  ├── 4. Si bitcoin → ajout liste bitcoin (POST /v3/contacts/lists/{listId}/contacts/add)
  │     └── + log [BITCOIN LEAD]
  └── 5. Retour { success: true/false }
```

### Variables d'environnement (Vercel)

| Variable | Usage | Valeur |
|---|---|---|
| `BREVO_API_KEY` | Clé API Brevo | — |
| `BREVO_TEMPLATE_INSTALL` | ID template email install | 1 |
| `BREVO_TEMPLATE_MIGRATION` | ID template email migration | 2 |
| `BREVO_LIST_INSTALL` | ID liste CRM install | 3 |
| `BREVO_LIST_MIGRATION` | ID liste CRM migration | 4 |
| `BREVO_LIST_BITCOIN` | ID liste CRM bitcoin | 5 |

---

## Footer (bg #0d0d0d)

| Élément | Valeur |
|---|---|
| Tagline | `Built by OrangePeel. Open source. Anthropic only.` |
| Lien 1 | GitHub (icône SVG) → github.com/man-orangepeel/iagent |
| Lien 2 | orangepeel.fr (texte) → orangepeel.fr |
| Lien 3 | LinkedIn (icône SVG) → linkedin.com/in/manuelproquin |
| Lien 4 | OrangePeel Flow (icône Telegram SVG) → t.me/OrangePeel_Flow |
| Copyright | `© OrangePeel. Open source under MIT License.` |

---

## Navigation (sticky header)

```
What it does | vs OpenClaw | Get Runbook | GitHub (icône SVG)
```

---

## Meta / SEO

| Champ | Valeur |
|---|---|
| Title tag | `iAgent — Personal AI Agent Infrastructure by OrangePeel` |
| Meta description | `iAgent is a personal AI agent built without a framework — morning briefs, PDF processing, Bitcoin signal filtering. Open source. Evolved from OpenClaw. Get the free runbook.` |
| OG Title | `iAgent by OrangePeel` |
| OG Description | `Real AI agent infrastructure. No framework. No SaaS. Anthropic only — no third-party intermediaries.` |

---

## Stack technique

| Composant | Technologie |
|---|---|
| Framework | Next.js 16 (App Router) |
| Hébergement | Vercel |
| Emails transactionnels | Brevo API (v3/smtp/email) |
| CRM / Listes | Brevo API (v3/contacts, v3/contacts/lists) |
| Formulaire | Natif React (RunbookForm.tsx) |
| Design system | Tailwind CSS, fonts Playfair Display + Orbitron + Inter Tight |
| Icônes | Lucide React + SVG inline (GitHub, Telegram, LinkedIn, Shield) |
