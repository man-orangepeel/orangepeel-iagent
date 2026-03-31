# SITEMAP — orangepeel-iagent.fr
> Architecture détaillée section par section.
> Langue : anglais intégral. One-page avec ancres.

---

## Structure globale

```
/
├── #hero
├── #what-it-does
├── #vs-openclaw
├── #who-is-this-for
├── #get-runbook       ← formulaire Tally embarqué
└── footer
```

---

## Section 1 — Hero `#hero`

**Objectif :** capter l'attention des deux audiences en < 5 secondes. Poser iAgent comme proof of work sérieux.

### Éléments

| Élément | Contenu |
|---|---|
| Eyebrow | `Open Source · Built Without a Framework · Running in Production` |
| H1 | À définir dans COPY.md |
| Subheadline | 2 lignes max — ce que c'est + pour qui |
| CTA primaire | `Get the Runbook` → ancre `#get-runbook` |
| CTA secondaire | `View on GitHub` → https://github.com/man-orangepeel/iagent (target _blank) |
| Signal de crédibilité | Badge ou ligne : "Migrated from OpenClaw · Built by OrangePeel" |

### Notes design
- Fond sombre recommandé (crédibilité tech)
- Pas de hero image générique IA
- Optionnel : extrait de code ou log terminal en arrière-plan

---

## Section 2 — What it does `#what-it-does`

**Objectif :** prouver concrètement ce que l'agent fait. Proof of work visible. Audience tech ET non-tech.

### Éléments

4 capabilities en cards ou liste visuelle :

| # | Capability | Description courte |
|---|---|---|
| 1 | **Morning Brief** | Every morning, a structured briefing delivered to your phone — news, tasks, priorities |
| 2 | **Voice Output** | Text-to-speech summaries you can listen to without opening a screen |
| 3 | **PDF Processing** | Reads and summarizes documents automatically, no manual copy-paste |
| 4 | **Bitcoin Newsletter** | Monitors Bitcoin sources, filters signal from noise, routes to Telegram |

### Notes
- Chaque card : icône + titre + 1-2 phrases
- Pas de bullet hell — densité maîtrisée
- Un label discret : "This is what iAgent does on my machine, every day."
- Lien GitHub en fin de section pour le profil tech : "See the source →"

---

## Section 3 — iAgent vs OpenClaw `#vs-openclaw`

**Objectif :** capturer le trafic OpenClaw, montrer l'évolution, créer deux entrées funnel distinctes.

### Intro copy
Courte accroche (2 lignes) reconnaissant OpenClaw comme point de départ, positionnant iAgent comme l'étape suivante.

### Tableau comparatif

| Feature | OpenClaw | iAgent |
|---|---|---|
| Architecture | Monolithic | Modular |
| Documentation | Minimal | Full runbook (install + migration) |
| Security approach | Basic | Hardened (whitelist, file size checks) |
| Pagination handling | None | Built-in |
| Identity initialization | Manual | Guided (BOOTSTRAP.md → self-deletes) |
| Brief scheduling | Hardcoded | launchd plist (configurable) |
| Migration path | N/A | Documented guide |
| Maintenance | Abandoned / community | Active (OrangePeel) |

> Note : adapter les lignes aux différences réelles du repo avant le build.

### Deux CTA distincts sous le tableau

| Profil | CTA | Action |
|---|---|---|
| **Coming from OpenClaw** | `Migrate to iAgent →` | Ancre `#get-runbook` (précoche "Tech") |
| **Starting from scratch** | `Install from zero →` | Ancre `#get-runbook` (précoche "Non-tech") |

---

## Section 4 — Who is this for `#who-is-this-for`

**Objectif :** bifurcation explicite des audiences. Chacune doit se reconnaître et savoir quoi faire.

### Structure : 2 colonnes ou 2 cards

**Card A — Technical / Bitcoin companies**
- Titre : `You build or operate AI systems`
- Bullet 1 : You want to see how a real agent is architected without a framework
- Bullet 2 : You're evaluating whether OrangePeel can build something for your stack
- Bullet 3 : You want the raw code, not a pitch deck
- CTA : `Let's talk →` → ancre `#get-runbook` (précoche "Bitcoin company") — post-soumission : page de remerciement avec liens LinkedIn + Telegram

**Card B — Non-technical / Executives**
- Titre : `You want AI working for you, not more tools to manage`
- Bullet 1 : You've heard about AI agents but don't know where to start
- Bullet 2 : You want a concrete, step-by-step guide to deploy your own
- Bullet 3 : You're considering delegating AI operations entirely
- CTA : `Get the free Runbook →` → ancre `#get-runbook`

---

## Section 5 — Get the Runbook `#get-runbook`

**Objectif :** collecter email + qualifier le profil. Point de conversion unique.

### Headline
`One system. Two paths.` ou `Get the Runbook — It's free.`

### Sous-headline
1 phrase : ce que contient le runbook (installation step-by-step, migration depuis OpenClaw, configuration).

### Formulaire Tally (iframe embarqué)

3 champs :
1. **First name** (text)
2. **Email** (email, requis)
3. **I am...** (single choice)
   - `A developer or technical person`
   - `A non-technical executive or manager`
   - `Representing a Bitcoin company`

### Logique post-soumission (configurée dans Tally + Brevo)

| Profil sélectionné | Action |
|---|---|
| Developer / Technical | Email Brevo → runbook .md en pièce jointe + séquence bootcamp |
| Non-technical | Email Brevo → runbook .md en pièce jointe + séquence bootcamp |
| Bitcoin company | Page de remerciement avec liens LinkedIn (`linkedin.com/in/manuelproquin`) + Telegram (`t.me/OrangePeel_Flow`) — pas de Calendly |

### Note technique
- Tally iframe : `frameborder="0"`, `width="100%"`, hauteur fixe ou auto
- Pas de bordure visible, fond transparent pour s'intégrer au site
- Le routing post-soumission se configure dans Tally (conditional redirect) + webhook Brevo

---

## Footer

### Éléments

| Élément | Valeur |
|---|---|
| Lien 1 | `GitHub →` https://github.com/man-orangepeel/iagent |
| Lien 2 | `OrangePeel →` https://orangepeel.fr |
| Mention | `Built by OrangePeel · Not a SaaS · Not a framework` |
| Optionnel | Lien LinkedIn OrangePeel |

---

## Navigation (sticky header optionnel)

Si header sticky : liens d'ancre uniquement.

| Label | Ancre |
|---|---|
| What it does | `#what-it-does` |
| vs OpenClaw | `#vs-openclaw` |
| Get Runbook | `#get-runbook` |
| GitHub | lien externe |

---

## Considérations SEO minimales

- Title tag : `iAgent — AI Agent Infrastructure by OrangePeel`
- Meta description : `iAgent is a personal AI agent built without a framework. Open source, production-ready, migrated from OpenClaw. Get the free runbook.`
- OG image : à créer (logo OrangePeel + "iAgent")
- Pas de blog, pas de sitemap complexe — one-page
