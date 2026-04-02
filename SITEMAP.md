# SITEMAP — orangepeel-iagent.fr
> Architecture détaillée section par section.
> Dernière mise à jour : 2026-04-02 — aligné sur l'état réel du site déployé.
> Langue : anglais intégral. One-page avec ancres.

---

## Structure globale

```
/
├── #hero
├── #what-it-does         ← 4 capability cards + OrangePeel Flow proof of work
├── #vs-openclaw           ← tableau comparatif + 2 CTA (migrate / install)
├── #who-is-this-for       ← 3 cards progressives (DIY / Runbook / Bootcamp)
├── #get-runbook           ← formulaire natif Next.js → API Brevo
└── footer                 ← GitHub · LinkedIn · OrangePeel Flow
```

---

## Section 1 — Hero `#hero`

**Objectif :** capter l'attention en < 5 secondes. Poser iAgent comme proof of work sérieux.

### Éléments

| Élément | Contenu |
|---|---|
| Eyebrow | `Open Source · No API Cost · Anthropic Only` |
| H1 | `OpenClaw was the idea. iAgent is what it should have been.` |
| Subheadline | Personal AI agent, open, auditable, free with Claude subscription |
| CTA primaire | `Get the Runbook →` → ancre `#get-runbook` |
| CTA secondaire | `View on GitHub →` → https://github.com/man-orangepeel/iagent |
| Signal de crédibilité | `Evolved from OpenClaw · 100% open source · Zero API cost · Anthropic only` |

### Design
- Fond sombre avec gradient radial orange en glow
- Police Playfair pour H1, Orbitron pour eyebrow

---

## Section 2 — What it does `#what-it-does`

**Objectif :** prouver concrètement ce que l'agent fait. Proof of work visible.

### 4 capability cards (grille 2x2)

| # | Icon | Titre | Description |
|---|---|---|---|
| 1 | Mail | Email & Calendar | Pull unread emails, check calendar — on demand via Google |
| 2 | Sun | Morning Brief | Structured digest every morning — agenda, emails, priorities |
| 3 | Mic | Voice | Voice message → transcription → action |
| 4 | FileText | PDF & Documents | Document extraction and analysis, no external upload |

### OrangePeel Flow — Proof of work (encart mis en valeur)

Encart avec bordure orange, gradient subtil :
- Label : `Proof of work`
- Titre : `OrangePeel Flow`
- Description : pipeline Bitcoin automatisé (scraping, filtrage, publication Telegram)
- CTA : `See OrangePeel Flow on Telegram →` → https://t.me/OrangePeel_Flow

### Lien bas de section
`See the full source on GitHub →`

---

## Section 3 — iAgent vs OpenClaw `#vs-openclaw`

**Objectif :** capturer le trafic OpenClaw, montrer l'évolution.

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

## Section 4 — Who is this for `#who-is-this-for`

**Objectif :** 3 niveaux d'engagement progressifs.

### 3 cards (emphase croissante gauche → droite)

| Card | Titre | CTA | Style |
|---|---|---|---|
| A — DIY | I'll set it up myself. | `Read the guide →` (lien GitHub) | Discret, border white/10 |
| B — Runbook | I want it automated. | `Get the Runbook →` (ancre) | Intermédiaire, border orange |
| C — Bootcamp | I want something more powerful. | `Discover the Bootcamp →` (lien externe) | Prominent, fond sombre doré |

---

## Section 5 — Get the Runbook `#get-runbook`

**Objectif :** collecter email + qualifier le profil. Point de conversion unique.

### Formulaire natif (composant RunbookForm.tsx)

| Champ | Type | Requis |
|---|---|---|
| First name | text | non |
| Email address | email | oui |
| I want to... | radio (install / migrate) | oui |
| Bitcoin | checkbox | non |

### Post-soumission
- Message : `Check your inbox. The runbook is on its way.`
- Si bitcoin coché : encart orange avec :
  - `And yes, let's talk Bitcoin.` (en orange, gras)
  - Description OrangePeel Flow
  - `Want to connect? Reach out on LinkedIn.`
  - CTA primaire : `OrangePeel Flow` (icône Telegram) → t.me/OrangePeel_Flow
  - CTA secondaire : `LinkedIn` (icône LinkedIn) → linkedin.com/in/manuelproquin

### Backend — API route `app/api/subscribe/route.ts`

Flux séquentiel avec error handling indépendant par étape :

```
POST /api/subscribe
  ├── 1. Validation (email + intention requis)
  ├── 2. Email transactionnel Brevo (POST /v3/smtp/email)
  │     └── templateId selon intention (install / migrate)
  ├── 3. Création/MàJ contact Brevo (POST /v3/contacts)
  │     └── listIds selon intention (install / migrate)
  ├── 4. Si bitcoin → ajout liste bitcoin (POST /v3/contacts/{email}/lists)
  │     └── + log [BITCOIN LEAD]
  └── 5. Retour { success: true/false }
```

### Variables d'environnement (Vercel)

| Variable | Usage |
|---|---|
| `BREVO_API_KEY` | Clé API Brevo |
| `BREVO_TEMPLATE_INSTALL` | ID template email install |
| `BREVO_TEMPLATE_MIGRATION` | ID template email migration |
| `BREVO_LIST_INSTALL` | ID liste CRM install |
| `BREVO_LIST_MIGRATION` | ID liste CRM migration |
| `BREVO_LIST_BITCOIN` | ID liste CRM bitcoin |

---

## Footer

| Élément | Valeur |
|---|---|
| Tagline | `Built by OrangePeel. Open source. Anthropic only.` |
| Lien 1 | GitHub → github.com/man-orangepeel/iagent |
| Lien 2 | LinkedIn → linkedin.com/in/manuelproquin |
| Lien 3 | OrangePeel Flow → t.me/OrangePeel_Flow |
| Copyright | `© OrangePeel. Open source under MIT License.` |

---

## Navigation (sticky header)

```
What it does | vs OpenClaw | Get Runbook | GitHub ↗
```

---

## Meta / SEO

| Champ | Valeur |
|---|---|
| Title tag | `iAgent — Personal AI Agent by OrangePeel. Evolved from OpenClaw.` |
| Meta description | `iAgent is an open source personal AI agent — zero API cost, Anthropic only. Evolved from OpenClaw. Morning briefs, documents, Gmail, Calendar. Get the free runbook.` |
| OG Title | `iAgent by OrangePeel — Evolved from OpenClaw` |
| OG Description | `Open source. Zero API cost. Anthropic only — no third-party intermediaries. Real agent infrastructure — not a SaaS, not a framework.` |

---

## Stack technique

| Composant | Technologie |
|---|---|
| Framework | Next.js (App Router) |
| Hébergement | Vercel |
| Emails transactionnels | Brevo API (v3/smtp/email) |
| CRM / Listes | Brevo API (v3/contacts) |
| Formulaire | Natif React (RunbookForm.tsx) |
| Design system | Tailwind CSS, fonts Playfair Display + Orbitron |
| Icônes | Lucide React + SVG inline (Telegram, LinkedIn) |
